import "../../chunks/async.js";
import { f as attr_class, g as clsx, h as attr, j as ensure_array_like, s as spread_props, k as head } from "../../chunks/index.js";
import { p as page } from "../../chunks/index2.js";
import "clsx";
import { e as escape_html } from "../../chunks/escaping.js";
import { e as ensureQueryFn, a as addToStart, b as addToEnd, R as Removable, c as createRetryer, n as notifyManager, S as Subscribable, m as matchMutation, d as noop, h as hashQueryKeyByOptions, Q as Query, f as matchQuery, g as focusManager, o as onlineManager, r as resolveStaleTime, i as functionalUpdate, j as hashKey, p as partialMatchKey, s as skipToken, k as setQueryClientContext, u as useQueryClient } from "../../chunks/useQueryClient.js";
import { o as onDestroy } from "../../chunks/index-server.js";
function Logo($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { $$slots, $$events, ...props } = $$props;
    $$renderer2.push(`<svg xmlns="http://www.w3.org/2000/svg"${attr_class(clsx(props.class))} viewBox="0 0 696.122 575.416"><path d="M198.775 575.368c-17.681-18.393-34.338-37.858-49.333-57.13-45.744-58.74-83.181-123.932-113.867-192.666-13.107-30.27-27.711-69.063-32.2-97.338-9.595-50.212.848-106.815 36.733-144.813 9.975-11.816 21.424-20.768 34.804-30.45 35.085-22.603 76.573-41.018 117.196-36.066 7.201.958 18.509 1.403 23.715 2.867 27.666 4.641 62.749 17.273 86.417 34.733 14.21 6.402 24.455 27.48 43.202 25.733 11.243-10.333 24.345-26.49 37.333-38 22.685-20.164 51.768-32.76 80.09-37.466 7.202-1.259 15.294-3.165 19.882-3.99 4.687-.94 37.102-.214 41.999 1.092 11.3 2.478 12.122 3.01 19.695 5.034 32.523 7.073 65.202 26.056 90.233 49.985 25.645 25.25 44.752 56.81 54.822 89.145 3.461 11.43 5.674 24.98 6.612 34.872.116 14.673-.472 22.687-4.055 36.042-13.682 47.907-44.975 87.904-77.931 125.729-23.215 25.69-47.4 51.962-72.185 76.224 1.497-8.854 11.848-18.913 16.838-27.578 29.502-46.256 56.97-95.232 75.231-147.089 6.515-20.1 13.107-43.74 14.775-64 3.653-32.076-2.276-69.483-25.954-93.4-15.725-16.096-35.747-26.958-55.519-36.858-4.06-2.199-16.493-7.543-22.273-9.465-16.817-4.031-32.917-8.288-48.927-6.277-32.688 1.727-61.86 23.733-80.733 49.952-20.33 25.326-33.01 55.773-54.165 80.382-9.504 11.498-29.681 8.416-36.502-5.619-3.826-1.96-9.901-15.09-13.933-22.293-25.71-46.95-74.235-88.052-130.28-82.277-38.173 2.15-72.545 26.726-98.387 55.189-22.945 22.244-35.516 53.588-37.333 84.424-2.09 18.15 1.25 36.975 4.067 52.905 6.419 35.358 21.537 70.793 35.454 104.87 4.962 8.88 11.737 23.98 16.545 33.753 8.717 17.31 16.695 33.68 25.2 49.43 23.575 45.02 48.423 90.404 72.733 136.745.904.754 2.687 4.155 0 3.67z" class="fill-ahhs-red-500 dark:fill-ahhs-red-200"></path><g class="fill-ahhs-blue-500 dark:fill-ahhs-blue-200"><path d="M458.908 532.067c-31.008-7.501-60.052-23.71-90.8-24.805-18.29.23-36.027-3.855-53.082-.624-11.403-.243-28.654 1.328-40.985 8.212-18.276 9.902-43.78 25.215-62.666 8.023-10.221-6.444-24.298-23.437-21.934-38.635 9.388-25.856 36.248-39.22 58.178-54.666 17.166-11.033 35.361-24.883 38.422-46.875-.383-8.682 7.778-26.321 21.844-25.725 23.7-4.407 55.731-5.566 81.604 1.2 13.32 7.912 4.238 26.737 12.619 38.066 8.917 23.354 32.196 41.168 53.8 54.718 15.66 10.804 36.847 20.795 42.867 39.6 3.592 21.912-14.654 48.166-39.867 41.51zM475.85 392.705c-20.354-5.453-26.83-31.65-26.358-50.257-.03-23.862 7.585-52.28 30.568-64.276 25.78-8.632 39.702 23.732 38.702 43.998.79 17.623-.919 28.015-6.852 43.285-6.188 13.112-17.9 30.323-36.06 27.25zM196.442 384.062c-24.359-9.417-32.846-39.11-34.778-62.024-1.064-18.428 3.706-40.504 21.11-49.8 22.213-4.385 36.69 23.955 40.63 36.267 6.695 22.605 9.533 58.06-13.962 73.748-4.34 2.244-7.677 2.3-13 1.809zM299.713 307.908c-10.432-2.135-15.841-7.767-21.466-14.336-14.08-19.91-18.512-44.506-16.14-66.667.892-16.185 12.82-43.04 32.668-39.333 26.432 8.336 35.391 40.27 37.032 64.589 1.07 21.69-4.915 57.386-32.094 55.747zM393.189 295.654c-13.9-3.245-20.537-20.255-22.474-32.816-2.59-22.02-.467-39.929 8.1-57.85 5.025-14.155 24.11-33.859 41.243-20.033 16.447 16.945 16.893 45.272 12.717 64.617-4.606 18.997-14.458 48.227-39.586 46.082z"></path></g></svg>`);
  });
}
const drawerState = { value: false };
const resources = {
  icon: '<span class="icon-[material-symbols-light--pet-supplies] size-5 md:size-6"></span>',
  showBottomBorder: true,
  showTopBorder: true,
  title: "Resources",
  items: [
    { label: "Cat Handbook", path: "/handbooks/cat" },
    { label: "Dog Handbook", path: "/handbooks/dog" },
    {
      label: "Frequently Asked Questions",
      path: "/faq",
      icon: '<span class="faq-icon"></span>'
    },
    { label: "Local Resources", path: "/resources/local" },
    { label: "Low Cost Vaccinations", path: "/resources/vaccinations" },
    { label: "Microchipping", path: "/resources/microchipping" },
    { label: "Pet Food Assistance", path: "/resources/pet-food-assistance" },
    { label: "Report a Lost or Found Pet", path: "/resources/lost-and-found" }
  ]
};
const navList = [
  {
    label: "Home",
    path: "/",
    exact: true,
    icon: '<span class="icon-[material-symbols--home-rounded] size-5 md:size-6"></span>'
  },
  {
    label: "Adoptable Cats",
    path: "/cats/available",
    icon: '<span class="icon-[lucide--cat] size-5 md:size-6"></span>'
  },
  {
    label: "Adoptable Dogs",
    path: "/dogs/available",
    icon: '<span class="icon-[lucide--dog] size-5 md:size-6"></span>'
  },
  {
    label: "Adoptable Pocket Pals",
    path: "/pocket-pals/available",
    icon: '<span class="icon-[lucide--rabbit] size-5 md:size-6"></span>'
  },
  resources,
  {
    label: "About Us",
    path: "/about",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="size-5 md:size-6" viewBox="0 0 24 24"><path fill="currentColor" d="M1.5 4v1.5c0 4.15 2.21 7.78 5.5 9.8V20h15v-2c0-2.66-5.33-4-8-4h-.25C9 14 5 10 5 5.5V4m9 0a4 4 0 0 0-4 4a4 4 0 0 0 4 4a4 4 0 0 0 4-4a4 4 0 0 0-4-4"/></svg>'
  },
  {
    label: "Events",
    path: "/events",
    icon: '<span class="icon-[lucide--calendar-days] size-5 md:size-6"></span>'
  },
  {
    label: "Blog",
    path: "/blog",
    icon: '<span class="icon-[fluent--textbox-16-filled] size-5 md:size-6"></span>'
  },
  {
    label: "Donate",
    path: "/donate",
    icon: '<span class="icon-[lucide--heart-handshake] size-5 md:size-6"></span>'
  },
  {
    label: "Shop",
    path: "https://adoptafriend.itemorder.com/shop/home/",
    external: true,
    icon: '<span class="icon-[material-symbols--shopping-bag] size-5 md:size-6"></span>'
  }
];
const getNavItems = (item) => {
  const items = [];
  if (Object.hasOwn(item, "title")) {
    const section = item;
    section.items.forEach((sectionItem) => {
      const theseItems = getNavItems(sectionItem);
      items.push(...theseItems);
    });
  } else {
    items.push(item);
  }
  return items;
};
const showAsActive = (item, pathname) => {
  const fixedPathname = pathname.trim().toLocaleLowerCase();
  let returnValue = false;
  const items = getNavItems(item);
  if (item.isActive !== void 0) return item.isActive;
  items.forEach((item2) => {
    const pathToUse = item2.pathMatch ?? item2.path;
    const fixedPath = pathToUse.includes("?") ? pathToUse.split("?")[0] : pathToUse.trim().toLocaleLowerCase();
    if (item2.isActive) return true;
    if (item2.exact) {
      if (fixedPathname === fixedPath) returnValue = true;
    } else {
      if (fixedPathname.includes(fixedPath)) returnValue = true;
    }
  });
  return returnValue;
};
function NavItem($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { $$slots, $$events, ...props } = $$props;
    const isActive = (() => showAsActive(props, page.url.pathname))();
    $$renderer2.push(`<li${attr_class(`nav-item py-0 px-0 ${props.disabled ? "disabled cursor-not-allowed" : "cursor-pointer"} ${isActive ? "active" : ""}`)}><a class="py-2 px-3 text-sm rounded-md"${attr("href", props.path)}${attr("target", props.external ? "blank" : void 0)}${attr("rel", props.external ? "noreferrer" : void 0)}>${escape_html(props.label)}</a></li>`);
  });
}
function NavSection($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { $$slots, $$events, ...props } = $$props;
    let classList = (() => {
      const list = ["nav-section pb-2"];
      if (props.showBottomBorder) list.push("bottom-border");
      if (props.showTopBorder) list.push("top-border");
      return list.join(" ");
    })();
    $$renderer2.push(`<li${attr_class(`nav-section ${"my-0.5"}`)}>`);
    {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div${attr_class(clsx(classList))}><button class="nav-section-title cursor-pointer justify-start">${escape_html(props.title)} <span class="iconify lucide--chevron-up size-4"></span></button> `);
      {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<!--[-->`);
        const each_array = ensure_array_like(props.items);
        for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
          let item = each_array[$$index];
          if (Object.hasOwn(item, "label")) {
            $$renderer2.push("<!--[-->");
            NavItem($$renderer2, spread_props([item]));
          } else {
            $$renderer2.push("<!--[!-->");
            NavSection($$renderer2, spread_props([item]));
          }
          $$renderer2.push(`<!--]-->`);
        }
        $$renderer2.push(`<!--]-->`);
      }
      $$renderer2.push(`<!--]--></div>`);
    }
    $$renderer2.push(`<!--]--></li>`);
  });
}
function Footer($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    $$renderer2.push(`<footer class="flex flex-col py-4 px-5 bg-ahhs-blue-400/5 dark:bg-ahhs-blue-200/10 mt-12"><div class="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full"><div class="flex flex-col w-full gap-3 items-center"><h3 class="text-2xl font-medium">Hours</h3> <dl class="grid grid-cols-2 gap-x-12 gap-y-1"><dt>Monday</dt> <dd>Closed</dd> <dt>Tuesday</dt> <dd>12pm - 6pm</dd> <dt>Wednesday</dt> <dd>12pm - 6pm</dd> <dt>Thursday</dt> <dd>12pm - 6pm</dd> <dt>Friday</dt> <dd>12pm - 6pm</dd> <dt>Saturday</dt> <dd>12pm - 4pm</dd> <dt>Sunday</dt> <dd>Closed</dd></dl></div> <div class="flex flex-col w-full gap-3 items-center"><h3 class="text-2xl font-medium">Location</h3> <a class="underline text-center" href="https://www.google.com/maps/place/Almost+Home+Humane+Society/@40.4001066,-86.8983925,17z/data=!3m1!4b1!4m5!3m4!1s0x88131d64b777898b:0x2eb8b4b68ce986db!8m2!3d40.4001025!4d-86.8961985" target="_blank">1705 S 2nd Street <br/> Lafayette, IN 47905</a></div> <div class="flex flex-col w-full gap-3 items-center"><h3 class="text-2xl font-medium">Contact Us</h3> <div class="grid grid-cols-1 gap-1 text-center"><a class="underline" href="mailto:info@almosthomehumane.org">info@almosthomehumane.org</a> <a class="underline" href="tel:+17654745222">(765) 474-5222</a></div></div></div> <div class="flex flex-col lg:flex-row w-full justify-center items-center py-4 gap-6 lg:gap-24"><div class="hidden lg:flex flex-row items-center"><span class="icon-[lucide--copyright]"></span> ${escape_html((/* @__PURE__ */ new Date()).getFullYear())} Almost Home Humane Society</div> <div class="flex flex-col items-center justify-center"><span>Follow Us:</span> <div class="flex flex-row gap-2 items-center justify-center"><a aria-label="Facebook" href="https://www.facebook.com/AlmostHomeHS/" target="_blank"><span class="icon-[logos--facebook] size-8 lg:size-6"></span></a> <a aria-label="Facebook" href="https://instagram.com/almosthomehumane" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class="size-8 lg:size-6 -mt-[5px]"><g fill="none"><rect width="256" height="256" fill="url(#skillIconsInstagram0)" rx="60"></rect><rect width="256" height="256" fill="url(#skillIconsInstagram1)" rx="60"></rect><path fill="#fff" d="M128.009 28c-27.158 0-30.567.119-41.233.604c-10.646.488-17.913 2.173-24.271 4.646c-6.578 2.554-12.157 5.971-17.715 11.531c-5.563 5.559-8.98 11.138-11.542 17.713c-2.48 6.36-4.167 13.63-4.646 24.271c-.477 10.667-.602 14.077-.602 41.236s.12 30.557.604 41.223c.49 10.646 2.175 17.913 4.646 24.271c2.556 6.578 5.973 12.157 11.533 17.715c5.557 5.563 11.136 8.988 17.709 11.542c6.363 2.473 13.631 4.158 24.275 4.646c10.667.485 14.073.604 41.23.604c27.161 0 30.559-.119 41.225-.604c10.646-.488 17.921-2.173 24.284-4.646c6.575-2.554 12.146-5.979 17.702-11.542c5.563-5.558 8.979-11.137 11.542-17.712c2.458-6.361 4.146-13.63 4.646-24.272c.479-10.666.604-14.066.604-41.225s-.125-30.567-.604-41.234c-.5-10.646-2.188-17.912-4.646-24.27c-2.563-6.578-5.979-12.157-11.542-17.716c-5.562-5.562-11.125-8.979-17.708-11.53c-6.375-2.474-13.646-4.16-24.292-4.647c-10.667-.485-14.063-.604-41.23-.604zm-8.971 18.021c2.663-.004 5.634 0 8.971 0c26.701 0 29.865.096 40.409.575c9.75.446 15.042 2.075 18.567 3.444c4.667 1.812 7.994 3.979 11.492 7.48c3.5 3.5 5.666 6.833 7.483 11.5c1.369 3.52 3 8.812 3.444 18.562c.479 10.542.583 13.708.583 40.396s-.104 29.855-.583 40.396c-.446 9.75-2.075 15.042-3.444 18.563c-1.812 4.667-3.983 7.99-7.483 11.488c-3.5 3.5-6.823 5.666-11.492 7.479c-3.521 1.375-8.817 3-18.567 3.446c-10.542.479-13.708.583-40.409.583c-26.702 0-29.867-.104-40.408-.583c-9.75-.45-15.042-2.079-18.57-3.448c-4.666-1.813-8-3.979-11.5-7.479s-5.666-6.825-7.483-11.494c-1.369-3.521-3-8.813-3.444-18.563c-.479-10.542-.575-13.708-.575-40.413s.096-29.854.575-40.396c.446-9.75 2.075-15.042 3.444-18.567c1.813-4.667 3.983-8 7.484-11.5s6.833-5.667 11.5-7.483c3.525-1.375 8.819-3 18.569-3.448c9.225-.417 12.8-.542 31.437-.563zm62.351 16.604c-6.625 0-12 5.37-12 11.996c0 6.625 5.375 12 12 12s12-5.375 12-12s-5.375-12-12-12zm-53.38 14.021c-28.36 0-51.354 22.994-51.354 51.355s22.994 51.344 51.354 51.344c28.361 0 51.347-22.983 51.347-51.344c0-28.36-22.988-51.355-51.349-51.355zm0 18.021c18.409 0 33.334 14.923 33.334 33.334c0 18.409-14.925 33.334-33.334 33.334s-33.333-14.925-33.333-33.334c0-18.411 14.923-33.334 33.333-33.334"></path><defs><radialGradient id="skillIconsInstagram0" cx="0" cy="0" r="1" gradientTransform="matrix(0 -253.715 235.975 0 68 275.717)" gradientUnits="userSpaceOnUse"><stop stop-color="#fd5"></stop><stop offset=".1" stop-color="#fd5"></stop><stop offset=".5" stop-color="#ff543e"></stop><stop offset="1" stop-color="#c837ab"></stop></radialGradient><radialGradient id="skillIconsInstagram1" cx="0" cy="0" r="1" gradientTransform="matrix(22.25952 111.2061 -458.39518 91.75449 -42.881 18.441)" gradientUnits="userSpaceOnUse"><stop stop-color="#3771c8"></stop><stop offset=".128" stop-color="#3771c8"></stop><stop offset="1" stop-color="#60f" stop-opacity="0"></stop></radialGradient></defs></g></svg></a></div></div> <div class="lg:hidden flex flex-row items-center"><span class="icon-[lucide--copyright]"></span> ${escape_html((/* @__PURE__ */ new Date()).getFullYear())} Almost Home Humane Society</div></div></footer>`);
  });
}
function NavDrawerLayout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { children } = $$props;
    $$renderer2.push(`<div${attr_class(`flex flex-col p-0 relative flex-auto min-h-dvh w-full ${"bg-surface-dark-01 text-neutral-50"}`)}><div class="bg-container"></div> <div${attr_class(`flex flex-col w-full p-3 xl:p-4 sticky top-0 left-0 z-10 bg-surface-light-01 dark:bg-surface-dark-02`)}><div class="flex flex-row items-center w-full gap-3"><button id="nav_menu_toggle" aria-label="toggle navigation menu" class="btn-icon"><span aria-labelledby="nav_menu_toggle" class="iconify lucide--menu size-7 lg:size-6"></span></button> `);
    Logo($$renderer2, { class: "h-12" });
    $$renderer2.push(`<!----> <h1 class="flex lg:hidden text-2xl font-bold text-ahhs-blue-700 dark:text-white">AHHS</h1> <div class="hidden lg:flex flex-col gap-0"><h1 class="text-2xl font-bold">Almost Home Humane Society</h1> `);
    if (page.url.pathname !== "/") {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<span class="text-ahhs-red-500 dark:text-ahhs-red-200">Adopt a friend. Save a life.</span>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div> <div class="flex flex-row items-center flex-auto"></div> <div class="flex flex-row items-center"><div class="hidden lg:flex flex-row items-center gap-2"><a class="btn-secondary" href="https://adoptafriend.itemorder.com/shop/home/" target="_blank"><span class="icon-[material-symbols-light--shopping-bag]"></span> Shop</a> <a class="btn-primary" href="/donate"><span class="icon-[lucide--heart-handshake]"></span> Donate</a></div> <div class="flex flex-row px-2 py-1 rounded-full gap-2">`);
    {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<button id="light_theme_btn" aria-label="Light theme" class="btn-icon"><span aria-labelledby="light_theme_btn" class="icon-[material-symbols-light--wb-sunny-outline-rounded] size-7 lg:size-6"></span></button>`);
    }
    $$renderer2.push(`<!--]--></div></div></div></div> <div class="drawer"><input id="nav-drawer" type="checkbox" disabled${attr("checked", drawerState.value, true)} aria-hidden="true" class="drawer-toggle"/> <main id="main"><div class="flex flex-col basis-full flex-auto gap-3">`);
    children($$renderer2);
    $$renderer2.push(`<!----></div> `);
    Footer($$renderer2);
    $$renderer2.push(`<!----></main> <div class="drawer-side z-50"><label for="nav-drawer" class="drawer-overlay"></label> `);
    if (drawerState) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<nav class="nav-list list-none"><button class="btn-icon" aria-label="Close navigation drawer" id="nav_drawer_close_btn" data-target="tooltip"><svg xmlns="http://www.w3.org/2000/svg" class="size-6" viewBox="0 0 24 24"><path fill="currentColor" d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"></path></svg></button></nav> <ul class="list-none mt-16 w-full"><!--[-->`);
      const each_array = ensure_array_like(navList);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let item = each_array[$$index];
        if (Object.hasOwn(item, "label")) {
          $$renderer2.push("<!--[-->");
          NavItem($$renderer2, spread_props([item]));
        } else {
          $$renderer2.push("<!--[!-->");
          NavSection($$renderer2, spread_props([item]));
        }
        $$renderer2.push(`<!--]-->`);
      }
      $$renderer2.push(`<!--]--></ul>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div></div></div>`);
  });
}
function infiniteQueryBehavior(pages) {
  return {
    onFetch: (context, query) => {
      const options = context.options;
      const direction = context.fetchOptions?.meta?.fetchMore?.direction;
      const oldPages = context.state.data?.pages || [];
      const oldPageParams = context.state.data?.pageParams || [];
      let result = { pages: [], pageParams: [] };
      let currentPage = 0;
      const fetchFn = async () => {
        let cancelled = false;
        const addSignalProperty = (object) => {
          Object.defineProperty(object, "signal", {
            enumerable: true,
            get: () => {
              if (context.signal.aborted) {
                cancelled = true;
              } else {
                context.signal.addEventListener("abort", () => {
                  cancelled = true;
                });
              }
              return context.signal;
            }
          });
        };
        const queryFn = ensureQueryFn(context.options, context.fetchOptions);
        const fetchPage = async (data, param, previous) => {
          if (cancelled) {
            return Promise.reject();
          }
          if (param == null && data.pages.length) {
            return Promise.resolve(data);
          }
          const createQueryFnContext = () => {
            const queryFnContext2 = {
              client: context.client,
              queryKey: context.queryKey,
              pageParam: param,
              direction: previous ? "backward" : "forward",
              meta: context.options.meta
            };
            addSignalProperty(queryFnContext2);
            return queryFnContext2;
          };
          const queryFnContext = createQueryFnContext();
          const page2 = await queryFn(queryFnContext);
          const { maxPages } = context.options;
          const addTo = previous ? addToStart : addToEnd;
          return {
            pages: addTo(data.pages, page2, maxPages),
            pageParams: addTo(data.pageParams, param, maxPages)
          };
        };
        if (direction && oldPages.length) {
          const previous = direction === "backward";
          const pageParamFn = previous ? getPreviousPageParam : getNextPageParam;
          const oldData = {
            pages: oldPages,
            pageParams: oldPageParams
          };
          const param = pageParamFn(options, oldData);
          result = await fetchPage(oldData, param, previous);
        } else {
          const remainingPages = pages ?? oldPages.length;
          do {
            const param = currentPage === 0 ? oldPageParams[0] ?? options.initialPageParam : getNextPageParam(options, result);
            if (currentPage > 0 && param == null) {
              break;
            }
            result = await fetchPage(result, param);
            currentPage++;
          } while (currentPage < remainingPages);
        }
        return result;
      };
      if (context.options.persister) {
        context.fetchFn = () => {
          return context.options.persister?.(
            fetchFn,
            {
              client: context.client,
              queryKey: context.queryKey,
              meta: context.options.meta,
              signal: context.signal
            },
            query
          );
        };
      } else {
        context.fetchFn = fetchFn;
      }
    }
  };
}
function getNextPageParam(options, { pages, pageParams }) {
  const lastIndex = pages.length - 1;
  return pages.length > 0 ? options.getNextPageParam(
    pages[lastIndex],
    pages,
    pageParams[lastIndex],
    pageParams
  ) : void 0;
}
function getPreviousPageParam(options, { pages, pageParams }) {
  return pages.length > 0 ? options.getPreviousPageParam?.(pages[0], pages, pageParams[0], pageParams) : void 0;
}
var Mutation = class extends Removable {
  #client;
  #observers;
  #mutationCache;
  #retryer;
  constructor(config) {
    super();
    this.#client = config.client;
    this.mutationId = config.mutationId;
    this.#mutationCache = config.mutationCache;
    this.#observers = [];
    this.state = config.state || getDefaultState();
    this.setOptions(config.options);
    this.scheduleGc();
  }
  setOptions(options) {
    this.options = options;
    this.updateGcTime(this.options.gcTime);
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(observer) {
    if (!this.#observers.includes(observer)) {
      this.#observers.push(observer);
      this.clearGcTimeout();
      this.#mutationCache.notify({
        type: "observerAdded",
        mutation: this,
        observer
      });
    }
  }
  removeObserver(observer) {
    this.#observers = this.#observers.filter((x) => x !== observer);
    this.scheduleGc();
    this.#mutationCache.notify({
      type: "observerRemoved",
      mutation: this,
      observer
    });
  }
  optionalRemove() {
    if (!this.#observers.length) {
      if (this.state.status === "pending") {
        this.scheduleGc();
      } else {
        this.#mutationCache.remove(this);
      }
    }
  }
  continue() {
    return this.#retryer?.continue() ?? // continuing a mutation assumes that variables are set, mutation must have been dehydrated before
    this.execute(this.state.variables);
  }
  async execute(variables) {
    const onContinue = () => {
      this.#dispatch({ type: "continue" });
    };
    const mutationFnContext = {
      client: this.#client,
      meta: this.options.meta,
      mutationKey: this.options.mutationKey
    };
    this.#retryer = createRetryer({
      fn: () => {
        if (!this.options.mutationFn) {
          return Promise.reject(new Error("No mutationFn found"));
        }
        return this.options.mutationFn(variables, mutationFnContext);
      },
      onFail: (failureCount, error) => {
        this.#dispatch({ type: "failed", failureCount, error });
      },
      onPause: () => {
        this.#dispatch({ type: "pause" });
      },
      onContinue,
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode,
      canRun: () => this.#mutationCache.canRun(this)
    });
    const restored = this.state.status === "pending";
    const isPaused = !this.#retryer.canStart();
    try {
      if (restored) {
        onContinue();
      } else {
        this.#dispatch({ type: "pending", variables, isPaused });
        await this.#mutationCache.config.onMutate?.(
          variables,
          this,
          mutationFnContext
        );
        const context = await this.options.onMutate?.(
          variables,
          mutationFnContext
        );
        if (context !== this.state.context) {
          this.#dispatch({
            type: "pending",
            context,
            variables,
            isPaused
          });
        }
      }
      const data = await this.#retryer.start();
      await this.#mutationCache.config.onSuccess?.(
        data,
        variables,
        this.state.context,
        this,
        mutationFnContext
      );
      await this.options.onSuccess?.(
        data,
        variables,
        this.state.context,
        mutationFnContext
      );
      await this.#mutationCache.config.onSettled?.(
        data,
        null,
        this.state.variables,
        this.state.context,
        this,
        mutationFnContext
      );
      await this.options.onSettled?.(
        data,
        null,
        variables,
        this.state.context,
        mutationFnContext
      );
      this.#dispatch({ type: "success", data });
      return data;
    } catch (error) {
      try {
        await this.#mutationCache.config.onError?.(
          error,
          variables,
          this.state.context,
          this,
          mutationFnContext
        );
        await this.options.onError?.(
          error,
          variables,
          this.state.context,
          mutationFnContext
        );
        await this.#mutationCache.config.onSettled?.(
          void 0,
          error,
          this.state.variables,
          this.state.context,
          this,
          mutationFnContext
        );
        await this.options.onSettled?.(
          void 0,
          error,
          variables,
          this.state.context,
          mutationFnContext
        );
        throw error;
      } finally {
        this.#dispatch({ type: "error", error });
      }
    } finally {
      this.#mutationCache.runNext(this);
    }
  }
  #dispatch(action) {
    const reducer = (state) => {
      switch (action.type) {
        case "failed":
          return {
            ...state,
            failureCount: action.failureCount,
            failureReason: action.error
          };
        case "pause":
          return {
            ...state,
            isPaused: true
          };
        case "continue":
          return {
            ...state,
            isPaused: false
          };
        case "pending":
          return {
            ...state,
            context: action.context,
            data: void 0,
            failureCount: 0,
            failureReason: null,
            error: null,
            isPaused: action.isPaused,
            status: "pending",
            variables: action.variables,
            submittedAt: Date.now()
          };
        case "success":
          return {
            ...state,
            data: action.data,
            failureCount: 0,
            failureReason: null,
            error: null,
            status: "success",
            isPaused: false
          };
        case "error":
          return {
            ...state,
            data: void 0,
            error: action.error,
            failureCount: state.failureCount + 1,
            failureReason: action.error,
            isPaused: false,
            status: "error"
          };
      }
    };
    this.state = reducer(this.state);
    notifyManager.batch(() => {
      this.#observers.forEach((observer) => {
        observer.onMutationUpdate(action);
      });
      this.#mutationCache.notify({
        mutation: this,
        type: "updated",
        action
      });
    });
  }
};
function getDefaultState() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: false,
    status: "idle",
    variables: void 0,
    submittedAt: 0
  };
}
var MutationCache = class extends Subscribable {
  constructor(config = {}) {
    super();
    this.config = config;
    this.#mutations = /* @__PURE__ */ new Set();
    this.#scopes = /* @__PURE__ */ new Map();
    this.#mutationId = 0;
  }
  #mutations;
  #scopes;
  #mutationId;
  build(client, options, state) {
    const mutation = new Mutation({
      client,
      mutationCache: this,
      mutationId: ++this.#mutationId,
      options: client.defaultMutationOptions(options),
      state
    });
    this.add(mutation);
    return mutation;
  }
  add(mutation) {
    this.#mutations.add(mutation);
    const scope = scopeFor(mutation);
    if (typeof scope === "string") {
      const scopedMutations = this.#scopes.get(scope);
      if (scopedMutations) {
        scopedMutations.push(mutation);
      } else {
        this.#scopes.set(scope, [mutation]);
      }
    }
    this.notify({ type: "added", mutation });
  }
  remove(mutation) {
    if (this.#mutations.delete(mutation)) {
      const scope = scopeFor(mutation);
      if (typeof scope === "string") {
        const scopedMutations = this.#scopes.get(scope);
        if (scopedMutations) {
          if (scopedMutations.length > 1) {
            const index = scopedMutations.indexOf(mutation);
            if (index !== -1) {
              scopedMutations.splice(index, 1);
            }
          } else if (scopedMutations[0] === mutation) {
            this.#scopes.delete(scope);
          }
        }
      }
    }
    this.notify({ type: "removed", mutation });
  }
  canRun(mutation) {
    const scope = scopeFor(mutation);
    if (typeof scope === "string") {
      const mutationsWithSameScope = this.#scopes.get(scope);
      const firstPendingMutation = mutationsWithSameScope?.find(
        (m) => m.state.status === "pending"
      );
      return !firstPendingMutation || firstPendingMutation === mutation;
    } else {
      return true;
    }
  }
  runNext(mutation) {
    const scope = scopeFor(mutation);
    if (typeof scope === "string") {
      const foundMutation = this.#scopes.get(scope)?.find((m) => m !== mutation && m.state.isPaused);
      return foundMutation?.continue() ?? Promise.resolve();
    } else {
      return Promise.resolve();
    }
  }
  clear() {
    notifyManager.batch(() => {
      this.#mutations.forEach((mutation) => {
        this.notify({ type: "removed", mutation });
      });
      this.#mutations.clear();
      this.#scopes.clear();
    });
  }
  getAll() {
    return Array.from(this.#mutations);
  }
  find(filters) {
    const defaultedFilters = { exact: true, ...filters };
    return this.getAll().find(
      (mutation) => matchMutation(defaultedFilters, mutation)
    );
  }
  findAll(filters = {}) {
    return this.getAll().filter((mutation) => matchMutation(filters, mutation));
  }
  notify(event) {
    notifyManager.batch(() => {
      this.listeners.forEach((listener) => {
        listener(event);
      });
    });
  }
  resumePausedMutations() {
    const pausedMutations = this.getAll().filter((x) => x.state.isPaused);
    return notifyManager.batch(
      () => Promise.all(
        pausedMutations.map((mutation) => mutation.continue().catch(noop))
      )
    );
  }
};
function scopeFor(mutation) {
  return mutation.options.scope?.id;
}
var QueryCache = class extends Subscribable {
  constructor(config = {}) {
    super();
    this.config = config;
    this.#queries = /* @__PURE__ */ new Map();
  }
  #queries;
  build(client, options, state) {
    const queryKey = options.queryKey;
    const queryHash = options.queryHash ?? hashQueryKeyByOptions(queryKey, options);
    let query = this.get(queryHash);
    if (!query) {
      query = new Query({
        client,
        queryKey,
        queryHash,
        options: client.defaultQueryOptions(options),
        state,
        defaultOptions: client.getQueryDefaults(queryKey)
      });
      this.add(query);
    }
    return query;
  }
  add(query) {
    if (!this.#queries.has(query.queryHash)) {
      this.#queries.set(query.queryHash, query);
      this.notify({
        type: "added",
        query
      });
    }
  }
  remove(query) {
    const queryInMap = this.#queries.get(query.queryHash);
    if (queryInMap) {
      query.destroy();
      if (queryInMap === query) {
        this.#queries.delete(query.queryHash);
      }
      this.notify({ type: "removed", query });
    }
  }
  clear() {
    notifyManager.batch(() => {
      this.getAll().forEach((query) => {
        this.remove(query);
      });
    });
  }
  get(queryHash) {
    return this.#queries.get(queryHash);
  }
  getAll() {
    return [...this.#queries.values()];
  }
  find(filters) {
    const defaultedFilters = { exact: true, ...filters };
    return this.getAll().find(
      (query) => matchQuery(defaultedFilters, query)
    );
  }
  findAll(filters = {}) {
    const queries = this.getAll();
    return Object.keys(filters).length > 0 ? queries.filter((query) => matchQuery(filters, query)) : queries;
  }
  notify(event) {
    notifyManager.batch(() => {
      this.listeners.forEach((listener) => {
        listener(event);
      });
    });
  }
  onFocus() {
    notifyManager.batch(() => {
      this.getAll().forEach((query) => {
        query.onFocus();
      });
    });
  }
  onOnline() {
    notifyManager.batch(() => {
      this.getAll().forEach((query) => {
        query.onOnline();
      });
    });
  }
};
var QueryClient = class {
  #queryCache;
  #mutationCache;
  #defaultOptions;
  #queryDefaults;
  #mutationDefaults;
  #mountCount;
  #unsubscribeFocus;
  #unsubscribeOnline;
  constructor(config = {}) {
    this.#queryCache = config.queryCache || new QueryCache();
    this.#mutationCache = config.mutationCache || new MutationCache();
    this.#defaultOptions = config.defaultOptions || {};
    this.#queryDefaults = /* @__PURE__ */ new Map();
    this.#mutationDefaults = /* @__PURE__ */ new Map();
    this.#mountCount = 0;
  }
  mount() {
    this.#mountCount++;
    if (this.#mountCount !== 1) return;
    this.#unsubscribeFocus = focusManager.subscribe(async (focused) => {
      if (focused) {
        await this.resumePausedMutations();
        this.#queryCache.onFocus();
      }
    });
    this.#unsubscribeOnline = onlineManager.subscribe(async (online) => {
      if (online) {
        await this.resumePausedMutations();
        this.#queryCache.onOnline();
      }
    });
  }
  unmount() {
    this.#mountCount--;
    if (this.#mountCount !== 0) return;
    this.#unsubscribeFocus?.();
    this.#unsubscribeFocus = void 0;
    this.#unsubscribeOnline?.();
    this.#unsubscribeOnline = void 0;
  }
  isFetching(filters) {
    return this.#queryCache.findAll({ ...filters, fetchStatus: "fetching" }).length;
  }
  isMutating(filters) {
    return this.#mutationCache.findAll({ ...filters, status: "pending" }).length;
  }
  /**
   * Imperative (non-reactive) way to retrieve data for a QueryKey.
   * Should only be used in callbacks or functions where reading the latest data is necessary, e.g. for optimistic updates.
   *
   * Hint: Do not use this function inside a component, because it won't receive updates.
   * Use `useQuery` to create a `QueryObserver` that subscribes to changes.
   */
  getQueryData(queryKey) {
    const options = this.defaultQueryOptions({ queryKey });
    return this.#queryCache.get(options.queryHash)?.state.data;
  }
  ensureQueryData(options) {
    const defaultedOptions = this.defaultQueryOptions(options);
    const query = this.#queryCache.build(this, defaultedOptions);
    const cachedData = query.state.data;
    if (cachedData === void 0) {
      return this.fetchQuery(options);
    }
    if (options.revalidateIfStale && query.isStaleByTime(resolveStaleTime(defaultedOptions.staleTime, query))) {
      void this.prefetchQuery(defaultedOptions);
    }
    return Promise.resolve(cachedData);
  }
  getQueriesData(filters) {
    return this.#queryCache.findAll(filters).map(({ queryKey, state }) => {
      const data = state.data;
      return [queryKey, data];
    });
  }
  setQueryData(queryKey, updater, options) {
    const defaultedOptions = this.defaultQueryOptions({ queryKey });
    const query = this.#queryCache.get(
      defaultedOptions.queryHash
    );
    const prevData = query?.state.data;
    const data = functionalUpdate(updater, prevData);
    if (data === void 0) {
      return void 0;
    }
    return this.#queryCache.build(this, defaultedOptions).setData(data, { ...options, manual: true });
  }
  setQueriesData(filters, updater, options) {
    return notifyManager.batch(
      () => this.#queryCache.findAll(filters).map(({ queryKey }) => [
        queryKey,
        this.setQueryData(queryKey, updater, options)
      ])
    );
  }
  getQueryState(queryKey) {
    const options = this.defaultQueryOptions({ queryKey });
    return this.#queryCache.get(
      options.queryHash
    )?.state;
  }
  removeQueries(filters) {
    const queryCache = this.#queryCache;
    notifyManager.batch(() => {
      queryCache.findAll(filters).forEach((query) => {
        queryCache.remove(query);
      });
    });
  }
  resetQueries(filters, options) {
    const queryCache = this.#queryCache;
    return notifyManager.batch(() => {
      queryCache.findAll(filters).forEach((query) => {
        query.reset();
      });
      return this.refetchQueries(
        {
          type: "active",
          ...filters
        },
        options
      );
    });
  }
  cancelQueries(filters, cancelOptions = {}) {
    const defaultedCancelOptions = { revert: true, ...cancelOptions };
    const promises = notifyManager.batch(
      () => this.#queryCache.findAll(filters).map((query) => query.cancel(defaultedCancelOptions))
    );
    return Promise.all(promises).then(noop).catch(noop);
  }
  invalidateQueries(filters, options = {}) {
    return notifyManager.batch(() => {
      this.#queryCache.findAll(filters).forEach((query) => {
        query.invalidate();
      });
      if (filters?.refetchType === "none") {
        return Promise.resolve();
      }
      return this.refetchQueries(
        {
          ...filters,
          type: filters?.refetchType ?? filters?.type ?? "active"
        },
        options
      );
    });
  }
  refetchQueries(filters, options = {}) {
    const fetchOptions = {
      ...options,
      cancelRefetch: options.cancelRefetch ?? true
    };
    const promises = notifyManager.batch(
      () => this.#queryCache.findAll(filters).filter((query) => !query.isDisabled() && !query.isStatic()).map((query) => {
        let promise = query.fetch(void 0, fetchOptions);
        if (!fetchOptions.throwOnError) {
          promise = promise.catch(noop);
        }
        return query.state.fetchStatus === "paused" ? Promise.resolve() : promise;
      })
    );
    return Promise.all(promises).then(noop);
  }
  fetchQuery(options) {
    const defaultedOptions = this.defaultQueryOptions(options);
    if (defaultedOptions.retry === void 0) {
      defaultedOptions.retry = false;
    }
    const query = this.#queryCache.build(this, defaultedOptions);
    return query.isStaleByTime(
      resolveStaleTime(defaultedOptions.staleTime, query)
    ) ? query.fetch(defaultedOptions) : Promise.resolve(query.state.data);
  }
  prefetchQuery(options) {
    return this.fetchQuery(options).then(noop).catch(noop);
  }
  fetchInfiniteQuery(options) {
    options.behavior = infiniteQueryBehavior(options.pages);
    return this.fetchQuery(options);
  }
  prefetchInfiniteQuery(options) {
    return this.fetchInfiniteQuery(options).then(noop).catch(noop);
  }
  ensureInfiniteQueryData(options) {
    options.behavior = infiniteQueryBehavior(options.pages);
    return this.ensureQueryData(options);
  }
  resumePausedMutations() {
    if (onlineManager.isOnline()) {
      return this.#mutationCache.resumePausedMutations();
    }
    return Promise.resolve();
  }
  getQueryCache() {
    return this.#queryCache;
  }
  getMutationCache() {
    return this.#mutationCache;
  }
  getDefaultOptions() {
    return this.#defaultOptions;
  }
  setDefaultOptions(options) {
    this.#defaultOptions = options;
  }
  setQueryDefaults(queryKey, options) {
    this.#queryDefaults.set(hashKey(queryKey), {
      queryKey,
      defaultOptions: options
    });
  }
  getQueryDefaults(queryKey) {
    const defaults = [...this.#queryDefaults.values()];
    const result = {};
    defaults.forEach((queryDefault) => {
      if (partialMatchKey(queryKey, queryDefault.queryKey)) {
        Object.assign(result, queryDefault.defaultOptions);
      }
    });
    return result;
  }
  setMutationDefaults(mutationKey, options) {
    this.#mutationDefaults.set(hashKey(mutationKey), {
      mutationKey,
      defaultOptions: options
    });
  }
  getMutationDefaults(mutationKey) {
    const defaults = [...this.#mutationDefaults.values()];
    const result = {};
    defaults.forEach((queryDefault) => {
      if (partialMatchKey(mutationKey, queryDefault.mutationKey)) {
        Object.assign(result, queryDefault.defaultOptions);
      }
    });
    return result;
  }
  defaultQueryOptions(options) {
    if (options._defaulted) {
      return options;
    }
    const defaultedOptions = {
      ...this.#defaultOptions.queries,
      ...this.getQueryDefaults(options.queryKey),
      ...options,
      _defaulted: true
    };
    if (!defaultedOptions.queryHash) {
      defaultedOptions.queryHash = hashQueryKeyByOptions(
        defaultedOptions.queryKey,
        defaultedOptions
      );
    }
    if (defaultedOptions.refetchOnReconnect === void 0) {
      defaultedOptions.refetchOnReconnect = defaultedOptions.networkMode !== "always";
    }
    if (defaultedOptions.throwOnError === void 0) {
      defaultedOptions.throwOnError = !!defaultedOptions.suspense;
    }
    if (!defaultedOptions.networkMode && defaultedOptions.persister) {
      defaultedOptions.networkMode = "offlineFirst";
    }
    if (defaultedOptions.queryFn === skipToken) {
      defaultedOptions.enabled = false;
    }
    return defaultedOptions;
  }
  defaultMutationOptions(options) {
    if (options?._defaulted) {
      return options;
    }
    return {
      ...this.#defaultOptions.mutations,
      ...options?.mutationKey && this.getMutationDefaults(options.mutationKey),
      ...options,
      _defaulted: true
    };
  }
  clear() {
    this.#queryCache.clear();
    this.#mutationCache.clear();
  }
};
function QueryClientProvider($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { client = new QueryClient(), children } = $$props;
    setQueryClientContext(client);
    onDestroy(() => {
      client.unmount();
    });
    children($$renderer2);
    $$renderer2.push(`<!---->`);
  });
}
function Devtools($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      client = useQueryClient()
    } = $$props;
    $$renderer2.push(`<div class="tsqd-parent-container"></div>`);
  });
}
function _layout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { children } = $$props;
    const queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: 1e3 * 60 * 60,
          // 1 hour
          refetchOnWindowFocus: false
        }
      }
    });
    let themeColor = (() => {
      if (page.url.pathname === "/") {
        return "#050518";
      } else {
        return "#232332";
      }
    })();
    head($$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>AHHS</title>`);
      });
      $$renderer3.push(`<link rel="apple-touch-icon" sizes="180x180" href="favicon.png"/> <link rel="icon" type="image/png" sizes="32x32" href="favicon.png"/> <link rel="icon" type="image/png" sizes="16x16" href="favicon.png"/> <link rel="shortcut icon" href="favicon.ico"/> <link rel="manifest" href="manifest.json"/> <meta name="theme-color"${attr("content", themeColor)}/> <meta name="description" content="Almost Home Humane Society is a non-profit animal rescue shelter serving the greater Lafayette, Indiana area."/>`);
    });
    $$renderer2.push(`<div class="skip-to-main-link"><a href="#main">Skip to main content</a></div> `);
    QueryClientProvider($$renderer2, {
      client: queryClient,
      children: ($$renderer3) => {
        {
          $$renderer3.push("<!--[!-->");
          NavDrawerLayout($$renderer3, {
            children: ($$renderer4) => {
              children($$renderer4);
              $$renderer4.push(`<!---->`);
            }
          });
        }
        $$renderer3.push(`<!--]--> `);
        Devtools($$renderer3, {});
        $$renderer3.push(`<!---->`);
      }
    });
    $$renderer2.push(`<!---->`);
  });
}
export {
  _layout as default
};
