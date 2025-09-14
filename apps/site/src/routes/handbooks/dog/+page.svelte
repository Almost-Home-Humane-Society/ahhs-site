<script>
	import PageTitle from '$lib/components/PageTitle.svelte';
	import TocWrapper from '$lib/components/TocWrapper.svelte';
	import BringingHome from './sections/BringingHome.svelte';
	import CatIntroduction from './sections/CatIntroduction.svelte';
	import Children from './sections/Children.svelte';
	import ClickerTraining from './sections/ClickerTraining.svelte';
	import CrateTraining from './sections/CrateTraining.svelte';
	import Introduction from './sections/Introduction.svelte';
	import PottyTraining from './sections/PottyTraining.svelte';
	import Puppies from './sections/Puppies.svelte';
	import SeparationAnxiety from './sections/SeparationAnxiety.svelte';
</script>

<div class="flex flex-col basis-full gap-6">
	<PageTitle title="Dog Handbook" tag="Your guide to dog care and adoption." />
	<TocWrapper>
		<p>
			Adopting a dog is a fulfilling journey, but it requires commitment and understanding. This
			handbook offers crucial insights into dog care, behavior, and health to ensure you provide the
			best environment for your new canine companion.
		</p>

		<BringingHome />
		<Introduction />
		<CatIntroduction />
		<PottyTraining />
		<CrateTraining />
		<ClickerTraining />
		<Puppies />
		<SeparationAnxiety />
		<Children />
	</TocWrapper>
</div>
