import "../../../../chunks/async.js";
import "clsx";
import { P as PageTitle } from "../../../../chunks/PageTitle.js";
import { P as PageWrapper } from "../../../../chunks/PageWrapper.js";
function _page($$renderer) {
  $$renderer.push(`<div class="flex flex-col basis-full gap-6">`);
  PageTitle($$renderer, {
    title: "Pet Food Assistance",
    tag: "Helping our community's pets stay fed."
  });
  $$renderer.push(`<!----> `);
  PageWrapper($$renderer, {
    children: ($$renderer2) => {
      $$renderer2.push(`<p>Almost Home Humane Society operates a pet food pantry to assist low-income families on the 1st
			and 3rd Wednesday of the month. Individuals in need of pet food must fill out an application
			and, if approved, can receive pet food once a month. AHHS cannot guarantee that the same brand
			of food will be available each month as the food distributed is dependent on what has been
			donated to AHHS. Any food donated to AHHS that is not the brand that is fed to our animals is
			contributed to the pet food pantry.</p> <section class="flex flex-col gap-2"><h3 class="text-2xl font-medium">Food Pantry Rules</h3> <ol class="list-decimal pl-8"><li>Must be a resident of Tippecanoe County.</li> <li>Must have a valid ID.</li> <li>Must have two forms of proof of current residence (If ID does not have your CURRENT adress
					it cannot be used as proof of residence).</li> <li>Must reapply after every four uses of the pantry.</li></ol> <span class="text-sm italic text-ahhs-red-500 dark:text-ahhs-red-200 pt-4">* Please note that AHHS does not guarantee eligibility or availability of assistance and
				reserves the right to deny food to anyone under any circumstances.</span> <a href="/food_pantry.pdf" class="link" target="_blank">Pet Food Assistance Form</a></section>`);
    }
  });
  $$renderer.push(`<!----></div>`);
}
export {
  _page as default
};
