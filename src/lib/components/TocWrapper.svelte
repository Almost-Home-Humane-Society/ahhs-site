<script lang="ts">
	import { Toc } from '@svelte-put/toc';
	import * as Select from './ui/select/index.js';
	let { children } = $props();
	let ref: HTMLDivElement;
	let tocHeight = $state<string>('100%');
	let tocTop = $state<string>('0px');

	const toc = new Toc({
		selector: ':where(h3)',
		observe: {
			enabled: true,
			link: {
				activeAttribute: 'data-current'
			},
			threshold: (element: HTMLElement) =>
				Math.min((0.85 * window.innerHeight) / element.offsetHeight, 1)
		}
	});

	$effect(() => {
		if (ref instanceof HTMLDivElement && window) {
			const rect = ref.getBoundingClientRect();
			tocHeight = `${window.innerHeight - rect.top}px`;
			tocTop = `${rect.top}px`;
		}
	});
</script>

<div bind:this={ref} class="flex flex-col lg:flex-row basis-full p-4">
	<div
		class="flex flex-col basis-full p-4 md:p-8 lg:px-12 2xl:px-24 pb-12 gap-6 relative overflow-y-auto"
		use:toc.actions.root
	>
		{@render children()}
	</div>
	<aside
		class="hidden sticky lg:flex flex-col top-0 right-0 w-fit overflow-y-auto py-12 pl-4 gap-6"
		style:height={tocHeight}
		style:top={tocTop}
	>
		<span class="text-base font-medium">On This Page</span>
		{#if toc.items.size}
			<ul class="list-none flex flex-col gap-2 pl-2">
				{#each toc.items.values() as { id, text } (id)}
					<li>
						<!-- svelte-ignore a11y_consider_explicit_label -->
						<!-- svelte-ignore a11y_missing_attribute -->
						<a
							href={`#${id}`}
							class={`text-sm ${toc.activeItem?.id === id ? 'text-ahhs-red-400 dark:text-ahhs-red-300 font-bold text-lg' : 'font-medium'}`}
							data-toc-link-active={toc.activeItem?.id === id}
						>
							{text}
						</a>
					</li>
				{/each}
			</ul>
		{/if}
	</aside>
	<div class="fixed bottom-4 right-4 w-full flex lg:hidden flex-row justify-end">
		{#if toc.items.size}
			<Select.Root type="single">
				<Select.Trigger class="w-fit flex flex-row items-center gap-2">
					On This Page
					<span class="icon-[lucide--chevron-up] size-5"></span>
				</Select.Trigger>
				<Select.Content class="bg-surface-light-01 dark:bg-surface-dark-02 shadow-sm">
					{#each toc.items.values() as { id, text } (id)}
						<Select.Item value={id} label={text}>
							<!-- svelte-ignore a11y_consider_explicit_label -->
							<!-- svelte-ignore a11y_missing_attribute -->
							<a
								href={`#${id}`}
								class={`text-sm ${toc.activeItem?.id === id ? 'text-ahhs-red-400 dark:text-ahhs-red-300 font-bold text-lg' : 'font-medium'}`}
								data-toc-link-active={toc.activeItem?.id === id}
							>
								{text}
							</a>
						</Select.Item>
					{/each}
				</Select.Content>
			</Select.Root>
		{/if}
	</div>
</div>
