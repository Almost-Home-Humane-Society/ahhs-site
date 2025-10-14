import "@sveltejs/kit/internal/server";
import "./utils.js";
import "@sveltejs/kit";
import "clsx";
import { p as prerender } from "./query.js";
import { c as client } from "./eventUtils.js";
import { init_remote_functions } from "@sveltejs/kit/internal";
const $$_self_$$ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get getEvents() {
    return getEvents;
  }
}, Symbol.toStringTag, { value: "Module" }));
const getEvents = prerender(async () => {
  const todaysDate = (/* @__PURE__ */ new Date()).toISOString();
  const events = await client.fetch('*[_type == "event" && start >= $date] | order(start asc)', { date: todaysDate });
  return events;
});
init_remote_functions($$_self_$$, "src/routes/events/data.remote.ts", "5etrda");
for (const [name, fn] of Object.entries($$_self_$$)) {
  fn.__.id = "5etrda/" + name;
  fn.__.name = name;
}
export default $$_self_$$;;
export {
  getEvents as g
};
