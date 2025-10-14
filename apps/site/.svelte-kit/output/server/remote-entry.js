import { get_request_store } from "@sveltejs/kit/internal/server";
import { c as create_validator, r as run_remote_function, g as get_cache } from "./chunks/query.js";
import { p, q } from "./chunks/query.js";
import "clsx";
import { r as run } from "./chunks/utils2.js";
// @__NO_SIDE_EFFECTS__
function command(validate_or_fn, maybe_fn) {
  const fn = maybe_fn ?? validate_or_fn;
  const validate = create_validator(validate_or_fn, maybe_fn);
  const __ = { type: "command", id: "", name: "" };
  const wrapper = (arg) => {
    const { event, state } = get_request_store();
    if (state.is_endpoint_request) {
      if (!["POST", "PUT", "PATCH", "DELETE"].includes(event.request.method)) {
        throw new Error(
          `Cannot call a command (\`${__.name}(${maybe_fn ? "..." : ""})\`) from a ${event.request.method} handler`
        );
      }
    } else if (!event.isRemoteRequest) {
      throw new Error(
        `Cannot call a command (\`${__.name}(${maybe_fn ? "..." : ""})\`) during server-side rendering`
      );
    }
    state.refreshes ??= {};
    const promise = Promise.resolve(run_remote_function(event, state, true, arg, validate, fn));
    promise.updates = () => {
      throw new Error(`Cannot call '${__.name}(...).updates(...)' on the server`);
    };
    return (
      /** @type {ReturnType<RemoteCommand<Input, Output>>} */
      promise
    );
  };
  Object.defineProperty(wrapper, "__", { value: __ });
  Object.defineProperty(wrapper, "pending", {
    get: () => 0
  });
  return wrapper;
}
const untrack = run ?? ((value) => value());
function set_nested_value(object, path_string, value) {
  if (path_string.startsWith("n:")) {
    path_string = path_string.slice(2);
    value = value === "" ? void 0 : parseFloat(value);
  } else if (path_string.startsWith("b:")) {
    path_string = path_string.slice(2);
    value = value === "on";
  }
  return deep_set(object, split_path(path_string), value);
}
function convert_formdata(data) {
  let result = /* @__PURE__ */ Object.create(null);
  for (let key of data.keys()) {
    if (key.startsWith("sveltekit:")) {
      continue;
    }
    const is_array = key.endsWith("[]");
    let values = data.getAll(key);
    if (is_array) key = key.slice(0, -2);
    if (values.length > 1 && !is_array) {
      throw new Error(`Form cannot contain duplicated keys — "${key}" has ${values.length} values`);
    }
    values = values.filter((entry) => typeof entry === "string" || entry.name !== "" || entry.size > 0);
    if (key.startsWith("n:")) {
      key = key.slice(2);
      values = values.map((v) => v === "" ? void 0 : parseFloat(
        /** @type {string} */
        v
      ));
    } else if (key.startsWith("b:")) {
      key = key.slice(2);
      values = values.map((v) => v === "on");
    }
    result = set_nested_value(result, key, is_array ? values : values[0]);
  }
  return result;
}
const path_regex = /^[a-zA-Z_$]\w*(\.[a-zA-Z_$]\w*|\[\d+\])*$/;
function split_path(path) {
  if (!path_regex.test(path)) {
    throw new Error(`Invalid path ${path}`);
  }
  return path.split(/\.|\[|\]/).filter(Boolean);
}
function deep_set(object, keys, value) {
  const result = Object.assign(/* @__PURE__ */ Object.create(null), object);
  let current = result;
  for (let i = 0; i < keys.length - 1; i += 1) {
    const key = keys[i];
    const is_array = /^\d+$/.test(keys[i + 1]);
    const exists = key in current;
    const inner = current[key];
    if (exists && is_array !== Array.isArray(inner)) {
      throw new Error(`Invalid array key ${keys[i + 1]}`);
    }
    current[key] = is_array ? exists ? [...inner] : [] : (
      // guard against prototype pollution
      Object.assign(/* @__PURE__ */ Object.create(null), inner)
    );
    current = current[key];
  }
  current[keys[keys.length - 1]] = value;
  return result;
}
function flatten_issues(issues, server = false) {
  const result = {};
  for (const issue of issues) {
    const normalized = { name: "", path: [], message: issue.message, server };
    (result.$ ??= []).push(normalized);
    let name = "";
    if (issue.path !== void 0) {
      for (const segment of issue.path) {
        const key = (
          /** @type {string | number} */
          typeof segment === "object" ? segment.key : segment
        );
        normalized.path.push(key);
        if (typeof key === "number") {
          name += `[${key}]`;
        } else if (typeof key === "string") {
          name += name === "" ? key : "." + key;
        }
        (result[name] ??= []).push(normalized);
      }
      normalized.name = name;
    }
  }
  return result;
}
function deep_get(object, path) {
  let current = object;
  for (const key of path) {
    if (current == null || typeof current !== "object") {
      return current;
    }
    current = current[key];
  }
  return current;
}
function create_field_proxy(target, get_input, depend, set_input, get_issues, path = []) {
  const path_string = build_path_string(path);
  const get_value = () => {
    depend(path_string);
    return untrack(() => deep_get(get_input(), path));
  };
  return new Proxy(target, {
    get(target2, prop) {
      if (typeof prop === "symbol") return target2[prop];
      if (/^\d+$/.test(prop)) {
        return create_field_proxy({}, get_input, depend, set_input, get_issues, [...path, parseInt(prop, 10)]);
      }
      const key = build_path_string(path);
      if (prop === "set") {
        const set_func = function(newValue) {
          set_input(path, newValue);
          return newValue;
        };
        return create_field_proxy(set_func, get_input, depend, set_input, get_issues, [...path, prop]);
      }
      if (prop === "value") {
        return create_field_proxy(get_value, get_input, depend, set_input, get_issues, [...path, prop]);
      }
      if (prop === "issues" || prop === "allIssues") {
        const issues_func = () => {
          const all_issues = get_issues()[key === "" ? "$" : key];
          if (prop === "allIssues") {
            return all_issues?.map((issue) => ({ message: issue.message }));
          }
          return all_issues?.filter((issue) => issue.name === key)?.map((issue) => ({ message: issue.message }));
        };
        return create_field_proxy(issues_func, get_input, depend, set_input, get_issues, [...path, prop]);
      }
      if (prop === "as") {
        const as_func = (type, input_value) => {
          const is_array = type === "file multiple" || type === "select multiple" || type === "checkbox" && typeof input_value === "string";
          const prefix = type === "number" || type === "range" ? "n:" : type === "checkbox" && !is_array ? "b:" : "";
          const base_props = {
            name: prefix + key + (is_array ? "[]" : ""),
            get "aria-invalid"() {
              const issues = get_issues();
              return key in issues ? "true" : void 0;
            }
          };
          if (type !== "text" && type !== "select" && type !== "select multiple") {
            base_props.type = type === "file multiple" ? "file" : type;
          }
          if (type === "submit" || type === "hidden") {
            return Object.defineProperties(base_props, { value: { value: input_value, enumerable: true } });
          }
          if (type === "select" || type === "select multiple") {
            return Object.defineProperties(base_props, {
              multiple: { value: is_array, enumerable: true },
              value: {
                enumerable: true,
                get() {
                  return get_value();
                }
              }
            });
          }
          if (type === "checkbox" || type === "radio") {
            return Object.defineProperties(base_props, {
              value: { value: input_value ?? "on", enumerable: true },
              checked: {
                enumerable: true,
                get() {
                  const value = get_value();
                  if (type === "radio") {
                    return value === input_value;
                  }
                  if (is_array) {
                    return (value ?? []).includes(input_value);
                  }
                  return value;
                }
              }
            });
          }
          if (type === "file" || type === "file multiple") {
            return Object.defineProperties(base_props, {
              multiple: { value: is_array, enumerable: true },
              files: {
                enumerable: true,
                get() {
                  const value = get_value();
                  if (value instanceof File) {
                    if (typeof DataTransfer !== "undefined") {
                      const fileList = new DataTransfer();
                      fileList.items.add(value);
                      return fileList.files;
                    }
                    return { 0: value, length: 1 };
                  }
                  if (Array.isArray(value) && value.every((f) => f instanceof File)) {
                    if (typeof DataTransfer !== "undefined") {
                      const fileList = new DataTransfer();
                      value.forEach((file) => fileList.items.add(file));
                      return fileList.files;
                    }
                    const fileListLike = { length: value.length };
                    value.forEach((file, index) => {
                      fileListLike[index] = file;
                    });
                    return fileListLike;
                  }
                  return null;
                }
              }
            });
          }
          return Object.defineProperties(base_props, {
            value: {
              enumerable: true,
              get() {
                const value = get_value();
                return value != null ? String(value) : "";
              }
            }
          });
        };
        return create_field_proxy(as_func, get_input, depend, set_input, get_issues, [...path, "as"]);
      }
      return create_field_proxy({}, get_input, depend, set_input, get_issues, [...path, prop]);
    }
  });
}
function build_path_string(path) {
  let result = "";
  for (const segment of path) {
    if (typeof segment === "number") {
      result += `[${segment}]`;
    } else {
      result += result === "" ? segment : "." + segment;
    }
  }
  return result;
}
// @__NO_SIDE_EFFECTS__
function form(validate_or_fn, maybe_fn) {
  const fn = maybe_fn ?? validate_or_fn;
  const schema = !maybe_fn || validate_or_fn === "unchecked" ? null : (
    /** @type {any} */
    validate_or_fn
  );
  function create_instance(key) {
    const instance = {};
    instance.method = "POST";
    Object.defineProperty(instance, "enhance", {
      value: () => {
        return { action: instance.action, method: instance.method };
      }
    });
    const button_props = {
      type: "submit",
      onclick: () => {
      }
    };
    Object.defineProperty(button_props, "enhance", {
      value: () => {
        return { type: "submit", formaction: instance.buttonProps.formaction, onclick: () => {
        } };
      }
    });
    Object.defineProperty(instance, "buttonProps", {
      value: button_props
    });
    const __ = {
      type: "form",
      name: "",
      id: "",
      /** @param {FormData} form_data */
      fn: async (form_data) => {
        const validate_only = form_data.get("sveltekit:validate_only") === "true";
        let data = maybe_fn ? convert_formdata(form_data) : void 0;
        if (data && data.id === void 0) {
          const id = form_data.get("sveltekit:id");
          if (typeof id === "string") {
            data.id = JSON.parse(id);
          }
        }
        const output = {};
        output.submission = true;
        const { event, state } = get_request_store();
        const validated = await schema?.["~standard"].validate(data);
        if (validate_only) {
          return validated?.issues ?? [];
        }
        if (validated?.issues !== void 0) {
          handle_issues(output, validated.issues, event.isRemoteRequest, form_data);
        } else {
          if (validated !== void 0) {
            data = validated.value;
          }
          state.refreshes ??= {};
          const invalid = create_invalid();
          try {
            output.result = await run_remote_function(
              event,
              state,
              true,
              data,
              (d) => d,
              (data2) => !maybe_fn ? fn(invalid) : fn(data2, invalid)
            );
          } catch (e) {
            if (e instanceof ValidationError) {
              handle_issues(output, e.issues, event.isRemoteRequest, form_data);
            } else {
              throw e;
            }
          }
        }
        if (!event.isRemoteRequest) {
          get_cache(__, state)[""] ??= output;
        }
        return output;
      }
    };
    Object.defineProperty(instance, "__", { value: __ });
    Object.defineProperty(instance, "action", {
      get: () => `?/remote=${__.id}`,
      enumerable: true
    });
    Object.defineProperty(button_props, "formaction", {
      get: () => `?/remote=${__.id}`,
      enumerable: true
    });
    Object.defineProperty(instance, "fields", {
      get() {
        const data = get_cache(__)?.[""];
        return create_field_proxy(
          {},
          () => data?.input ?? {},
          () => {
          },
          (path, value) => {
            if (data?.submission) {
              return;
            }
            const input = path.length === 0 ? value : deep_set(data?.input ?? {}, path.map(String), value);
            (get_cache(__)[""] ??= {}).input = input;
          },
          () => data?.issues ?? {}
        );
      }
    });
    Object.defineProperty(instance, "result", {
      get() {
        try {
          return get_cache(__)?.[""]?.result;
        } catch {
          return void 0;
        }
      }
    });
    Object.defineProperty(instance, "pending", {
      get: () => 0
    });
    Object.defineProperty(button_props, "pending", {
      get: () => 0
    });
    Object.defineProperty(instance, "preflight", {
      // preflight is a noop on the server
      value: () => instance
    });
    Object.defineProperty(instance, "validate", {
      value: () => {
        throw new Error("Cannot call validate() on the server");
      }
    });
    if (key == void 0) {
      Object.defineProperty(instance, "for", {
        /** @type {RemoteForm<any, any>['for']} */
        value: (key2) => {
          const { state } = get_request_store();
          const cache_key = __.id + "|" + JSON.stringify(key2);
          let instance2 = (state.form_instances ??= /* @__PURE__ */ new Map()).get(cache_key);
          if (!instance2) {
            instance2 = create_instance(key2);
            instance2.__.id = `${__.id}/${encodeURIComponent(JSON.stringify(key2))}`;
            instance2.__.name = __.name;
            state.form_instances.set(cache_key, instance2);
          }
          return instance2;
        }
      });
    }
    return instance;
  }
  return create_instance();
}
function handle_issues(output, issues, is_remote_request, form_data) {
  output.issues = flatten_issues(issues);
  if (!is_remote_request) {
    output.input = {};
    for (let key of form_data.keys()) {
      if (/^[.\]]?_/.test(key)) continue;
      const is_array = key.endsWith("[]");
      const values = form_data.getAll(key).filter((value) => typeof value === "string");
      if (is_array) key = key.slice(0, -2);
      output.input = set_nested_value(
        /** @type {Record<string, any>} */
        output.input,
        key,
        is_array ? values : values[0]
      );
    }
  }
}
function create_invalid() {
  function invalid(...issues) {
    throw new ValidationError(
      issues.map((issue) => {
        if (typeof issue === "string") {
          return {
            path: [],
            message: issue
          };
        }
        return issue;
      })
    );
  }
  return (
    /** @type {import('@sveltejs/kit').Invalid} */
    new Proxy(invalid, {
      get(target, prop) {
        if (typeof prop === "symbol") return (
          /** @type {any} */
          target[prop]
        );
        const create_issue = (message, path = []) => ({
          message,
          path
        });
        return create_issue_proxy(prop, create_issue, []);
      }
    })
  );
}
class ValidationError extends Error {
  /**
   * @param {StandardSchemaV1.Issue[]} issues
   */
  constructor(issues) {
    super("Validation failed");
    this.name = "ValidationError";
    this.issues = issues;
  }
}
function create_issue_proxy(key, create_issue, path) {
  const new_path = [...path, key];
  const issue_func = (message) => create_issue(message, new_path);
  return new Proxy(issue_func, {
    get(target, prop) {
      if (typeof prop === "symbol") return (
        /** @type {any} */
        target[prop]
      );
      if (/^\d+$/.test(prop)) {
        return create_issue_proxy(parseInt(prop, 10), create_issue, new_path);
      }
      return create_issue_proxy(prop, create_issue, new_path);
    }
  });
}
export {
  command,
  form,
  p as prerender,
  q as query
};
