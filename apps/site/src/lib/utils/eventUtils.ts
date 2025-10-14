import type { Event } from "$lib/sanity/sanity.types";
import { datesMatch, formattedTimeString } from "./dateUtils";

export const getDateString = (event: Event | undefined | null): string | undefined => {
  if (!event) return undefined;
  if (!event.start || !event.end) return undefined;
  const sameDate = datesMatch(new Date(event.start), new Date(event.end));

  let returnValue: string = new Date(event.start).toLocaleDateString();

  if (!sameDate) returnValue += ` - ${new Date(event.end).toLocaleDateString()}`;

  return returnValue;
}

export const getTimeString = (event: Event | null | undefined): string | undefined => {
    if (!event) return undefined;
    if (event.allDay) return 'All Day';
		if (!event.start || !event.end) return undefined;
		if (event.allDay) return undefined;

		const startTime = formattedTimeString(new Date(event.start));
		const endTime = formattedTimeString(new Date(event.end));

		if (startTime === endTime) return startTime;

		return `${startTime} - ${endTime}`;  
}