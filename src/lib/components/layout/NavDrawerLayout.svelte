<script lang="ts">
	import { page } from '$app/state';
	import Logo from '$lib/components/Logo.svelte';
	import { drawerState } from '$lib/state/drawerState.svelte';
	import type { NavItemProps, NavSectionProps, Theme } from '$lib/state/types';
	import { navList } from '$lib/utils/navlist';
	import type { Snippet } from 'svelte';
	import NavItem from './NavItem.svelte';
	import NavSection from './NavSection.svelte';
	import { focusTrap } from '$lib/actions/focusTrap';
	import Footer from './Footer.svelte';

	type Props = {
		children: Snippet;
		theme: Theme;
		onThemeToggle(): void;
	};

	let { children, theme, onThemeToggle }: Props = $props();
</script>

<div
	class={`flex flex-col p-0 relative flex-auto min-h-dvh w-full ${theme === 'dark' ? 'bg-surface-dark-01 text-neutral-50' : 'bg-surface-light-01 text-neutral-900'}`}
>
	<div class="bg-container"></div>
	<div
		class={`flex flex-col w-full p-3 xl:p-4 sticky top-0 left-0 z-10 bg-surface-light-01 dark:bg-surface-dark-02`}
	>
		<div class="flex flex-row items-center w-full gap-3">
			<button
				id="nav_menu_toggle"
				aria-label="toggle navigation menu"
				class="btn-icon"
				onclick={() => (drawerState.value = !drawerState.value)}
			>
				<span aria-labelledby="nav_menu_toggle" class="iconify lucide--menu size-7 lg:size-6"
				></span>
			</button>
			<Logo class="h-12" />
			<h1 class="flex lg:hidden text-2xl font-bold text-ahhs-blue-700 dark:text-white">AHHS</h1>
			<div class="hidden lg:flex flex-col gap-0">
				<h1 class="text-2xl font-bold">Almost Home Humane Society</h1>
				{#if page.url.pathname !== '/'}
					<span class="text-ahhs-red-500 dark:text-ahhs-red-200">Adopt a friend. Save a life.</span>
				{/if}
			</div>
			<div class="flex flex-row items-center flex-auto"></div>
			<div class="flex flex-row items-center">
				<div class="hidden lg:flex flex-row items-center gap-2">
					<a
						class="btn-secondary"
						href="https://adoptafriend.itemorder.com/shop/home/"
						target="_blank"
					>
						<span class="icon-[material-symbols-light--shopping-bag]"></span>
						Shop
					</a>
					<a class="btn-primary" href="/donate">
						<span class="icon-[lucide--heart-handshake]"></span>
						Donate
					</a>
				</div>

				<div class="flex flex-row px-2 py-1 rounded-full gap-2">
					{#if theme === 'dark'}
						<button
							id="light_theme_btn"
							aria-label="Light theme"
							class="btn-icon"
							onclick={onThemeToggle}
						>
							<span
								aria-labelledby="light_theme_btn"
								class="icon-[material-symbols-light--wb-sunny-outline-rounded] size-7 lg:size-6"
							></span>
						</button>
					{:else}
						<button
							id="dark_theme_btn"
							aria-label="Dark theme"
							class="btn-icon"
							onclick={onThemeToggle}
						>
							<span
								aria-labelledby="dark_theme_btn"
								class="icon-[material-symbols-light--moon-stars-outline-rounded] size-7 lg:size-6"
							></span>
						</button>
					{/if}
				</div>
			</div>
		</div>
		<!-- Header -->
	</div>
	<div class="drawer">
		<input
			id="nav-drawer"
			type="checkbox"
			disabled
			checked={drawerState.value}
			aria-hidden="true"
			class="drawer-toggle"
		/>
		<!-- Drawer -->
		<main id="main">
			<div class="flex flex-col basis-full flex-auto gap-3">
				{@render children()}
			</div>
			<Footer />
		</main>
		<div class="drawer-side z-50">
			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
			<label
				for="nav-drawer"
				class="drawer-overlay"
				onclick={() => (drawerState.value = !drawerState.value)}
			>
			</label>
			{#if drawerState}
				<nav class="nav-list list-none" use:focusTrap={drawerState.value}>
					<button
						class="btn-icon"
						aria-label="Close navigation drawer"
						id="nav_drawer_close_btn"
						data-target="tooltip"
						onclick={() => (drawerState.value = !drawerState.value)}
					>
						<svg xmlns="http://www.w3.org/2000/svg" class="size-6" viewBox="0 0 24 24"
							><path
								fill="currentColor"
								d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"
							/></svg
						>
					</button>
				</nav>
				<ul class="list-none mt-16 w-full">
					{#each navList as item}
						{#if Object.hasOwn(item, 'label')}
							<NavItem {...item as NavItemProps} />
						{:else}
							<NavSection {...item as NavSectionProps} />
						{/if}
					{/each}
				</ul>
			{/if}
		</div>
	</div>
</div>
