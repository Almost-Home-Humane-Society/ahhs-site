import { h as attr, e as pop, p as push, o as head } from "../../chunks/index2.js";
import "clsx";
import { e as escape_html } from "../../chunks/escaping.js";
function AboutSection($$payload) {
  $$payload.out.push(`<section class="py-4 px-2 lg:px-8 flex flex-col gap-3 lg:gap-6 w-full lg:w-10/12 border-t border-t-ahhs-red-200"><h2 class="text-3xl font-medium">About Us</h2> <p>Almost Home Humane Society was formed as the Tippecanoe County Humane Association in 1939 and
		since that time has been dedicated to the care of pets in our community. Today, Almost Home
		serves more than 3,000 pets each year through its programs.</p> <p>AHHS is a private, non-profit organization and is not directly affiliated with any national
		organizations or coalitions. Almost Home serves the Greater Lafayette area and the animals
		within. AHHS accepts owner surrendered pets and pets transferred from other animal welfare
		organizations as shelter capacity allows and only by scheduled appointment.</p> <div class="grid grid-cols-1 px-0 md:px-12 xl:px-0 xl:grid-cols-3 gap-6"><div class="card w-full gap-6"><img src="ahhs_mission_2.webp" alt="Dog" class="w-full h-48 lg:h-56 object-cover rounded-2xl rounded-b-none"/> <div class="flex flex-col w-full py-4 px-5 gap-3"><h3 class="text-2xl font-medium">Mission</h3> <p class="px-4">Almost Home Humane Society (AHHS) inspires a more humane community by educating, providing
					resources and collaborating to improve the lives of animals and their families.</p></div></div> <div class="card w-full gap-6"><img src="ahhs_vision_1.webp" alt="Dog" class="w-full h-48 lg:h-56 object-cover rounded-2xl rounded-b-none"/> <div class="flex flex-col w-full py-4 px-5 gap-3"><h3 class="text-2xl font-medium">Vision</h3> <p class="px-4">Almost Home Humane Society is Tippecanoe County’s leading animal care and resource
					organization.</p></div></div> <div class="card w-full gap-6"><img src="ahhs_values_1.webp" alt="Dog" class="w-full h-48 lg:h-56 object-cover rounded-2xl rounded-b-none"/> <div class="flex flex-col w-full py-4 px-5 gap-3"><h3 class="text-2xl font-medium">Values</h3> <div class="grid grid-cols-1 lg:grid-cols-2 px-4"><div class="flex flex-row items-center gap-3 text-start justify-start"><span class="icon-[mdi--paw] text-ahhs-red-400 dark:text-ahhs-red-300"></span> Empathy</div> <div class="flex flex-row items-center gap-3 text-start justify-start"><span class="icon-[mdi--paw] text-ahhs-red-400 dark:text-ahhs-red-300"></span> Collaboration</div> <div class="flex flex-row items-center gap-3 text-start justify-start"><span class="icon-[mdi--paw] text-ahhs-red-400 dark:text-ahhs-red-300"></span> Compassion</div> <div class="flex flex-row items-center gap-3 text-start justify-start"><span class="icon-[mdi--paw] text-ahhs-red-400 dark:text-ahhs-red-300"></span> Dedication</div> <div class="flex flex-row items-center gap-3 text-start justify-start"><span class="icon-[mdi--paw] text-ahhs-red-400 dark:text-ahhs-red-300"></span> Patience</div> <div class="flex flex-row items-center gap-3 text-start justify-start"><span class="icon-[mdi--paw] text-ahhs-red-400 dark:text-ahhs-red-300"></span> Leadership</div> <li class="flex flex-row items-center gap-3 text-start justify-start"><span class="icon-[mdi--paw] text-ahhs-red-400 dark:text-ahhs-red-300"></span> Passion</li> <div class="flex flex-row items-center gap-3 text-start justify-start"><span class="icon-[mdi--paw] text-ahhs-red-400 dark:text-ahhs-red-300"></span> Respect</div></div></div></div></div></section>`);
}
function EventPreview($$payload, $$props) {
  push();
  let { $$slots, $$events, ...props } = $$props;
  let monthName = (() => {
    const month = props.date.getMonth();
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
    const day = props.date.getDate();
    if (day < 10) return `0${day}`;
    return day.toString();
  })();
  $$payload.out.push(`<a${attr("aria-label", `${props.title} event on ${props.date.toLocaleDateString()}`)}${attr("href", props.route)} class="card w-full grid grid-cols-6 p-0 cursor-pointer"><div class="flex flex-row col-span-2 gap-0 h-full items-center justify-center bg-ahhs-red-400 dark:bg-ahhs-red-300 py-2 px-3 rounded-l-2xl border-ahhs-red-400 dark:border-ahhs-red-300 -ml-[1px] text-white"><div class="flex flex-row w-fit h-fit"><span class="text-xl font-bold">${escape_html(monthName)}</span> <span class="text-5xl font-extrabold mt-4">${escape_html(dayString)}</span></div></div> <div class="flex flex-col flex-auto col-span-4 gap-0 items-start py-2 px-3"><h3 class="flex flex-row justify-start text-start text-xl font-medium text-balance">${escape_html(props.title)}</h3> <span class="flex flex-row justify-start text-start text-sm text-alt text-balance gap-2 items-center"><span class="icon-[lucide--map-pin] size-3"></span> ${escape_html(props.location)}</span> <span class="flex flex-row justify-start text-start text-sm text-alt text-balance gap-2 items-center"><span class="icon-[lucide--clock] size-3"></span> ${escape_html(props.time)}</span></div></a>`);
  pop();
}
function EventsSection($$payload, $$props) {
  push();
  $$payload.out.push(`<section class="py-4 px-2 lg:px-8 flex flex-col gap-3 lg:gap-6 w-full lg:w-10/12 border-t border-t-ahhs-red-200"><h2 class="text-3xl font-medium">Events</h2> <p>Blurb about AHHS in the community, etc.</p> <button class="btn-primary">View All Events <span class="iconify lucide--chevron-right size-5"></span></button> <h3 class="text-xl font-medium">Upcoming</h3> <div class="grid grid-cols-1 md:px-12 lg:px-4 lg:grid-cols-2 2xl:grid-cols-3 gap-3 lg:gap-6">`);
  EventPreview($$payload, {
    date: new Date(2025, 6, 24),
    location: "123 Example Rd, Lafayette IN",
    route: "/events/1",
    time: "9:00am - 2:00pm",
    title: "Example Event"
  });
  $$payload.out.push(`<!----> `);
  EventPreview($$payload, {
    date: new Date(2025, 7, 5),
    location: "123 Example Rd, Lafayette IN",
    route: "/events/2",
    time: "9:00am - 2:00pm",
    title: "Example Event"
  });
  $$payload.out.push(`<!----> `);
  EventPreview($$payload, {
    date: new Date(2025, 9, 17),
    location: "123 Example Rd, Lafayette IN",
    route: "/events/3",
    time: "9:00am - 2:00pm",
    title: "Example Event"
  });
  $$payload.out.push(`<!----></div></section>`);
  pop();
}
function PetAdoptionSection($$payload) {
  $$payload.out.push(`<section class="py-4 px-2 lg:px-8 flex flex-col gap-3 lg:gap-6 w-full lg:w-10/12 border-t border-t-ahhs-red-200"><h2 class="text-3xl font-medium">Pet Adoptions</h2> <p>Blurb about what AHHS pet adoption services/commitment is etc. Selling point here for adoptions.</p> <button class="btn-primary">Learn More <span class="iconify lucide--chevron-right size-5"></span></button> <div class="grid grid-cols-1 lg:grid-cols-3 gap-3 md:px-12 lg:px-4 lg:gap-6"><div class="block"><div class="card flex flex-row flex-auto relative"><img src="ahhs_dog_1.webp" alt="Dog" class="w-full h-48 lg:h-56 object-cover rounded-2xl"/> <button class="btn-primary-sm absolute bottom-2 right-2 shadow-md shadow-neutral-900/60">View Available Dogs <span class="iconify lucide--chevron-right size-5"></span></button></div></div> <div class="block"><div class="card flex flex-row flex-auto relative"><img src="ahhs_cat_1.webp" alt="Cat" class="w-full h-48 lg:h-56 object-cover rounded-2xl"/> <button class="btn-primary-sm absolute bottom-2 right-2 shadow-md shadow-neutral-900/60">View Available Cats <span class="iconify lucide--chevron-right size-5"></span></button></div></div> <div class="block"><div class="card flex flex-row flex-auto relative"><img src="ahhs_rabbit_1.webp" alt="Rabbit" class="w-full h-48 lg:h-56 object-cover rounded-2xl"/> <button class="btn-primary-sm w-fit absolute bottom-2 right-2 shadow-md shadow-neutral-900/60">View Available Pocket Pets <span class="iconify lucide--chevron-right size-5"></span></button></div></div></div></section>`);
}
function _page($$payload) {
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Home | AHHS</title>`;
    $$payload2.out.push(`<meta name="description" content="Welcome to Almost Home Humane Society: a non-profit animal rescue shelter servicing the greater Lafayette, Indiana area."/>`);
  });
  $$payload.out.push(`<div class="flex flex-col gap-6 w-full items-center"><div class="grid grid-cols-1 md:grid-cols-2 gap-3 p-4 w-full lg:w-10/12"><div class="flex flex-col gap-3 items-center justify-around py-6"><h1 class="flex lg:hidden text-3xl font-extrabold text-ahhs-blue text-center text-balance dark:text-white">Almost Home Humane Society</h1> <span class="text-2xl lg:text-4xl xl:text-5xl font-bold text-ahhs-red-500 dark:text-ahhs-red-200 text-center text-pretty">Adopt a friend. Save a life.</span> <div class="flex md:hidden flex-row justify-center w-full h-[50vh] relative p-4"><img class="absolute h-1/2 w-1/3 top-0 left-0 rounded-2xl object-cover shadow-md scale-[98%]" alt="Young girl with cat" src="child_cat.webp"/> <img class="absolute h-1/2 w-2/3 bottom-0 left-0 rounded-2xl object-cover shadow-md scale-[98%]" alt="Woman playing with cat and dog" src="dog_cat_girl.webp"/> <img class="absolute h-1/2 w-1/3 bottom-0 right-0 rounded-2xl object-cover shadow-md scale-[98%]" alt="Woman holding dog on a hike" src="woman_dog.webp"/> <img class="absolute h-1/2 w-2/3 top-0 right-0 rounded-2xl object-cover shadow-md scale-[98%]" alt="Male sitting with dog" src="dog_guy.webp"/></div> <p class="text-base xl:text-xl 2xl:text-2xl lg:px-12 text-center">Almost Home Humane Society is a non-profit animal rescue shelter serving more than 3,000
				annually in the greater Lafayette, Indiana area. AHHS accepts owner surrendered pets and
				pets transferred from other animal welfare organizations as shelter capacity allows and only
				by scheduled appointment.</p> <div class="flex flex-row gap-3 lg:gap-6 justify-center"><a href="/dogs/available" class="btn-primary">I Want a Dog!</a> <a href="/cats/available" class="btn-primary">I Want a Cat!</a></div></div> <div class="hidden md:flex flex-row justify-center w-full h-[50vh] relative p-4"><img class="absolute h-1/2 w-1/3 top-0 left-0 rounded-2xl object-cover shadow-md scale-[98%]" alt="Young girl with cat" src="child_cat.webp"/> <img class="absolute h-1/2 w-2/3 bottom-0 left-0 rounded-2xl object-cover shadow-md scale-[98%]" alt="Woman playing with cat and dog" src="dog_cat_girl.webp"/> <img class="absolute h-1/2 w-1/3 bottom-0 right-0 rounded-2xl object-cover shadow-md scale-[98%]" alt="Woman holding dog on a hike" src="woman_dog.webp"/> <img class="absolute h-1/2 w-2/3 top-0 right-0 rounded-2xl object-cover shadow-md scale-[98%]" alt="Male sitting with dog" src="dog_guy.webp"/></div></div> <div class="flex flex-col gap-6 w-full p-2 md:px-4 items-center">`);
  EventsSection($$payload);
  $$payload.out.push(`<!----> `);
  PetAdoptionSection($$payload);
  $$payload.out.push(`<!----> `);
  AboutSection($$payload);
  $$payload.out.push(`<!----></div></div>`);
}
export {
  _page as default
};
