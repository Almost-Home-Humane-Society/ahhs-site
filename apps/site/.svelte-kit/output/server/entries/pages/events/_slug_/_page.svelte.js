import "../../../../chunks/async.js";
import { h as attr, l as element, j as ensure_array_like, s as spread_props, k as head } from "../../../../chunks/index.js";
import { g as getDateString, a as getTimeString, u as urlFor, c as client } from "../../../../chunks/eventUtils.js";
import { P as PageTitle } from "../../../../chunks/PageTitle.js";
import { I as Icon, c as cn } from "../../../../chunks/Icon.js";
import "clsx";
import { e as escape_html } from "../../../../chunks/escaping.js";
import { p as page } from "../../../../chunks/index2.js";
import { c as createQuery } from "../../../../chunks/createQuery.js";
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function isPortableTextSpan(node) {
  return node._type === "span" && "text" in node && typeof node.text == "string" && (typeof node.marks > "u" || Array.isArray(node.marks) && node.marks.every((mark) => typeof mark == "string"));
}
function isPortableTextBlock(node) {
  return (
    // A block doesn't _have_ to be named 'block' - to differentiate between
    // allowed child types and marks, one might name them differently
    typeof node._type == "string" && // Toolkit-types like nested spans are @-prefixed
    node._type[0] !== "@" && // `markDefs` isn't _required_ per say, but if it's there, it needs to be an array
    (!("markDefs" in node) || !node.markDefs || Array.isArray(node.markDefs) && // Every mark definition needs to have an `_key` to be mappable in child spans
    node.markDefs.every((def) => typeof def._key == "string")) && // `children` is required and needs to be an array
    "children" in node && Array.isArray(node.children) && // All children are objects with `_type` (usually spans, but can contain other stuff)
    node.children.every((child) => typeof child == "object" && "_type" in child)
  );
}
function isPortableTextListItemBlock(block) {
  return isPortableTextBlock(block) && "listItem" in block && typeof block.listItem == "string" && (typeof block.level > "u" || typeof block.level == "number");
}
function isPortableTextToolkitList(block) {
  return block._type === "@list";
}
function isPortableTextToolkitSpan(span) {
  return span._type === "@span";
}
function isPortableTextToolkitTextNode(node) {
  return node._type === "@text";
}
const knownDecorators = ["strong", "em", "code", "underline", "strike-through"];
function sortMarksByOccurences(span, index, blockChildren) {
  if (!isPortableTextSpan(span) || !span.marks) return [];
  if (!span.marks.length) return [];
  const marks = span.marks.slice(), occurences = {};
  return marks.forEach((mark) => {
    occurences[mark] = 1;
    for (let siblingIndex = index + 1; siblingIndex < blockChildren.length; siblingIndex++) {
      const sibling = blockChildren[siblingIndex];
      if (sibling && isPortableTextSpan(sibling) && Array.isArray(sibling.marks) && sibling.marks.indexOf(mark) !== -1) occurences[mark]++;
      else break;
    }
  }), marks.sort((markA, markB) => sortMarks(occurences, markA, markB));
}
function sortMarks(occurences, markA, markB) {
  const aOccurences = occurences[markA], bOccurences = occurences[markB];
  if (aOccurences !== bOccurences) return bOccurences - aOccurences;
  const aKnownPos = knownDecorators.indexOf(markA), bKnownPos = knownDecorators.indexOf(markB);
  return aKnownPos !== bKnownPos ? aKnownPos - bKnownPos : markA.localeCompare(markB);
}
function buildMarksTree(block) {
  var _a, _b;
  const {
    children
  } = block, markDefs = (_a = block.markDefs) != null ? _a : [];
  if (!children || !children.length) return [];
  const sortedMarks = children.map(sortMarksByOccurences), rootNode = {
    _type: "@span",
    children: [],
    markType: "<unknown>"
  };
  let nodeStack = [rootNode];
  for (let i = 0; i < children.length; i++) {
    const span = children[i];
    if (!span) continue;
    const marksNeeded = sortedMarks[i] || [];
    let pos = 1;
    if (nodeStack.length > 1) for (pos; pos < nodeStack.length; pos++) {
      const mark = ((_b = nodeStack[pos]) == null ? void 0 : _b.markKey) || "", index = marksNeeded.indexOf(mark);
      if (index === -1) break;
      marksNeeded.splice(index, 1);
    }
    nodeStack = nodeStack.slice(0, pos);
    let currentNode = nodeStack[nodeStack.length - 1];
    if (currentNode) {
      for (const markKey of marksNeeded) {
        const markDef = markDefs == null ? void 0 : markDefs.find((def) => def._key === markKey), markType = markDef ? markDef._type : markKey, node = {
          _type: "@span",
          _key: span._key,
          children: [],
          markDef,
          markType,
          markKey
        };
        currentNode.children.push(node), nodeStack.push(node), currentNode = node;
      }
      if (isPortableTextSpan(span)) {
        const lines = span.text.split(`
`);
        for (let line = lines.length; line-- > 1; ) lines.splice(line, 0, `
`);
        currentNode.children = currentNode.children.concat(lines.map((text) => ({
          _type: "@text",
          text
        })));
      } else currentNode.children = currentNode.children.concat(span);
    }
  }
  return rootNode.children;
}
function nestLists(blocks, mode) {
  const tree = [];
  let currentList;
  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];
    if (block) {
      if (!isPortableTextListItemBlock(block)) {
        tree.push(block), currentList = void 0;
        continue;
      }
      if (!currentList) {
        currentList = listFromBlock(block, i, mode), tree.push(currentList);
        continue;
      }
      if (blockMatchesList(block, currentList)) {
        currentList.children.push(block);
        continue;
      }
      if ((block.level || 1) > currentList.level) {
        const newList = listFromBlock(block, i, mode);
        {
          const lastListItem = currentList.children[currentList.children.length - 1], newLastChild = _objectSpread(_objectSpread({}, lastListItem), {}, {
            children: [...lastListItem.children, newList]
          });
          currentList.children[currentList.children.length - 1] = newLastChild;
        }
        currentList = newList;
        continue;
      }
      if ((block.level || 1) < currentList.level) {
        const matchingBranch = tree[tree.length - 1], match = matchingBranch && findListMatching(matchingBranch, block);
        if (match) {
          currentList = match, currentList.children.push(block);
          continue;
        }
        currentList = listFromBlock(block, i, mode), tree.push(currentList);
        continue;
      }
      if (block.listItem !== currentList.listItem) {
        const matchingBranch = tree[tree.length - 1], match = matchingBranch && findListMatching(matchingBranch, {
          level: block.level || 1
        });
        if (match && match.listItem === block.listItem) {
          currentList = match, currentList.children.push(block);
          continue;
        } else {
          currentList = listFromBlock(block, i, mode), tree.push(currentList);
          continue;
        }
      }
      console.warn("Unknown state encountered for block", block), tree.push(block);
    }
  }
  return tree;
}
function blockMatchesList(block, list) {
  return (block.level || 1) === list.level && block.listItem === list.listItem;
}
function listFromBlock(block, index, mode) {
  return {
    _type: "@list",
    _key: `${block._key || `${index}`}-parent`,
    mode,
    level: block.level || 1,
    listItem: block.listItem,
    children: [block]
  };
}
function findListMatching(rootNode, matching) {
  const level = matching.level || 1, style = matching.listItem || "normal", filterOnType = typeof matching.listItem == "string";
  if (isPortableTextToolkitList(rootNode) && (rootNode.level || 1) === level && filterOnType && (rootNode.listItem || "normal") === style) return rootNode;
  if (!("children" in rootNode)) return;
  const node = rootNode.children[rootNode.children.length - 1];
  return node && !isPortableTextSpan(node) ? findListMatching(node, matching) : void 0;
}
function spanToPlainText(span) {
  let text = "";
  return span.children.forEach((current) => {
    isPortableTextToolkitTextNode(current) ? text += current.text : isPortableTextToolkitSpan(current) && (text += spanToPlainText(current));
  }), text;
}
const LIST_NEST_MODE_HTML = "html";
function getRandomKey() {
  return Math.random().toFixed(5).split(".")[1];
}
function assertSpanKey(span) {
  return {
    _key: span._key || getRandomKey(),
    ...span
  };
}
function assertBlockKey(block) {
  return {
    _key: block._key || getRandomKey(),
    ...block,
    ...block._type === "block" && Array.isArray(block.children) ? {
      children: block.children.map(assertSpanKey)
    } : {}
  };
}
function DefaultMark($$renderer, $$props) {
  let { portableText, children } = $$props;
  let { markType } = portableText;
  if (markType === "strong") {
    $$renderer.push("<!--[-->");
    $$renderer.push(`<strong>`);
    children?.($$renderer);
    $$renderer.push(`<!----></strong>`);
  } else {
    $$renderer.push("<!--[!-->");
    if (markType === "em") {
      $$renderer.push("<!--[-->");
      $$renderer.push(`<em>`);
      children?.($$renderer);
      $$renderer.push(`<!----></em>`);
    } else {
      $$renderer.push("<!--[!-->");
      if (markType === "code") {
        $$renderer.push("<!--[-->");
        $$renderer.push(`<code>`);
        children?.($$renderer);
        $$renderer.push(`<!----></code>`);
      } else {
        $$renderer.push("<!--[!-->");
        if (markType === "underline") {
          $$renderer.push("<!--[-->");
          $$renderer.push(`<span style="text-decoration:underline;">`);
          children?.($$renderer);
          $$renderer.push(`<!----></span>`);
        } else {
          $$renderer.push("<!--[!-->");
          if (markType === "strike-through") {
            $$renderer.push("<!--[-->");
            $$renderer.push(`<del>`);
            children?.($$renderer);
            $$renderer.push(`<!----></del>`);
          } else {
            $$renderer.push("<!--[!-->");
            children?.($$renderer);
            $$renderer.push(`<!---->`);
          }
          $$renderer.push(`<!--]-->`);
        }
        $$renderer.push(`<!--]-->`);
      }
      $$renderer.push(`<!--]-->`);
    }
    $$renderer.push(`<!--]-->`);
  }
  $$renderer.push(`<!--]-->`);
}
function DefaultLink($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { portableText, children } = $$props;
    let href = (() => {
      const { href: href2, url, link, value } = portableText.value;
      return href2 || url || link || value;
    })();
    if (typeof href === "string") {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<a${attr("href", href)}>`);
      children?.($$renderer2);
      $$renderer2.push(`<!----></a>`);
    } else {
      $$renderer2.push("<!--[!-->");
      children?.($$renderer2);
      $$renderer2.push(`<!---->`);
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function DefaultBlock($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { portableText, children } = $$props;
    let style = portableText.value.style || "normal";
    if (["h1", "h2", "h3", "h4", "h5", "h6", "blockquote"].includes(style)) {
      $$renderer2.push("<!--[-->");
      element($$renderer2, style, void 0, () => {
        children?.($$renderer2);
        $$renderer2.push(`<!---->`);
      });
    } else {
      $$renderer2.push("<!--[!-->");
      if (style === "normal") {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<p>`);
        children?.($$renderer2);
        $$renderer2.push(`<!----></p>`);
      } else {
        $$renderer2.push("<!--[!-->");
        children?.($$renderer2);
        $$renderer2.push(`<!---->`);
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function DefaultList($$renderer, $$props) {
  let { portableText, children } = $$props;
  let { value } = portableText;
  let { listItem } = value;
  if (listItem === "number") {
    $$renderer.push("<!--[-->");
    $$renderer.push(`<ol>`);
    children?.($$renderer);
    $$renderer.push(`<!----></ol>`);
  } else {
    $$renderer.push("<!--[!-->");
    $$renderer.push(`<ul>`);
    children?.($$renderer);
    $$renderer.push(`<!----></ul>`);
  }
  $$renderer.push(`<!--]-->`);
}
function DefaultListItem($$renderer, $$props) {
  let { children } = $$props;
  $$renderer.push(`<li>`);
  children?.($$renderer);
  $$renderer.push(`<!----></li>`);
}
function DefaultHardBreak($$renderer) {
  $$renderer.push(`<br/>`);
}
function UnknownType($$renderer, $$props) {
  let { children } = $$props;
  children?.($$renderer);
  $$renderer.push(`<!---->`);
}
const defaultComponents = {
  marks: {
    "strike-through": DefaultMark,
    code: DefaultMark,
    em: DefaultMark,
    strong: DefaultMark,
    underline: DefaultMark,
    link: DefaultLink
  },
  block: {
    blockquote: DefaultBlock,
    h1: DefaultBlock,
    h2: DefaultBlock,
    h3: DefaultBlock,
    h4: DefaultBlock,
    h5: DefaultBlock,
    h6: DefaultBlock,
    normal: DefaultBlock
  },
  list: {
    bullet: DefaultList,
    number: DefaultList
  },
  listItem: {
    bullet: DefaultListItem,
    number: DefaultListItem
  },
  types: {},
  hardBreak: DefaultHardBreak,
  unknownBlockStyle: DefaultBlock,
  unknownList: DefaultList,
  unknownListItem: DefaultListItem,
  unknownMark: DefaultMark,
  unknownType: UnknownType
};
function mergeComponents(parent, overrides = {}) {
  return {
    ...parent,
    ...overrides,
    block: mergeDeeply(parent, overrides, "block"),
    list: mergeDeeply(parent, overrides, "list"),
    listItem: mergeDeeply(parent, overrides, "listItem"),
    marks: mergeDeeply(parent, overrides, "marks"),
    types: mergeDeeply(parent, overrides, "types")
  };
}
function mergeDeeply(parent, overrides, key) {
  const override = overrides[key];
  const parentVal = parent[key];
  if (typeof override === "function") {
    return override;
  }
  if (override && typeof parentVal === "function") {
    return override;
  }
  if (override) {
    return { ...parentVal, ...override };
  }
  return parentVal;
}
function RenderBlock($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { global, node, indexInParent, children } = $$props;
    let { components } = global;
    let { style = "normal" } = node;
    let blockComponent = typeof components.block === "function" ? components.block : components.block[style];
    let blockProps = /* @__PURE__ */ (() => {
      return { global, indexInParent, value: node };
    })();
    let BlockComponent = blockComponent || components.unknownBlockStyle;
    $$renderer2.push(`<!---->`);
    BlockComponent($$renderer2, {
      portableText: blockProps,
      children: ($$renderer3) => {
        children?.($$renderer3);
        $$renderer3.push(`<!---->`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!---->`);
  });
}
function RenderCustomBlock($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { global, node, parentBlock, indexInParent, isInline = false } = $$props;
    let { components } = global;
    let { _type } = node;
    let customComponent = components.types[_type];
    let componentProps = /* @__PURE__ */ (() => {
      return { global, value: node, indexInParent, parentBlock, isInline };
    })();
    let CustomComponent = customComponent || components.unknownType;
    $$renderer2.push(`<!---->`);
    CustomComponent($$renderer2, { portableText: componentProps });
    $$renderer2.push(`<!---->`);
  });
}
function RenderList($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { global, indexInParent, node, children } = $$props;
    let listComponent = (() => {
      const { list } = global.components;
      return typeof list === "function" ? list : list[node.listItem];
    })();
    let listProps = { global, value: node, indexInParent };
    let ListComponent = listComponent || global.components.unknownList;
    $$renderer2.push(`<!---->`);
    ListComponent($$renderer2, {
      portableText: listProps,
      children: ($$renderer3) => {
        children?.($$renderer3);
        $$renderer3.push(`<!---->`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!---->`);
  });
}
function RenderListItem($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { global, indexInParent, node, children } = $$props;
    let { components } = global;
    let style = node.style ?? "normal";
    let listItemComponent = typeof components.listItem === "function" ? components.listItem : components.listItem[style];
    let StyleComponent = (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      style !== "normal" ? components.block[style] : void 0
    );
    let listItemProps = { global, value: node, indexInParent };
    let ListItemComponent = listItemComponent || components.unknownListItem;
    $$renderer2.push(`<!---->`);
    ListItemComponent($$renderer2, {
      portableText: listItemProps,
      children: ($$renderer3) => {
        if (StyleComponent) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<!---->`);
          StyleComponent($$renderer3, {
            portableText: { ...listItemProps, value: { ...node, listItem: void 0 } },
            children: ($$renderer4) => {
              children?.($$renderer4);
              $$renderer4.push(`<!---->`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!---->`);
        } else {
          $$renderer3.push("<!--[!-->");
          children?.($$renderer3);
          $$renderer3.push(`<!---->`);
        }
        $$renderer3.push(`<!--]-->`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!---->`);
  });
}
function RenderSpan($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { global, node, parentBlock, children } = $$props;
    let markComponent = global.components.marks[node.markType];
    let markProps = {
      global,
      parentBlock,
      markType: node.markType,
      // @ts-expect-error @TODO
      value: node.markDef,
      markKey: node.markKey,
      plainTextContent: spanToPlainText(node)
    };
    let MarkComponent = markComponent || global.components.unknownMark;
    $$renderer2.push(`<!---->`);
    MarkComponent($$renderer2, {
      portableText: markProps,
      children: ($$renderer3) => {
        children?.($$renderer3);
        $$renderer3.push(`<!---->`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!---->`);
  });
}
function RenderText($$renderer, $$props) {
  let { global, node } = $$props;
  let { components } = global;
  let { text } = node;
  if (text === "\n") {
    $$renderer.push("<!--[-->");
    if (typeof components.hardBreak === "function") {
      $$renderer.push("<!--[-->");
      $$renderer.push(`<!---->`);
      components.hardBreak($$renderer, {});
      $$renderer.push(`<!---->`);
    } else {
      $$renderer.push("<!--[!-->");
      $$renderer.push(`${escape_html(text)}`);
    }
    $$renderer.push(`<!--]-->`);
  } else {
    $$renderer.push("<!--[!-->");
    $$renderer.push(`${escape_html(text)}`);
  }
  $$renderer.push(`<!--]-->`);
}
function RenderNode_1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { global, options } = $$props;
    let { node, indexInParent, parentBlock, isInline } = options;
    if (isPortableTextToolkitList(node)) {
      $$renderer2.push("<!--[-->");
      RenderList($$renderer2, {
        node,
        indexInParent,
        global,
        children: ($$renderer3) => {
          $$renderer3.push(`<!--[-->`);
          const each_array = ensure_array_like(node.children);
          for (let childIndex = 0, $$length = each_array.length; childIndex < $$length; childIndex++) {
            let child = each_array[childIndex];
            RenderNode_1($$renderer3, {
              options: {
                node: child,
                indexInParent: childIndex,
                parentBlock: void 0,
                isInline: void 0
              },
              global
            });
          }
          $$renderer3.push(`<!--]-->`);
        }
      });
    } else {
      $$renderer2.push("<!--[!-->");
      if (isPortableTextListItemBlock(node)) {
        $$renderer2.push("<!--[-->");
        RenderListItem($$renderer2, {
          node,
          indexInParent,
          global,
          children: ($$renderer3) => {
            $$renderer3.push(`<!--[-->`);
            const each_array_1 = ensure_array_like(buildMarksTree(node));
            for (let childIndex = 0, $$length = each_array_1.length; childIndex < $$length; childIndex++) {
              let child = each_array_1[childIndex];
              RenderNode_1($$renderer3, {
                options: {
                  parentBlock: node,
                  node: child,
                  isInline: true,
                  indexInParent: childIndex
                },
                global
              });
            }
            $$renderer3.push(`<!--]-->`);
          }
        });
      } else {
        $$renderer2.push("<!--[!-->");
        if (isPortableTextToolkitSpan(node)) {
          $$renderer2.push("<!--[-->");
          RenderSpan($$renderer2, {
            node,
            parentBlock,
            global,
            children: ($$renderer3) => {
              $$renderer3.push(`<!--[-->`);
              const each_array_2 = ensure_array_like(node.children);
              for (let childIndex = 0, $$length = each_array_2.length; childIndex < $$length; childIndex++) {
                let child = each_array_2[childIndex];
                RenderNode_1($$renderer3, {
                  options: {
                    parentBlock,
                    node: child,
                    isInline: true,
                    indexInParent: childIndex
                  },
                  global
                });
              }
              $$renderer3.push(`<!--]-->`);
            }
          });
        } else {
          $$renderer2.push("<!--[!-->");
          if (isPortableTextBlock(node)) {
            $$renderer2.push("<!--[-->");
            RenderBlock($$renderer2, {
              node,
              indexInParent,
              global,
              children: ($$renderer3) => {
                $$renderer3.push(`<!--[-->`);
                const each_array_3 = ensure_array_like(buildMarksTree(node));
                for (let childIndex = 0, $$length = each_array_3.length; childIndex < $$length; childIndex++) {
                  let child = each_array_3[childIndex];
                  RenderNode_1($$renderer3, {
                    options: {
                      parentBlock: node,
                      node: child,
                      isInline: true,
                      indexInParent: childIndex
                    },
                    global
                  });
                }
                $$renderer3.push(`<!--]-->`);
              }
            });
          } else {
            $$renderer2.push("<!--[!-->");
            if (isPortableTextToolkitTextNode(node)) {
              $$renderer2.push("<!--[-->");
              RenderText($$renderer2, { node, global });
            } else {
              $$renderer2.push("<!--[!-->");
              if (node) {
                $$renderer2.push("<!--[-->");
                RenderCustomBlock($$renderer2, { node, parentBlock, indexInParent, isInline, global });
              } else {
                $$renderer2.push("<!--[!-->");
              }
              $$renderer2.push(`<!--]-->`);
            }
            $$renderer2.push(`<!--]-->`);
          }
          $$renderer2.push(`<!--]-->`);
        }
        $$renderer2.push(`<!--]-->`);
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]-->`);
  });
}
const getTemplate = (type, prop) => `Unknown ${type}, specify a component for it in the \`components${prop ? "." : ""}${prop}\` prop`;
const getWarningMessage = (type, nodeType) => {
  switch (nodeType) {
    case "block":
      return getTemplate(`block type "${type}"`, "types");
    case "blockStyle":
      return getTemplate(`block style "${type}"`, "block");
    case "listItemStyle":
      return getTemplate(`list item style "${type}"`, "listItem");
    case "listStyle":
      return getTemplate(`list style "${type}"`, "list");
    case "mark":
      return getTemplate(`mark type "${type}"`, "marks");
    default:
      return getTemplate("type");
  }
};
function printWarning(message) {
  console.warn(message);
}
function PortableText($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      value = [],
      components,
      context = {},
      onMissingComponent = true
    } = $$props;
    let mergedComponents = mergeComponents(defaultComponents, components);
    let keyedBlocks = (Array.isArray(value) ? value : [value]).map(assertBlockKey);
    let blocks = nestLists(keyedBlocks, LIST_NEST_MODE_HTML);
    let missingComponentHandler = (type, nodeType) => {
      if (onMissingComponent === false) {
        return;
      }
      const message = getWarningMessage(type, nodeType);
      if (typeof onMissingComponent === "function") {
        onMissingComponent(message, { type, nodeType });
        return;
      }
      printWarning(message);
    };
    $$renderer2.push(`<!--[-->`);
    const each_array = ensure_array_like(blocks);
    for (let index = 0, $$length = each_array.length; index < $$length; index++) {
      let node = each_array[index];
      RenderNode_1($$renderer2, {
        global: {
          components: mergedComponents,
          missingComponentHandler,
          context,
          ptBlocks: blocks,
          ptRawValue: value
        },
        options: { node, isInline: false, indexInParent: index }
      });
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function Loader_circle($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    /**
     * @license @lucide/svelte v0.544.0 - ISC
     *
     * ISC License
     *
     * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
     *
     * Permission to use, copy, modify, and/or distribute this software for any
     * purpose with or without fee is hereby granted, provided that the above
     * copyright notice and this permission notice appear in all copies.
     *
     * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
     * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
     * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
     * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
     * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
     * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
     * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
     *
     * ---
     *
     * The MIT License (MIT) (for portions derived from Feather)
     *
     * Copyright (c) 2013-2023 Cole Bemis
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in all
     * copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
     * SOFTWARE.
     *
     */
    let { $$slots, $$events, ...props } = $$props;
    const iconNode = [["path", { "d": "M21 12a9 9 0 1 1-6.219-8.56" }]];
    Icon($$renderer2, spread_props([
      { name: "loader-circle" },
      /**
       * @component @name LoaderCircle
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMjEgMTJhOSA5IDAgMSAxLTYuMjE5LTguNTYiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/loader-circle
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      props,
      {
        iconNode,
        children: ($$renderer3) => {
          props.children?.($$renderer3);
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      }
    ]));
  });
}
function Spinner($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { class: className, $$slots, $$events, ...restProps } = $$props;
    Loader_circle($$renderer2, spread_props([
      {
        role: "status",
        "aria-label": "Loading",
        class: cn("size-4 animate-spin", className)
      },
      restProps
    ]));
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { params } = page;
    let slug = (() => params.slug)();
    const query = createQuery(() => ({
      queryKey: ["event", slug],
      queryFn: async () => {
        console.log(slug);
        const event2 = await client.fetch('*[_type == "event" && slug.current == $slug][0]', { slug });
        if (!event2) return void 0;
        return event2;
      }
    }));
    const event = (() => query.data)();
    const dateString = (() => getDateString(event))();
    const timeString = (() => getTimeString(event))();
    head($$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(event?.title)}</title>`);
      });
    });
    $$renderer2.push(`<div class="flex flex-col basis-full gap-6">`);
    PageTitle($$renderer2, {
      title: "Event Details",
      tag: "Improving our communities' pets one event at a time"
    });
    $$renderer2.push(`<!----> `);
    if (query.isLoading) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="flex flex-col basis-full items-center justify-center gap-2 text-center">`);
      Spinner($$renderer2, { class: "size-16 text-ahhs-red" });
      $$renderer2.push(`<!----> <span class="text-lg font-medium text-alt">Loading Event...</span></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
      if (event) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<div class="flex flex-col w-full items-center"><div class="flex flex-col lg:w-2/3 xl:w-1/2 lg:max-w-2/3 xl:max-w-1/2"><section class="card w-full gap-6">`);
        if (event.mainImage) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<img${attr("src", urlFor(event.mainImage).url())} alt="Event" class="w-full object-cover rounded-2xl rounded-b-none max-h-[260px]"/>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--> <div class="flex flex-col w-full py-4 px-5 gap-3"><h3 class="text-2xl font-bold">${escape_html(event.title)}</h3> `);
        if (dateString) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<span class="flex flex-row justify-start gap-2 text-alt"><span class="icon-[lucide--calendar] size-4 text-ahhs-red"></span> <span class="text-sm leading-4">${escape_html(dateString)}</span></span>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--> `);
        if (timeString) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<span class="flex flex-row justify-start gap-2 text-alt"><span class="icon-[lucide--clock] size-4 text-ahhs-red"></span> <span class="text-sm leading-4">${escape_html(timeString)}</span></span>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--> <span class="flex flex-row justify-start gap-2 text-alt"><span class="icon-[lucide--map-pin] size-4 text-ahhs-red"></span> <div class="flex flex-col gap-0 justify-start"><span class="text-sm leading-4">${escape_html(event.location?.name)}</span> <span class="text-sm leading-4">${escape_html(event.location?.street)}</span> <span class="text-sm leading-4">${escape_html(event.location?.city)}, ${escape_html(event.location?.state)}
									${escape_html(event.location?.zip)}</span></div></span> `);
        if (event.body) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<div class="prose text-alt pt-4 pb-2 px-4">`);
          PortableText($$renderer2, { value: event.body });
          $$renderer2.push(`<!----></div>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--></div></section></div></div>`);
      } else {
        $$renderer2.push("<!--[!-->");
        $$renderer2.push(`<div class="flex flex-col basis-full items-center justify-center text-center"><span class="text-ahhs-red font-medium">Error loading event details</span></div>`);
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--></div>`);
  });
}
export {
  _page as default
};
