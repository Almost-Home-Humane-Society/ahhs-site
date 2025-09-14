import { o as head, j as ensure_array_like, h as attr, e as pop, p as push } from "../../../../chunks/index2.js";
import { P as PageTitle } from "../../../../chunks/PageTitle.js";
import { P as PageWrapper } from "../../../../chunks/PageWrapper.js";
import { f as formatPhoneNumber } from "../../../../chunks/formatters.js";
import { e as escape_html } from "../../../../chunks/escaping.js";
const vets = [
  { name: "Four Precious Paws", phone: "7654506750", notes: "Also offers spay/neuter services" },
  { name: "Wildcat Valley Animal Clinic", phone: "7655897297", notes: "Check website for clinic schedule" },
  { name: "Pet Friendly Services of Indiana", url: "https://petfriendlyservices.org/", notes: "Free spay/neuters - income eligibility requirements" }
];
function _page($$payload, $$props) {
  push();
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Low Cost Vaccinations | AHHS</title>`;
    $$payload2.out.push(`<meta name="description" content="Low cost vaccinations and medical care facilities we recommend in the greater Lafayette area."/>`);
  });
  $$payload.out.push(`<div class="flex flex-col basis-full gap-6">`);
  PageTitle($$payload, {
    title: "Low Cost Vaccinations & Medical Care",
    tag: "Keep your costs low and your pet safe."
  });
  $$payload.out.push(`<!----> `);
  PageWrapper($$payload, {
    children: ($$payload2) => {
      const each_array = ensure_array_like(vets);
      $$payload2.out.push(`<div class="grid grid-cols-1 gap-6"><p class="text-base">Proper medical care is a big part of keeping your pet happy and healthy. Almost Home does
				not currently offer vaccine clinics, however, there are many other options available in the
				Greater Lafayette area. To establish a primary vet, check out our <a class="link" href="/resources/local">local resources page</a>!</p></div> <section class="flex flex-col gap-2"><h3 class="text-2xl font-medium">Veterinarian Clinics</h3> <div role="list" class="grid grid-cols-1 gap-1 list-none md:px-4"><!--[-->`);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let item = each_array[$$index];
        $$payload2.out.push(`<div role="listitem" class="flex flex-col gap-0"><span class="flex flex-row gap-2">`);
        if (item.url) {
          $$payload2.out.push("<!--[-->");
          $$payload2.out.push(`<a class="link"${attr("href", item.url)} target="_blank">${escape_html(item.url)}</a>`);
        } else {
          $$payload2.out.push("<!--[!-->");
          $$payload2.out.push(`${escape_html(item.name)}`);
        }
        $$payload2.out.push(`<!--]--> `);
        if (item.phone) {
          $$payload2.out.push("<!--[-->");
          $$payload2.out.push(`<a class="link"${attr("href", item.phone)} type="tel" target="_blank">${escape_html(formatPhoneNumber(item.phone))}</a>`);
        } else {
          $$payload2.out.push("<!--[!-->");
        }
        $$payload2.out.push(`<!--]--></span> `);
        if (item.notes) {
          $$payload2.out.push("<!--[-->");
          $$payload2.out.push(`<span class="text-[0.8rem] italic text-neutral-600 dark:text-neutral-200 pl-4">(*${escape_html(item.notes)})</span>`);
        } else {
          $$payload2.out.push("<!--[!-->");
        }
        $$payload2.out.push(`<!--]--></div>`);
      }
      $$payload2.out.push(`<!--]--></div></section>`);
    }
  });
  $$payload.out.push(`<!----></div>`);
  pop();
}
export {
  _page as default
};
