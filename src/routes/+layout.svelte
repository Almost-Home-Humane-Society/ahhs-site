<script lang="ts">
  import { page } from '$app/state';
	import { focusTrap } from '$lib/actions/focusTrap';
	import Logo from '$lib/Logo.svelte';
	import '../app.css';

  type Theme = 'dark' | 'light';

	let { children } = $props();
  let theme = $state<Theme>('dark');
  let drawerState = $state<boolean>(false);
  const themeName: string = 'ahhs_theme';

  $effect(() => {
    let preference = getPreference();
    setTheme(preference as Theme);
  })

  const getPreference = () => {
    let preference: string | null = window.localStorage.getItem(themeName);

    if (!preference) {
      preference = window.matchMedia('(prefers-color-scheme: dark').matches ? 'dark' : 'light';
      window.localStorage.setItem(themeName, preference);
    }

    return preference;
  }

  const setTheme = (value: Theme) => {
    theme = value;
    const html = document.querySelector('html');
    if (html instanceof HTMLElement) html.setAttribute('data-theme', value);
    window.localStorage.setItem(themeName, value);
    if (value === 'dark') document.body.classList.add('dark');
    else document.body.classList.remove('dark');
  }

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }
</script>

<svelte:head>
  <link rel="apple-touch-icon" sizes="180x180" href="favicon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="favicon.png">
  <link rel="icon" type="image/png" sizes="16x16" href="favicon.png">
  <link rel="shortcut icon" href="favicon.ico">
  <link rel="manifest" href="manifest.json">
  <meta name="theme-color" content={theme === 'dark' ? "#050518" : "#fafafa"} />
  <title>AHHS</title>
  <meta name="description" content="Almost Home Humane Society is a non-profit animal rescue shelter serving the greater Lafayette, Indiana area.">

</svelte:head>

<div class="skip-to-main-link">
  <a href="#main">Skip to main content</a>
</div>
<div class={`flex flex-col p-0 relative flex-auto min-h-dvh w-full ${theme === 'dark' ? 'bg-surface-dark-01 text-neutral-50' : 'bg-surface-light-01 text-neutral-900'}`}>
  <div class="bg-container">  
  </div>
  <div class="flex flex-col w-full p-3 xl:p-4 relative xl:sticky xl:top-0 xl:left-0 z-10">
    <div class="flex flex-row items-center w-full gap-3">
      <button id='nav_menu_toggle' aria-label="toggle navigation menu" class="btn-icon">
        <span aria-labelledby="nav_menu_toggle" class="iconify lucide--menu size-6"></span>
      </button>
      {#if page.url.pathname !== '/'}
      <Logo class='h-8 lg:h-12' />
      <h1 class="flex lg:hidden text-2xl font-bold">AHHS</h1>
      <div class="hidden lg:flex flex-col gap-0">
        <h1 class="text-2xl font-bold">Almost Home Humane Society</h1>
        <span class="text-ahhs-red-500 dark:text-ahhs-red-200">Adopt a friend. Save a life.</span>
      </div>
      {/if}
      <div class="flex flex-row items-center flex-auto">

      </div>
      <div class="flex flex-row items-center">
        <div class="flex flex-row px-2 py-1 rounded-full gap-2">
          {#if theme === 'dark'}
          <button id='light_theme_btn' aria-label="Light theme" class="btn-icon" onclick={toggleTheme}>
            <span aria-labelledby="light_theme_btn" class="icon-[material-symbols-light--wb-sunny-outline-rounded] size-6"></span>
          </button>
          {:else}
          <button id='dark_theme_btn' aria-label="Dark theme" class="btn-icon" onclick={toggleTheme}>
            <span aria-labelledby="dark_theme_btn" class="icon-[material-symbols-light--moon-stars-outline-rounded] size-6"></span>
          </button>
          {/if}
        </div>
      </div>
    </div>
    <!-- Header -->
  </div>
  <div class="drawer">
    <input 
      id='nav-drawer'
      type='checkbox'
      disabled
      checked={drawerState}
      aria-hidden='true'
      class="drawer-toggle"
    />
    <!-- Drawer -->
    <main id='main'>
      {@render children()}
    </main>
    <div class="drawer-side z-50">
      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
      <label for='nav-drawer' class="drawer-overlay" onclick={() => (drawerState = !drawerState)}>

      </label>
      {#if drawerState}
        <nav use:focusTrap={drawerState}>
          <button
            aria-label="Close navigation drawer"
            id='nav_drawer_close_btn'
            data-target="tooltip"
            onclick={() => drawerState = !drawerState}
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="size-6" viewBox="0 0 24 24"><path fill="currentColor" d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"/></svg>
          </button>
        </nav>
        <ul class="list-none">

        </ul>
      {/if}
    </div>
  </div>
</div>
