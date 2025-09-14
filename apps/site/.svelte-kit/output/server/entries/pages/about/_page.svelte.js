import { o as head, j as ensure_array_like, e as pop, p as push } from "../../../chunks/index2.js";
import { P as PageTitle } from "../../../chunks/PageTitle.js";
import { P as PageWrapper } from "../../../chunks/PageWrapper.js";
import { e as escape_html } from "../../../chunks/escaping.js";
function _page($$payload, $$props) {
  push();
  let priorYear = (() => {
    const returnValue = /* @__PURE__ */ new Date();
    returnValue.setFullYear(returnValue.getFullYear() - 1);
    return returnValue.getFullYear();
  })();
  const stats = [
    { name: "Stray", dog: 677, cat: 1321, other: 59 },
    { name: "Transferred In", dog: 8, cat: 3, other: 10 },
    { name: "Return", dog: 89, cat: 70, other: 8 },
    { name: "O/G Surrender", dog: 6, cat: 0, other: 0 },
    { name: "Clinic In", dog: 1, cat: 1, other: 0 },
    { name: "Adoptions", dog: 398, cat: 896, other: 65 },
    { name: "RTO", dog: 289, cat: 65, other: 1 },
    { name: "Euthanasia", dog: 44, cat: 79, other: 2 },
    { name: "Died", dog: 16, cat: 269, other: 2 },
    { name: "Transferred Out", dog: 9, cat: 2, other: 11 },
    { name: "Clinic Out", dog: 1, cat: 3, other: 0 }
  ];
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>About Us | AHHS</title>`;
    $$payload2.out.push(`<meta name="description" content="Your donations allow us to do the work we do every day and help us fulfill our dreams for what we are able to do for pets in our community."/>`);
  });
  $$payload.out.push(`<div class="flex flex-col basis-full gap-6">`);
  PageTitle($$payload, { title: "About Us", tag: "How we serve our community" });
  $$payload.out.push(`<!----> `);
  PageWrapper($$payload, {
    children: ($$payload2) => {
      const each_array = ensure_array_like(stats);
      $$payload2.out.push(`<p>Almost Home Humane Society was formed as the Tippecanoe County Humane Association in 1939 and
			since that time has been dedicated to the care of pets in our community. Today, Almost Home
			serves more than 3,000 pets each year through its programs.</p> <p>AHHS is a private, non-profit organization and is not directly affiliated with any national
			organizations or coalitions. Almost Home serves the Greater Lafayette area and the animals
			within. AHHS accepts owner surrendered pets and pets transferred from other animal welfare
			organizations as shelter capacity allows and only by scheduled appointment.</p> <section class="flex flex-col basis-full gap-3"><h3 class="text-2xl font-medium">Lifesaving Data</h3> <p>In ${escape_html(priorYear)}, Almost Home saved 94.9% of the pets that needed its help. This is calculated
				according to the Asilomar Standard, which reflects options for animals including adoption,
				transfer and return to owner. The data provides a breakdown of the health and adoption
				status of every animal in our care.</p> <p>Almost Home’s lifesaving rate (95%) is consistently several times above the national average
				of 80%, and above the 90% standard to qualify for the label of “no-kill” shelter. This
				number represents the percentage of pets served by AHHS with a positive outcome such as
				adoption, transfer, or return to owner. <span class="italic">Reasons an animal might leave the shelter other than adoption include being transferred
					to another (sometimes breed-specific) rescue or a lost pet being returned to its owner.</span></p> <p>AHHS is especially proud of this number because it has no control over the health or
				temperament of the pets that it receives as strays. In 2017, Almost Home spent more than
				$40,000 to treat those pets that arrived sick or injured and is determined to give every pet
				a second chance at a forever home.</p> <p>Almost Home never euthanizes a pet due to space or time considerations. However, AHHS must
				euthanize some pets each year that are either too ill/injured to be saved or that would pose
				a risk to public safety.</p> <div class="grid grid-cols-1 lg:grid-cols-2 gap-6"><table class="table"><thead><tr><th align="center">Category</th><th align="center">Dog</th><th align="center">Cat</th><th align="center">Other</th></tr></thead><tbody><!--[-->`);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let row = each_array[$$index];
        $$payload2.out.push(`<tr><td align="center">${escape_html(row.name)}</td><td align="center">${escape_html(row.dog)}</td><td align="center">${escape_html(row.cat)}</td><td align="center">${escape_html(row.other)}</td></tr>`);
      }
      $$payload2.out.push(`<!--]--></tbody></table> <div class="flex flex-col gap-3 justify-center"><p class="text-sm">*Stray pets are brought to Almost Home and held for 5 full days awaiting reunion with
						their owner</p> <p class="text-sm">*Pets transferred in arrive at Almost Home from other shelters or rescues.</p> <p class="text-sm">*Returns are animals brought back to Almost Home after adoption</p> <p class="text-sm">*O/G Surrender refers to pets given to Almost Home by their current owner or guardian</p> <p class="text-sm">*TNR = Trapped, Neutered, and Released and typically refers to cats only</p> <p class="text-sm">*SNAP = Spay/Neuter Assistance Program and is available to residents of Tippecanoe
						County on government assistance</p></div></div></section> <section class="flex flex-col basis-full gap-3"><h3 class="text-2xl font-medium">Frequently Asked Questions</h3> <p><a class="link" href="/faq">Click here</a> to view all our frequently asked questions.</p></section>`);
    }
  });
  $$payload.out.push(`<!----></div>`);
  pop();
}
export {
  _page as default
};
