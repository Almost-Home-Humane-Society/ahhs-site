import { prerender } from "$app/server";
import { client } from "$lib/sanity/client";
import type { Event } from "$lib/sanity/sanity.types";

export const getEvents = prerender(async () => {
  const todaysDate = new Date().toISOString();
  const events = await client.fetch('*[_type == "event" && start >= $date] | order(start asc)', { date: todaysDate });
  return events as Event[];  
});
