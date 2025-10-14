import { prerender } from "$app/server";
import { client } from "$lib/sanity/client";
import type { Event } from "$lib/sanity/sanity.types";

export const getUpcomingEvents = prerender(async () => {
  const todaysDate = new Date().toISOString();
  const events = await client.fetch('*[_type == "event" && start >= $date] | order(start asc)[0..2]', { date: todaysDate });
  return events as Event[];  
});