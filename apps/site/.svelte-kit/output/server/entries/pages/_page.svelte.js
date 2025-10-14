import "../../chunks/async.js";
import { j as ensure_array_like, k as head } from "../../chunks/index.js";
import "clsx";
import { E as EventPreview } from "../../chunks/EventPreview.js";
import { g as getUpcomingEvents } from "../../chunks/remote-q5s0im.js";
function AboutSection($$renderer) {
  $$renderer.push(`<section class="py-4 px-2 lg:px-8 flex flex-col gap-3 lg:gap-6 w-full lg:w-10/12 border-t border-t-ahhs-red-200"><h2 class="text-3xl font-medium">About Us</h2> <p>Almost Home Humane Society was formed as the Tippecanoe County Humane Association in 1939 and
		since that time has been dedicated to the care of pets in our community. Today, Almost Home
		serves more than 3,000 pets each year through its programs.</p> <p>AHHS is a private, non-profit organization and is not directly affiliated with any national
		organizations or coalitions. Almost Home serves the Greater Lafayette area and the animals
		within. AHHS accepts owner surrendered pets and pets transferred from other animal welfare
		organizations as shelter capacity allows and only by scheduled appointment.</p> <div class="grid grid-cols-1 px-0 md:px-12 xl:px-0 xl:grid-cols-3 gap-6"><div class="card w-full gap-6"><img src="ahhs_mission_2.webp" alt="Dog" class="w-full h-48 lg:h-56 object-cover rounded-2xl rounded-b-none"/> <div class="flex flex-col w-full py-4 px-5 gap-3"><h3 class="text-2xl font-medium">Mission</h3> <p class="px-4">Almost Home Humane Society (AHHS) inspires a more humane community by educating, providing
					resources and collaborating to improve the lives of animals and their families.</p></div></div> <div class="card w-full gap-6"><img src="ahhs_vision_1.webp" alt="Dog" class="w-full h-48 lg:h-56 object-cover rounded-2xl rounded-b-none"/> <div class="flex flex-col w-full py-4 px-5 gap-3"><h3 class="text-2xl font-medium">Vision</h3> <p class="px-4">Almost Home Humane Society is Tippecanoe County’s leading animal care and resource
					organization.</p></div></div> <div class="card w-full gap-6"><img src="ahhs_values_1.webp" alt="Dog" class="w-full h-48 lg:h-56 object-cover rounded-2xl rounded-b-none"/> <div class="flex flex-col w-full py-4 px-5 gap-3"><h3 class="text-2xl font-medium">Values</h3> <div class="grid grid-cols-1 lg:grid-cols-2 px-4"><div class="flex flex-row items-center gap-3 text-start justify-start"><span class="icon-[mdi--paw] text-ahhs-red-400 dark:text-ahhs-red-300"></span> Empathy</div> <div class="flex flex-row items-center gap-3 text-start justify-start"><span class="icon-[mdi--paw] text-ahhs-red-400 dark:text-ahhs-red-300"></span> Collaboration</div> <div class="flex flex-row items-center gap-3 text-start justify-start"><span class="icon-[mdi--paw] text-ahhs-red-400 dark:text-ahhs-red-300"></span> Compassion</div> <div class="flex flex-row items-center gap-3 text-start justify-start"><span class="icon-[mdi--paw] text-ahhs-red-400 dark:text-ahhs-red-300"></span> Dedication</div> <div class="flex flex-row items-center gap-3 text-start justify-start"><span class="icon-[mdi--paw] text-ahhs-red-400 dark:text-ahhs-red-300"></span> Patience</div> <div class="flex flex-row items-center gap-3 text-start justify-start"><span class="icon-[mdi--paw] text-ahhs-red-400 dark:text-ahhs-red-300"></span> Leadership</div> <li class="flex flex-row items-center gap-3 text-start justify-start"><span class="icon-[mdi--paw] text-ahhs-red-400 dark:text-ahhs-red-300"></span> Passion</li> <div class="flex flex-row items-center gap-3 text-start justify-start"><span class="icon-[mdi--paw] text-ahhs-red-400 dark:text-ahhs-red-300"></span> Respect</div></div></div></div></div></section>`);
}
function EventsSection($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const query = getUpcomingEvents();
    $$renderer2.push(`<section class="py-4 px-2 lg:px-8 flex flex-col gap-3 lg:gap-6 w-full lg:w-10/12 border-t border-t-ahhs-red-200"><h2 class="text-3xl font-medium">Events</h2> <p>Blurb about AHHS in the community, etc.</p> <a class="btn-primary" href="/events">View All Events <span class="iconify lucide--chevron-right size-5"></span></a> <h3 class="text-xl font-medium">Upcoming</h3> `);
    if (query.error) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<p class="text-center text-red-500">Error loading events</p>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div class="grid grid-cols-1 md:px-12 lg:px-4 lg:grid-cols-2 2xl:grid-cols-3 gap-3 lg:gap-6"><!--[-->`);
      const each_array = ensure_array_like(query.current);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let event = each_array[$$index];
        EventPreview($$renderer2, { event, forHomePage: true });
      }
      $$renderer2.push(`<!--]--></div>`);
    }
    $$renderer2.push(`<!--]--></section>`);
  });
}
function PetAdoptionSection($$renderer) {
  $$renderer.push(`<section class="py-4 px-2 lg:px-8 flex flex-col gap-3 lg:gap-6 w-full lg:w-10/12 border-t border-t-ahhs-red-200"><h2 class="text-3xl font-medium">Pet Adoptions</h2> <p>Blurb about what AHHS pet adoption services/commitment is etc. Selling point here for adoptions.</p> <div class="flex flex-col lg:flex-row gap-6 items-center"><a class="btn-primary" href="/handbooks/cat">Cat Handbook <span class="iconify lucide--chevron-right size-5"></span></a> <a class="btn-primary" href="/handbooks/dog">Dog Handbook <span class="iconify lucide--chevron-right size-5"></span></a></div> <div class="grid grid-cols-1 lg:grid-cols-3 gap-3 md:px-12 lg:px-4 lg:gap-6"><div class="block"><div class="card flex flex-row flex-auto relative"><img src="ahhs_dog_1.webp" alt="Dog" class="w-full h-48 lg:h-56 object-cover rounded-2xl"/> <button class="btn-primary-sm absolute bottom-2 right-2 shadow-md shadow-neutral-900/60">View Available Dogs <span class="iconify lucide--chevron-right size-5"></span></button></div></div> <div class="block"><div class="card flex flex-row flex-auto relative"><img src="ahhs_cat_1.webp" alt="Cat" class="w-full h-48 lg:h-56 object-cover rounded-2xl"/> <button class="btn-primary-sm absolute bottom-2 right-2 shadow-md shadow-neutral-900/60">View Available Cats <span class="iconify lucide--chevron-right size-5"></span></button></div></div> <div class="block"><div class="card flex flex-row flex-auto relative"><img src="ahhs_rabbit_1.webp" alt="Rabbit" class="w-full h-48 lg:h-56 object-cover rounded-2xl"/> <button class="btn-primary-sm w-fit absolute bottom-2 right-2 shadow-md shadow-neutral-900/60">View Available Pocket Pets <span class="iconify lucide--chevron-right size-5"></span></button></div></div></div></section>`);
}
function _page($$renderer) {
  head($$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>Home | AHHS</title>`);
    });
    $$renderer2.push(`<meta name="description" content="Welcome to Almost Home Humane Society: a non-profit animal rescue shelter servicing the greater Lafayette, Indiana area."/>`);
  });
  $$renderer.push(`<div class="flex flex-col gap-6 w-full items-center"><div class="grid grid-cols-1 md:grid-cols-2 gap-3 p-4 w-full lg:w-10/12"><div class="flex flex-col gap-3 items-center justify-around py-6"><h1 class="flex lg:hidden text-3xl font-extrabold text-ahhs-blue text-center text-balance dark:text-white">Almost Home Humane Society</h1> <span class="text-2xl lg:text-4xl xl:text-5xl font-bold text-ahhs-red-500 dark:text-ahhs-red-200 text-center text-pretty">Adopt a friend. Save a life.</span> <div class="flex md:hidden flex-row justify-center w-full h-[50vh] relative p-4"><img class="absolute h-1/2 w-1/3 top-0 left-0 rounded-2xl object-cover shadow-md scale-[98%]" alt="Young girl with cat" src="child_cat.webp"/> <img class="absolute h-1/2 w-2/3 bottom-0 left-0 rounded-2xl object-cover shadow-md scale-[98%]" alt="Woman playing with cat and dog" src="dog_cat_girl.webp"/> <img class="absolute h-1/2 w-1/3 bottom-0 right-0 rounded-2xl object-cover shadow-md scale-[98%]" alt="Woman holding dog on a hike" src="woman_dog.webp"/> <img class="absolute h-1/2 w-2/3 top-0 right-0 rounded-2xl object-cover shadow-md scale-[98%]" alt="Male sitting with dog" src="dog_guy.webp"/></div> <p class="text-base xl:text-xl 2xl:text-2xl lg:px-12 text-center">Almost Home Humane Society is a non-profit animal rescue shelter serving more than 3,000
				annually in the greater Lafayette, Indiana area. AHHS accepts owner surrendered pets and
				pets transferred from other animal welfare organizations as shelter capacity allows and only
				by scheduled appointment.</p> <div class="flex flex-row gap-3 lg:gap-6 justify-center"><a href="/dogs/available" class="btn-primary">I Want a Dog!</a> <a href="/cats/available" class="btn-primary">I Want a Cat!</a></div></div> <div class="hidden md:flex flex-row justify-center w-full h-[50vh] relative p-4"><img class="absolute h-1/2 w-1/3 top-0 left-0 rounded-2xl object-cover shadow-md scale-[98%]" alt="Young girl with cat" src="child_cat.webp"/> <img class="absolute h-1/2 w-2/3 bottom-0 left-0 rounded-2xl object-cover shadow-md scale-[98%]" alt="Woman playing with cat and dog" src="dog_cat_girl.webp"/> <img class="absolute h-1/2 w-1/3 bottom-0 right-0 rounded-2xl object-cover shadow-md scale-[98%]" alt="Woman holding dog on a hike" src="woman_dog.webp"/> <img class="absolute h-1/2 w-2/3 top-0 right-0 rounded-2xl object-cover shadow-md scale-[98%]" alt="Male sitting with dog" src="dog_guy.webp"/></div></div> <div class="flex flex-col gap-6 w-full p-2 md:px-4 items-center">`);
  EventsSection($$renderer);
  $$renderer.push(`<!----> `);
  PetAdoptionSection($$renderer);
  $$renderer.push(`<!----> `);
  AboutSection($$renderer);
  $$renderer.push(`<!----></div></div>`);
}
export {
  _page as default
};
