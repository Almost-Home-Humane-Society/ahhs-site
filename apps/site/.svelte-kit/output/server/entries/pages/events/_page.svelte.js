import "../../../chunks/async.js";
import { k as head, j as ensure_array_like } from "../../../chunks/index.js";
import { E as EventPreview } from "../../../chunks/EventPreview.js";
import { P as PageTitle } from "../../../chunks/PageTitle.js";
import { P as PageWrapper } from "../../../chunks/PageWrapper.js";
import "../../../chunks/eventUtils.js";
import { g as getEvents } from "../../../chunks/remote-5etrda.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const query = getEvents();
    head($$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>All Events | AHHS</title>`);
      });
      $$renderer3.push(`<meta name="description" content="Stay updated with the latest events and happenings at AHHS. Explore our comprehensive events calendar to never miss out on important dates and activities."/>`);
    });
    $$renderer2.push(`<div class="flex flex-col basis-full gap-6">`);
    PageTitle($$renderer2, {
      title: "Events",
      tag: "Stay updated with the latest events and happenings at AHHS."
    });
    $$renderer2.push(`<!----> `);
    PageWrapper($$renderer2, {
      children: ($$renderer3) => {
        if (query.error) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<p class="text-center text-red-500">Error loading events</p>`);
        } else {
          $$renderer3.push("<!--[!-->");
          $$renderer3.push(`<div class="grid grid-cols-1 lg:grid-cols-2 w-full gap-6 lg:px-12 xl:px-24"><!--[-->`);
          const each_array = ensure_array_like(query.current);
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let event = each_array[$$index];
            EventPreview($$renderer3, { event });
          }
          $$renderer3.push(`<!--]--></div>`);
        }
        $$renderer3.push(`<!--]-->`);
      }
    });
    $$renderer2.push(`<!----></div>`);
  });
}
export {
  _page as default
};
