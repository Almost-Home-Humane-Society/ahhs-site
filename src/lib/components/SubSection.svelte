<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
		title: string;
	};

	let { children, title } = $props();
</script>

<section class="flex flex-col w-full gap-1 pl-4 md:pl-8">
	<h4 class="text-lg font-bold">{title}</h4>
	<div class="flex flex-col w-full gap-4">
		{@render children()}
	</div>
</section>
