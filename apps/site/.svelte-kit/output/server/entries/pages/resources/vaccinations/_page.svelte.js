import "../../../../chunks/async.js";
import { k as head, j as ensure_array_like, h as attr } from "../../../../chunks/index.js";
import { P as PageTitle } from "../../../../chunks/PageTitle.js";
import { P as PageWrapper } from "../../../../chunks/PageWrapper.js";
import { f as formatPhoneNumber } from "../../../../chunks/formatters.js";
import { e as escape_html } from "../../../../chunks/escaping.js";
const vets = [
  { name: "Four Precious Paws", phone: "7654506750", notes: "Also offers spay/neuter services" },
  { name: "Wildcat Valley Animal Clinic", phone: "7655897297", notes: "Check website for clinic schedule" },
  { name: "Pet Friendly Services of Indiana", url: "https://petfriendlyservices.org/", notes: "Free spay/neuters - income eligibility requirements" }
];
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    head($$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Low Cost Vaccinations | AHHS</title>`);
      });
      $$renderer3.push(`<meta name="description" content="Low cost vaccinations and medical care facilities we recommend in the greater Lafayette area."/>`);
    });
    $$renderer2.push(`<div class="flex flex-col basis-full gap-6">`);
    PageTitle($$renderer2, {
      title: "Low Cost Vaccinations & Medical Care",
      tag: "Keep your costs low and your pet safe."
    });
    $$renderer2.push(`<!----> `);
    PageWrapper($$renderer2, {
      children: ($$renderer3) => {
        $$renderer3.push(`<div class="grid grid-cols-1 gap-6"><p class="text-base">Proper medical care is a big part of keeping your pet happy and healthy. Almost Home does
				not currently offer vaccine clinics, however, there are many other options available in the
				Greater Lafayette area. To establish a primary vet, check out our <a class="link" href="/resources/local">local resources page</a>!</p></div> <section class="flex flex-col gap-2"><h3 class="text-2xl font-medium">Veterinarian Clinics</h3> <div role="list" class="grid grid-cols-1 gap-1 list-none md:px-4"><!--[-->`);
        const each_array = ensure_array_like(vets);
        for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
          let item = each_array[$$index];
          $$renderer3.push(`<div role="listitem" class="flex flex-col gap-0"><span class="flex flex-row gap-2">`);
          if (item.url) {
            $$renderer3.push("<!--[-->");
            $$renderer3.push(`<a class="link"${attr("href", item.url)} target="_blank">${escape_html(item.url)}</a>`);
          } else {
            $$renderer3.push("<!--[!-->");
            $$renderer3.push(`${escape_html(item.name)}`);
          }
          $$renderer3.push(`<!--]--> `);
          if (item.phone) {
            $$renderer3.push("<!--[-->");
            $$renderer3.push(`<a class="link"${attr("href", item.phone)} type="tel" target="_blank">${escape_html(formatPhoneNumber(item.phone))}</a>`);
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]--></span> `);
          if (item.notes) {
            $$renderer3.push("<!--[-->");
            $$renderer3.push(`<span class="text-[0.8rem] italic text-neutral-600 dark:text-neutral-200 pl-4">(*${escape_html(item.notes)})</span>`);
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]--></div>`);
        }
        $$renderer3.push(`<!--]--></div></section>`);
      }
    });
    $$renderer2.push(`<!----></div>`);
  });
}
export {
  _page as default
};
