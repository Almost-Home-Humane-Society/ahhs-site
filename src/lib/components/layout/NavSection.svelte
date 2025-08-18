<script lang="ts">
	import type { NavItemProps, NavSectionProps } from '$lib/state/types';
	import NavItem from './NavItem.svelte';
	import Self from './NavSection.svelte';

	let props: NavSectionProps = $props();
	let expanded = $state<boolean>(true);
	let classList = $derived.by(() => {
		const list: string[] = ['nav-section pb-2'];
		if (props.showBottomBorder) list.push('bottom-border');
		if (props.showTopBorder) list.push('top-border');
		return list.join(' ');
	});
</script>

<li class={`nav-section ${expanded ? 'my-0.5' : ''}`}>
	{#if expanded}
		<div class={classList}>
			<button
				class="nav-section-title cursor-pointer"
				onclick={() => {
					expanded = !expanded;
				}}
			>
				{props.title}
				<span class="iconify lucide--chevron-up size-4"></span>
			</button>
			{#if expanded}
				{#each props.items as item}
					{#if Object.hasOwn(item, 'label')}
						<NavItem {...item as NavItemProps} />
					{:else}
						<Self {...item as NavSectionProps} />
					{/if}
				{/each}
			{/if}
		</div>
	{:else}
		<button
			class="nav-item cursor-pointer py-2 px-3 text-sm rounded-md flex flex-row items-center justify-between"
			onclick={() => {
				expanded = !expanded;
			}}
		>
			{props.title}
			<span class="iconify lucide--chevron-right size-5"> </span>
		</button>
	{/if}
</li>
