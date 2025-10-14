<script lang="ts">
	import { urlFor } from '$lib/sanity/client';
	import type { Event } from '$lib/sanity/sanity.types';
	import { datesMatch, formattedTimeString } from '$lib/utils/dateUtils';
	import { getDateString, getTimeString } from '$lib/utils/eventUtils';
	import { PortableText } from '@portabletext/svelte';

	type Props = {
		event: Event;
	};

	let { event }: Props = $props();
	const dateString = $derived.by<string | undefined>(() => getDateString(event));

	const timeString = $derived.by<string | undefined>(() => getTimeString(event));
</script>

<div class="flex flex-col lg:w-2/3 xl:w-1/2 lg:max-w-2/3 xl:max-w-1/2">
	<section class="card w-full gap-6">
		{#if event.mainImage}
			<img
				src={urlFor(event.mainImage).url()}
				alt="Event"
				class="w-full object-cover rounded-2xl rounded-b-none max-h-[260px]"
			/>
		{/if}
		<div class="flex flex-col w-full py-4 px-5 gap-3">
			<h3 class="text-2xl font-bold">{event.title}</h3>
			{#if dateString}
				<span class="flex flex-row justify-start gap-2 text-alt">
					<span class="icon-[lucide--calendar] size-4 text-ahhs-red"></span>
					<span class="text-sm leading-4">
						{dateString}
					</span>
				</span>
			{/if}
			{#if timeString}
				<span class="flex flex-row justify-start gap-2 text-alt">
					<span class="icon-[lucide--clock] size-4 text-ahhs-red"></span>
					<span class="text-sm leading-4">
						{timeString}
					</span>
				</span>
			{/if}
			<span class="flex flex-row justify-start gap-2 text-alt">
				<span class="icon-[lucide--map-pin] size-4 text-ahhs-red"></span>
				<div class="flex flex-col gap-0 justify-start">
					<span class="text-sm leading-4">
						{event.location?.name}
					</span>
					<span class="text-sm leading-4">
						{event.location?.street}
					</span>
					<span class="text-sm leading-4">
						{event.location?.city}, {event.location?.state}
						{event.location?.zip}
					</span>
				</div>
			</span>
			{#if event.body}
				<div class="prose text-alt pt-4 pb-2 px-4">
					<PortableText value={event.body} />
				</div>
			{/if}
		</div>
	</section>
</div>
