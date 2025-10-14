import { client } from "../client";
import type { Event } from "../sanity.types";

export async function getAllEvents(): Promise<Event[]> {
  const events = await client.fetch('*[_type == "event"] | order(start asc');
  return events as Event[];
}

export async function getUpcomingEvents(limit: number = 3): Promise<Event[]> {
  const todaysDate = new Date().toISOString();
  const events = await client.fetch('*[_type == "event" && start >= $date] | order(start asc)[0...$limit]', { limit, date: todaysDate });
  return events as Event[];
}

export async function getPastEvents(): Promise<Event[]> {
  const todaysDate = new Date().toISOString();
  const events = await client.fetch('*[_type == "event" && start < $date] | order(start desc)', { date: todaysDate });
  return events as Event[];
}

export async function getEventBySlug(slug: string): Promise<Event | null> {
  const event = await client.fetch('*[_type == "event" && slug.current == $slug][0]', { slug });
  if (!event) return null;
  return event as Event;
}
