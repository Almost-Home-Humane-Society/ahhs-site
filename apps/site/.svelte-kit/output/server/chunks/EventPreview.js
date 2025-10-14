import "./async.js";
import { h as attr } from "./index.js";
import { e as escape_html } from "./escaping.js";
import { g as getDateString, a as getTimeString, u as urlFor } from "./eventUtils.js";
function EventPreview($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { event, forHomePage } = $$props;
    let monthName = (() => {
      if (!event.start) return "";
      const month = new Date(event.start).getMonth();
      if (month === 0) return "JAN";
      if (month === 1) return "FEB";
      if (month === 2) return "MAR";
      if (month === 3) return "APR";
      if (month === 4) return "MAY";
      if (month === 5) return "JUN";
      if (month === 6) return "JUL";
      if (month === 7) return "AUG";
      if (month === 8) return "SEP";
      if (month === 9) return "OCT";
      if (month === 10) return "NOV";
      if (month === 11) return "DEC";
      return "";
    })();
    let dayString = (() => {
      if (!event.start) return "";
      const day = new Date(event.start).getDate();
      if (day < 10) return `0${day}`;
      return day.toString();
    })();
    const slug = (() => {
      if (!event.start) return event.slug?.current ?? "";
      return `${event.slug?.current ?? ""}`;
    })();
    const dateString = (() => getDateString(event))();
    const timeString = (() => getTimeString(event))();
    $$renderer2.push(`<a${attr("aria-label", `${event.title} event on ${new Date(event.start ?? /* @__PURE__ */ new Date()).toLocaleDateString()}`)}${attr("href", `/events/${slug}`)} class="card w-full grid grid-cols-6 p-0 cursor-pointer">`);
    if (event.mainImage) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="flex flex-row h-full col-span-2 rounded-l-2xl"><img${attr("src", urlFor(event.mainImage).url())} alt="Event" class="w-full h-full object-cover rounded-l-[0.95rem]"/></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div class="flex flex-row col-span-2 gap-0 h-full items-center justify-center bg-ahhs-red-400 dark:bg-ahhs-red-300 py-2 px-3 rounded-l-2xl border-ahhs-red-400 dark:border-ahhs-red-300 -ml-[1px] text-white"><div class="flex flex-row w-fit h-fit"><span class="text-xl font-bold">${escape_html(monthName)}</span> <span class="text-5xl font-extrabold mt-4">${escape_html(dayString)}</span></div></div>`);
    }
    $$renderer2.push(`<!--]--> <div class="flex flex-col flex-auto col-span-4 gap-1 items-start py-2 px-3">`);
    if (forHomePage) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<h4 class="flex flex-row justify-start text-start text-lg font-medium text-balance">${escape_html(event.title)}</h4>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<h3 class="flex flex-row justify-start text-start text-xl font-medium text-balance">${escape_html(event.title)}</h3>`);
    }
    $$renderer2.push(`<!--]--> `);
    if (dateString) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<span class="flex flex-row justify-start text-start text-sm text-alt text-balance gap-2 items-center leading-4"><span class="icon-[lucide--calendar] size-3 text-ahhs-red"></span> ${escape_html(dateString)}</span>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (timeString) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<span class="flex flex-row justify-start text-start text-sm text-alt text-balance gap-2 items-center leading-4"><span class="icon-[lucide--clock] size-3 text-ahhs-red"></span> ${escape_html(timeString)}</span>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <span class="flex flex-row justify-start gap-2 text-alt"><span class="icon-[lucide--map-pin] size-3 text-ahhs-red"></span> <div class="flex flex-col gap-0 justify-start"><span class="text-sm leading-4">${escape_html(event.location?.name)}</span> <span class="text-sm leading-4">${escape_html(event.location?.street)}</span> <span class="text-sm leading-4">${escape_html(event.location?.city)}, ${escape_html(event.location?.state)}
					${escape_html(event.location?.zip)}</span></div></span> <div class="flex flex-row w-full justify-end"><div class="btn-primary-sm">View All Info <span class="iconify lucide--chevron-right size-5"></span></div></div></div></a>`);
  });
}
export {
  EventPreview as E
};
