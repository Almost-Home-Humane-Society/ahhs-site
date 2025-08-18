<script>
	import EventPreview from './EventPreview.svelte';
</script>

<section
	class="py-4 px-2 lg:px-8 flex flex-col gap-3 lg:gap-6 w-full lg:w-10/12 border-t border-t-ahhs-red-200"
>
	<h2 class="text-3xl font-medium">Events</h2>
	<p>Blurb about AHHS in the community, etc.</p>
	<button class="btn-primary">
		View All Events
		<span class="iconify lucide--chevron-right size-5"></span>
	</button>
	<h3 class="text-xl font-medium">Upcoming</h3>
	<div class="grid grid-cols-1 md:px-12 lg:px-4 lg:grid-cols-2 2xl:grid-cols-3 gap-3 lg:gap-6">
		<EventPreview
			date={new Date(2025, 6, 24)}
			location="123 Example Rd, Lafayette IN"
			route="/events/1"
			time="9:00am - 2:00pm"
			title="Example Event"
		/>
		<EventPreview
			date={new Date(2025, 7, 5)}
			location="123 Example Rd, Lafayette IN"
			route="/events/2"
			time="9:00am - 2:00pm"
			title="Example Event"
		/>
		<EventPreview
			date={new Date(2025, 9, 17)}
			location="123 Example Rd, Lafayette IN"
			route="/events/3"
			time="9:00am - 2:00pm"
			title="Example Event"
		/>
	</div>
</section>
