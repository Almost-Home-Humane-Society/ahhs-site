import { e as escape_html } from "./escaping.js";
import "clsx";
function PageTitle($$payload, $$props) {
  let { tag, title } = $$props;
  $$payload.out.push(`<div class="page-header"><div class="content"><h2 class="text-4xl font-bold">${escape_html(title)}</h2> `);
  if (tag) {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`<p class="text-xl font-medium">${escape_html(tag)}</p>`);
  } else {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--></div></div>`);
}
export {
  PageTitle as P
};
