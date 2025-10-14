import "../../../../chunks/async.js";
import "clsx";
import { c as createQuery } from "../../../../chunks/createQuery.js";
const getListing = async () => {
  try {
    const returnItems = [];
    return Promise.resolve(returnItems);
  } catch (error) {
    return Promise.reject(error);
  }
};
const getDogListing = async () => {
  try {
    const allItems = await getListing();
    return allItems.filter((item) => item.species === "dog");
  } catch (error) {
    return Promise.reject(error);
  }
};
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    createQuery({
      queryKey: ["available-dogs"],
      queryFn: async () => getDogListing()
    });
  });
}
export {
  _page as default
};
