import "./async.js";
import { e as escape_html } from "./escaping.js";
import "clsx";
function PageTitle($$renderer, $$props) {
  let { tag, title } = $$props;
  $$renderer.push(`<div class="page-header"><div class="content"><h2 class="text-4xl font-bold">${escape_html(title)}</h2> `);
  if (tag) {
    $$renderer.push("<!--[-->");
    $$renderer.push(`<p class="text-xl font-medium">${escape_html(tag)}</p>`);
  } else {
    $$renderer.push("<!--[!-->");
  }
  $$renderer.push(`<!--]--></div></div>`);
}
export {
  PageTitle as P
};
