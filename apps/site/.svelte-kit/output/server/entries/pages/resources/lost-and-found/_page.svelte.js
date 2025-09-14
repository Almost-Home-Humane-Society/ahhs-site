import { o as head } from "../../../../chunks/index2.js";
import { P as PageTitle } from "../../../../chunks/PageTitle.js";
import { P as PageWrapper } from "../../../../chunks/PageWrapper.js";
function _page($$payload) {
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Lost &amp; Found Pets | AHHS</title>`;
    $$payload2.out.push(`<meta name="description" content="Report a lost or found pet."/>`);
  });
  $$payload.out.push(`<div class="flex flex-col basis-full gap-6">`);
  PageTitle($$payload, { title: "Lost or Found Pets", tag: "How to get a pet home." });
  $$payload.out.push(`<!----> `);
  PageWrapper($$payload, {
    children: ($$payload2) => {
      $$payload2.out.push(`<p>If you have found a pet, Almost Home strongly recommends sending a photo of the pet to Lost
			and Found Pets of Greater Lafayette on Facebook. It is a City of Lafayette ordinance that all
			found pets be reported within 48 hours. A found pet does not legally belong to the finder
			until after it has been in the finder's possession for more than 30 days per the City of
			Lafayette ordinance. The finder takes ownership of the animal if in their possession for more
			than 3 days outside of city boundaries, but within Tippecanoe County.</p> <p>If you have found a stray pet in the city limits of Lafayette or West Lafayette, you may bring
			it to the Humane Society for Greater Lafayette, or call Animal Control to pick up the pet
			(Lafayette: 765-807-1200, West Lafayette: 765-775-5200, Tippecanoe County: 765-423-9321).</p> <p>If you have lost or found a pet outside of Tippecanoe County please contact your local
			sheriff's department.</p>`);
    }
  });
  $$payload.out.push(`<!----></div>`);
}
export {
  _page as default
};
