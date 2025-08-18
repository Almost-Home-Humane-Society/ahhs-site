<script>
	import PageTitle from '$lib/components/PageTitle.svelte';
	import TocWrapper from '$lib/components/TocWrapper.svelte';
	import Behavior from './sections/Behavior.svelte';
	import Introduction from './sections/Introduction.svelte';
	import Kitten from './sections/Kitten.svelte';
	import LitterBoxIntro from './sections/LitterBoxIntro.svelte';
	import LitterBoxProblems from './sections/LitterBoxProblems.svelte';
	import Reinforcement from './sections/Reinforcement.svelte';
	import Scratching from './sections/Scratching.svelte';
	import Talk from './sections/Talk.svelte';
	import Toys from './sections/Toys.svelte';
</script>

<div class="flex flex-col basis-full gap-6">
	<PageTitle title="Cat Handbook" tag="Your guide to cat care and adoption." />
	<TocWrapper>
		<p>
			Adopting a cat is a rewarding experience, but it comes with responsibilities. This handbook
			provides essential information on cat care, behavior, and health to help you provide the best
			home for your new feline friend.
		</p>
		<Introduction />
		<Reinforcement />
		<Behavior />
		<LitterBoxIntro />
		<LitterBoxProblems />
		<Toys />
		<Kitten />
		<Talk />
		<Scratching />
	</TocWrapper>
</div>
