<script lang="ts">
	import { page } from '$app/state';
	import '../app.css';
	import NavDrawerLayout from '$lib/components/layout/NavDrawerLayout.svelte';
	import NavRailLayout from '$lib/components/layout/NavRailLayout.svelte';
	import type { Theme } from '$lib/state/types';
	import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';
	import { SvelteQueryDevtools } from '@tanstack/svelte-query-devtools';

	let { children } = $props();
	let theme = $state<Theme>('dark');
	let innerWidth = $state<number | undefined>(undefined);
	const themeName: string = 'ahhs_theme';
	const useNavRail = $derived.by(() => innerWidth && innerWidth >= 768);
	// const useNavRail = $derived.by(() => false);

	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				staleTime: 1000 * 60 * 60, // 1 hour
				refetchOnWindowFocus: false
			}
		}
	});

	$effect(() => {
		let preference = getPreference();
		setTheme(preference as Theme);
	});

	const getPreference = () => {
		let preference: string | null = window.localStorage.getItem(themeName);

		if (!preference) {
			preference = window.matchMedia('(prefers-color-scheme: dark').matches ? 'dark' : 'light';
			window.localStorage.setItem(themeName, preference);
		}

		return preference;
	};

	const setTheme = (value: Theme) => {
		theme = value;
		const html = document.querySelector('html');
		if (html instanceof HTMLElement) html.setAttribute('data-theme', value);
		window.localStorage.setItem(themeName, value);
		if (value === 'dark') document.body.classList.add('dark');
		else document.body.classList.remove('dark');
	};

	const toggleTheme = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

	let themeColor = $derived.by(() => {
		if (page.url.pathname === '/') {
			return theme === 'dark' ? '#050518' : '#fcf9f0';
		} else {
			return theme === 'dark' ? '#232332' : '#fafafa';
		}
	});

	$effect(() => {
		if (window && !innerWidth) {
			innerWidth = window.innerWidth;
		}
	});
</script>

<svelte:head>
	<link rel="apple-touch-icon" sizes="180x180" href="favicon.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="favicon.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="favicon.png" />
	<link rel="shortcut icon" href="favicon.ico" />
	<link rel="manifest" href="manifest.json" />
	<meta name="theme-color" content={themeColor} />
	<title>AHHS</title>
	<meta
		name="description"
		content="Almost Home Humane Society is a non-profit animal rescue shelter serving the greater Lafayette, Indiana area."
	/>
</svelte:head>

<svelte:window
	on:resize={() => {
		innerWidth = window.innerWidth;
	}}
/>

<div class="skip-to-main-link">
	<a href="#main">Skip to main content</a>
</div>

<QueryClientProvider client={queryClient}>
	{#if useNavRail}
		<NavRailLayout {theme} onThemeToggle={toggleTheme}>
			{@render children()}
		</NavRailLayout>
	{:else}
		<NavDrawerLayout {theme} onThemeToggle={toggleTheme}>
			{@render children()}
		</NavDrawerLayout>
	{/if}
	<SvelteQueryDevtools initialIsOpen={false} />
</QueryClientProvider>
