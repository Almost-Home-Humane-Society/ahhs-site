<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
		title: string;
	};

	let { children, title } = $props();
</script>

<section class="flex flex-col w-full gap-1 pl-2 md:pl-8 xl:pl-12">
	<h4 class="text-lg font-bold text-ahhs-red-400 dark:text-ahhs-red">{title}</h4>
	<div class="flex flex-col w-full gap-4 md:pl-4 xl:pl-6">
		{@render children()}
	</div>
</section>
