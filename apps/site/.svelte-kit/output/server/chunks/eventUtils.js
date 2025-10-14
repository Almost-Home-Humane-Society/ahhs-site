import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
const PUBLIC_SANITY_PROJECT_ID = "zjqoqfsk";
const config = {
  projectId: PUBLIC_SANITY_PROJECT_ID,
  dataset: "prod",
  useCdn: true,
  apiVersion: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)
};
const client = createClient(config);
const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}
const datesMatch = (date1, date2) => {
  return date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth() && date1.getDate() === date2.getDate();
};
const formattedTimeString = (date) => {
  return new Date(date).toLocaleTimeString([], { hour: "numeric", minute: "2-digit", hour12: true }).replace(" AM", "am").replace(" PM", "pm");
};
const getDateString = (event) => {
  if (!event) return void 0;
  if (!event.start || !event.end) return void 0;
  const sameDate = datesMatch(new Date(event.start), new Date(event.end));
  let returnValue = new Date(event.start).toLocaleDateString();
  if (!sameDate) returnValue += ` - ${new Date(event.end).toLocaleDateString()}`;
  return returnValue;
};
const getTimeString = (event) => {
  if (!event) return void 0;
  if (event.allDay) return "All Day";
  if (!event.start || !event.end) return void 0;
  if (event.allDay) return void 0;
  const startTime = formattedTimeString(new Date(event.start));
  const endTime = formattedTimeString(new Date(event.end));
  if (startTime === endTime) return startTime;
  return `${startTime} - ${endTime}`;
};
export {
  getTimeString as a,
  client as c,
  getDateString as g,
  urlFor as u
};
