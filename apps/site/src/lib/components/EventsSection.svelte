<script lang="ts">
	import EventPreview from './EventPreview.svelte';
	import { getUpcomingEvents } from '../../routes/data.remote';

	const query = getUpcomingEvents();
</script>

<section
	class="py-4 px-2 lg:px-8 flex flex-col gap-3 lg:gap-6 w-full lg:w-10/12 border-t border-t-ahhs-red-200"
>
	<h2 class="text-3xl font-medium">Events</h2>
	<p>Blurb about AHHS in the community, etc.</p>
	<a class="btn-primary" href="/events">
		View All Events
		<span class="iconify lucide--chevron-right size-5"></span>
	</a>
	<h3 class="text-xl font-medium">Upcoming</h3>
	{#if query.error}
		<p class="text-center text-red-500">Error loading events</p>
	{:else}
		<div class="grid grid-cols-1 md:px-12 lg:px-4 lg:grid-cols-2 2xl:grid-cols-3 gap-3 lg:gap-6">
			{#each query.current as event}
				<EventPreview {event} forHomePage />
			{/each}
		</div>
	{/if}
</section>
