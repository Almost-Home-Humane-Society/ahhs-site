<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
		title: string;
	};

	let { children, title } = $props();
</script>

<section class="flex flex-col w-full gap-3">
	<div class="flex flex-row gap-3">
		<h3 class="text-2xl font-bold relative scroll-m-24">
			<span class="lg:absolute lg:-top-24"></span>
			{title}
		</h3>
	</div>
	<div class="flex flex-col w-full gap-4 md:pl-2 xl:pl-4">
		{@render children()}
	</div>
</section>
