import "./async.js";
import "clsx";
function PageWrapper($$renderer, $$props) {
  let { children } = $$props;
  $$renderer.push(`<div class="flex flex-col basis-full p-4 md:p-8 lg:px-12 2xl:px-24 pb-12 gap-6 relative">`);
  children($$renderer);
  $$renderer.push(`<!----></div>`);
}
export {
  PageWrapper as P
};
