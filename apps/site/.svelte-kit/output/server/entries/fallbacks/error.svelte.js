import { e as escape_html } from "../../chunks/escaping.js";
import "clsx";
import { e as pop, p as push } from "../../chunks/index2.js";
import { p as page } from "../../chunks/index3.js";
function Error($$payload, $$props) {
  push();
  $$payload.out.push(`<h1>${escape_html(page.status)}</h1> <p>${escape_html(page.error?.message)}</p>`);
  pop();
}
export {
  Error as default
};
