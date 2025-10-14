<script lang="ts">
	import PageTitle from '$lib/components/PageTitle.svelte';
	import PageWrapper from '$lib/components/PageWrapper.svelte';
	import EventListItem from './components/EventListItem.svelte';
	import { getEvents } from './data.remote';

	const query = getEvents();
</script>

<svelte:head>
	<title>All Events | AHHS</title>
	<meta
		name="description"
		content="Stay updated with the latest events and happenings at AHHS. Explore our comprehensive events calendar to never miss out on important dates and activities."
	/>
</svelte:head>

<div class="flex flex-col basis-full gap-6">
	<PageTitle title="Events" tag="Stay updated with the latest events and happenings at AHHS." />
	<PageWrapper>
		{#if query.error}
			<p class="text-center text-red-500">Error loading events</p>
		{:else}
			<div class="flex flex-col w-full gap-6 items-center">
				{#each query.current as event}
					<EventListItem {event} />
				{/each}
			</div>
		{/if}
	</PageWrapper>
</div>
