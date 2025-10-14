import "../../../../chunks/async.js";
import { k as head, j as ensure_array_like, h as attr } from "../../../../chunks/index.js";
import { P as PageTitle } from "../../../../chunks/PageTitle.js";
import { P as PageWrapper } from "../../../../chunks/PageWrapper.js";
import { f as formatPhoneNumber } from "../../../../chunks/formatters.js";
import { e as escape_html } from "../../../../chunks/escaping.js";
const vets = [
  { name: "All Pets Animal Hospital", phone: "7654478311" },
  { name: "Battle Ground Veterinary Clinic", phone: "7657422587" },
  { name: "Creekside Animal Hospital", phone: "7657420140" },
  { name: "Four Precious Paws", phone: "7654506750", notes: "Low cost vaccine and spay/neuter clinic" },
  { name: "Greater Lafayette Cat Hospital", phone: "7654494195" },
  { name: "Paw Prints Animal Hospital", phone: "7654742454" },
  { name: "Pets & Vets as Partners", phone: "7654637877" },
  { name: "Pittsburgh Pet Care, Inc.", phone: "7654235500" },
  { name: "Pleasant Paws Veterinary Care", phone: "7654812007", notes: "Specializes in stressfree handling for pets that may not enjoy vet visits" },
  { name: "Purdue University Small Animal Hospital", phone: "7654941107", notes: "After-hours & weekend care for emergencies" },
  { name: "Tabor Hill Vet Clinic", phone: "7652963422" },
  { name: "Tippecanoe Animal Hospital", phone: "7654475088" },
  { name: "Wea Anima Hospital", phone: "7658380954" },
  { name: "Wildcat Valley Animal Clinic, Inc.", phone: "7655897297", notes: "Low cost vacine clinic" },
  { name: "VCA Lafayette Animal Hospital", phone: "7654470521" }
];
const boarders = [
  { name: "Crystal Creek Kennels", phone: "7655898299" },
  { name: "The Dog House of Lafayette", phone: "7655886008" },
  { name: "DogWood Kennel, LLC", phone: "7654294050" },
  { name: "Klondike Kennels", phone: "7654632611" },
  { name: "Paw Prints Animal Hospital", phone: "7654742454" },
  { name: "Pawsitive Pets LLC ", phone: "7653257297" },
  { name: "Pet Med Spa", phone: "7654630221" },
  { name: "The Pet Nannie", phone: "7654777537" },
  { name: "Pittsburgh Pet Care, Inc.", phone: "7654235500" },
  { name: "Pooch at Play", phone: "7658388033" },
  { name: "Pooch Palace Resort", phone: "7654216655" },
  { name: "Seneca Pet Care, LLC", phone: "7655898627" },
  { name: "Show Biz Dog Resort", phone: "7652504049" },
  { name: "Tricia’s Dog House", phone: "7654260810" }
];
const groomers = [
  { name: "Bark Avenue Day Spay", phone: "7654130968" },
  { name: "The Dog House of Lafayette", phone: "7655886008" },
  { name: "Lafayette Groomers", phone: "7654473188" },
  { name: "Pawsitive Pets LLC", phone: "7653257297" },
  { name: "Petsburgh Pet Care Inc.", phone: "7654235500" },
  { name: "PetSmart", phone: "7654473306" },
  { name: "Pet Supplies Plus", phone: "7654461600" },
  { name: "Precious Cuts Pet Spa", phone: "7654748188" },
  { name: "Pooch Palace Resort", phone: "7654216655" },
  { name: "Show Biz Dog Resort", phone: "7652504049" },
  { name: "Simon & Halle’s Pet Boutique", phone: "7658381020" },
  { name: "Tiffany’s Pet Salon", phone: "7652503946" }
];
const trainers = [
  { name: "Klondike Kennels", phone: "7654632611" },
  { name: "Pawsitive Pets LLC", phone: "765325729" },
  { name: "PetSmart", phone: "7654473306" },
  { name: "Pooch Palace Resort", phone: "7654216655" },
  { name: "Simon & Halle’s Pet Boutique", phone: "7658381020" },
  { name: "Stepping Stone Animal Training", phone: "7656377676" }
];
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    head($$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Local Resources | AHHS</title>`);
      });
      $$renderer3.push(`<meta name="description" content="Local vets, boarding facilities, trainers, and grooming services we recommend in the greater Lafayette area."/>`);
    });
    $$renderer2.push(`<div class="flex flex-col basis-full gap-6">`);
    PageTitle($$renderer2, {
      title: "Local Resources",
      tag: "Our trusted partners to keep your pet healthy, happy, trained, and safe."
    });
    $$renderer2.push(`<!----> `);
    PageWrapper($$renderer2, {
      children: ($$renderer3) => {
        $$renderer3.push(`<section class="flex flex-col gap-2"><h3 class="text-2xl font-medium">Veterinarian Clinics</h3> <div role="list" class="grid grid-cols-1 gap-1 list-none md:px-4"><!--[-->`);
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
        $$renderer3.push(`<!--]--></div></section> <section class="flex flex-col gap-2"><h3 class="text-2xl font-medium">Boarding Facilities</h3> <div role="list" class="grid grid-cols-1 gap-1 list-none md:px-4"><!--[-->`);
        const each_array_1 = ensure_array_like(boarders);
        for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
          let item = each_array_1[$$index_1];
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
        $$renderer3.push(`<!--]--></div></section> <section class="flex flex-col gap-2"><h3 class="text-2xl font-medium">Grooming Services</h3> <div role="list" class="grid grid-cols-1 gap-1 list-none md:px-4"><!--[-->`);
        const each_array_2 = ensure_array_like(groomers);
        for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
          let item = each_array_2[$$index_2];
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
        $$renderer3.push(`<!--]--></div></section> <section class="flex flex-col gap-2"><h3 class="text-2xl font-medium">Behavior and Obedience Training</h3> <div role="list" class="grid grid-cols-1 gap-1 list-none md:px-4"><!--[-->`);
        const each_array_3 = ensure_array_like(trainers);
        for (let $$index_3 = 0, $$length = each_array_3.length; $$index_3 < $$length; $$index_3++) {
          let item = each_array_3[$$index_3];
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
