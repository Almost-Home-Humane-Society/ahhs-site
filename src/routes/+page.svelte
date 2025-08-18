<script>
	import AboutSection from '$lib/components/AboutSection.svelte';
	import EventPreview from '$lib/components/EventPreview.svelte';
	import EventsSection from '$lib/components/EventsSection.svelte';
	import PetAdoptionSection from '$lib/components/PetAdoptionSection.svelte';
</script>

<svelte:head>
	<title>Home | AHHS</title>
	<meta
		name="description"
		content="Welcome to Almost Home Humane Society: a non-profit animal rescue shelter servicing the greater Lafayette, Indiana area."
	/>
</svelte:head>

<div class="flex flex-col gap-6 w-full items-center">
	<div class="grid grid-cols-1 md:grid-cols-2 gap-3 p-4 w-full lg:w-10/12">
		<div class="flex flex-col gap-3 items-center justify-around py-6">
			<h1 class="flex lg:hidden text-3xl font-extrabold text-ahhs-blue text-center text-balance dark:text-white">
				Almost Home Humane Society
			</h1>
			<span
				class="text-2xl lg:text-4xl xl:text-5xl font-bold text-ahhs-red-500 dark:text-ahhs-red-200 text-center text-pretty"
				>Adopt a friend. Save a life.</span
			>
			<div class="flex md:hidden flex-row justify-center w-full h-[50vh] relative p-4">
				<img
					class="absolute h-1/2 w-1/3 top-0 left-0 rounded-2xl object-cover shadow-md scale-[98%]"
					alt="Young girl with cat"
					src="child_cat.webp"
				/>
				<img
					class="absolute h-1/2 w-2/3 bottom-0 left-0 rounded-2xl object-cover shadow-md scale-[98%]"
					alt="Woman playing with cat and dog"
					src="dog_cat_girl.webp"
				/>
				<img
					class="absolute h-1/2 w-1/3 bottom-0 right-0 rounded-2xl object-cover shadow-md scale-[98%]"
					alt="Woman holding dog on a hike"
					src="woman_dog.webp"
				/>
				<img
					class="absolute h-1/2 w-2/3 top-0 right-0 rounded-2xl object-cover shadow-md scale-[98%]"
					alt="Male sitting with dog"
					src="dog_guy.webp"
				/>
			</div>
			<p class="text-base xl:text-xl 2xl:text-2xl lg:px-12 text-center">
				Almost Home Humane Society is a non-profit animal rescue shelter serving more than 3,000
				annually in the greater Lafayette, Indiana area. AHHS accepts owner surrendered pets and
				pets transferred from other animal welfare organizations as shelter capacity allows and only
				by scheduled appointment.
			</p>
			<div class="flex flex-row gap-3 lg:gap-6 justify-center">
				<a href="/dogs/available" class="btn-primary"> I Want a Dog! </a>
				<a href="/cats/available" class="btn-primary"> I Want a Cat! </a>
			</div>
		</div>
		<div class="hidden md:flex flex-row justify-center w-full h-[50vh] relative p-4">
			<img
				class="absolute h-1/2 w-1/3 top-0 left-0 rounded-2xl object-cover shadow-md scale-[98%]"
				alt="Young girl with cat"
				src="child_cat.webp"
			/>
			<img
				class="absolute h-1/2 w-2/3 bottom-0 left-0 rounded-2xl object-cover shadow-md scale-[98%]"
				alt="Woman playing with cat and dog"
				src="dog_cat_girl.webp"
			/>
			<img
				class="absolute h-1/2 w-1/3 bottom-0 right-0 rounded-2xl object-cover shadow-md scale-[98%]"
				alt="Woman holding dog on a hike"
				src="woman_dog.webp"
			/>
			<img
				class="absolute h-1/2 w-2/3 top-0 right-0 rounded-2xl object-cover shadow-md scale-[98%]"
				alt="Male sitting with dog"
				src="dog_guy.webp"
			/>
		</div>
	</div>
	<div class="flex flex-col gap-6 w-full p-2 md:px-4 items-center">
		<EventsSection />
		<PetAdoptionSection />
		<AboutSection />
	</div>
</div>
