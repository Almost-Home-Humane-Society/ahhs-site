import "clsx";
function PageWrapper($$payload, $$props) {
  let { children } = $$props;
  $$payload.out.push(`<div class="flex flex-col basis-full p-4 md:p-8 lg:px-12 2xl:px-24 pb-12 gap-6 relative">`);
  children($$payload);
  $$payload.out.push(`<!----></div>`);
}
export {
  PageWrapper as P
};
