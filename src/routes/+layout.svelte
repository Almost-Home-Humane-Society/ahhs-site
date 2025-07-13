<script lang="ts">
  import { page } from '$app/state';
	import { focusTrap } from '$lib/actions/focusTrap';
	import Logo from '$lib/Logo.svelte';
	import '../app.css';
  import { drawerState } from '$lib/state/drawerState.svelte';
	import NavItem from '$lib/components/NavItem.svelte';

  type Theme = 'dark' | 'light';

	let { children } = $props();
  let theme = $state<Theme>('dark');
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
  <meta name="theme-color" content={theme === 'dark' ? "#050518" : "#faf5dc"} />
  <title>AHHS</title>
  <meta name="description" content="Almost Home Humane Society is a non-profit animal rescue shelter serving the greater Lafayette, Indiana area.">

</svelte:head>

<div class="skip-to-main-link">
  <a href="#main">Skip to main content</a>
</div>
<div class={`flex flex-col p-0 relative flex-auto min-h-dvh w-full ${theme === 'dark' ? 'bg-surface-dark-01 text-neutral-50' : 'bg-surface-light-01 text-neutral-900'}`}>
  <div class="bg-container">  
  </div>
  <div class={`flex flex-col w-full p-3 xl:p-4 relative xl:sticky xl:top-0 xl:left-0 z-10 ${page.url.pathname !== '/' ? 'bg-white dark:bg-surface-dark-02 shadow-md dark:shadow-neutral-800' : ''}`}>
    <div class="flex flex-row items-center w-full gap-3">
      <button id='nav_menu_toggle' aria-label="toggle navigation menu" class="btn-icon" onclick={() => (drawerState.value = !drawerState.value)}>
        <span aria-labelledby="nav_menu_toggle" class="iconify lucide--menu size-7 lg:size-6"></span>
      </button>
      {#if page.url.pathname !== '/'}
      <Logo class='h-12' />
      <h1 class="flex lg:hidden text-2xl font-bold">AHHS</h1>
      <div class="hidden lg:flex flex-col gap-0">
        <h1 class="text-2xl font-bold">Almost Home Humane Society</h1>
        <span class="text-ahhs-red-500 dark:text-ahhs-red-200">Adopt a friend. Save a life.</span>
      </div>
      {/if}
      <div class="flex flex-row items-center flex-auto">
      </div>
      <div class="flex flex-row items-center">
          <div class="hidden lg:flex flex-row items-center gap-2">
            <a class="btn-secondary" href="https://adoptafriend.itemorder.com/shop/home/" target="_blank">
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
          <button id='light_theme_btn' aria-label="Light theme" class="btn-icon" onclick={toggleTheme}>
            <span aria-labelledby="light_theme_btn" class="icon-[material-symbols-light--wb-sunny-outline-rounded] size-7 lg:size-6"></span>
          </button>
          {:else}
          <button id='dark_theme_btn' aria-label="Dark theme" class="btn-icon" onclick={toggleTheme}>
            <span aria-labelledby="dark_theme_btn" class="icon-[material-symbols-light--moon-stars-outline-rounded] size-7 lg:size-6"></span>
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
      checked={drawerState.value}
      aria-hidden='true'
      class="drawer-toggle"
    />
    <!-- Drawer -->
    <main id='main'>
      <div class="flex flex-col basis-full flex-auto p-4 lg:p-8 gap-3">
        {@render children()}
      </div>
      <footer class="flex flex-col py-4 px-5 bg-ahhs-blue-400/5 dark:bg-ahhs-blue-200/10 mt-12">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
          <div class="flex flex-col w-full gap-3 items-center">
            <h3 class="text-2xl font-medium">Hours</h3>
            <dl class="grid grid-cols-2 gap-x-12 gap-y-1">
                <dt>Monday</dt>
                <dd>Closed</dd>
                <dt>Tuesday</dt>
                <dd>12pm - 6pm</dd>
                <dt>Wednesday</dt>
                <dd>12pm - 6pm</dd>
                <dt>Thursday</dt>
                <dd>12pm - 6pm</dd>
                <dt>Friday</dt>
                <dd>12pm - 6pm</dd>
                <dt>Saturday</dt>
                <dd>12pm - 4pm</dd>
                <dt>Sunday</dt>
                <dd>Closed</dd>
            </dl>
          </div>
          <div class="flex flex-col w-full gap-3 items-center">
            <h3 class="text-2xl font-medium">Location</h3>
            <a 
              class="underline text-center"
              href="https://www.google.com/maps/place/Almost+Home+Humane+Society/@40.4001066,-86.8983925,17z/data=!3m1!4b1!4m5!3m4!1s0x88131d64b777898b:0x2eb8b4b68ce986db!8m2!3d40.4001025!4d-86.8961985" 
              target="_blank"
            >
              1705 S 2nd Street <br />
              Lafayette, IN 47905
            </a>
          </div>
          <div class="flex flex-col w-full gap-3 items-center">
            <h3 class="text-2xl font-medium">Contact Us</h3>
            <div class="grid grid-cols-1 gap-1 text-center">
                <a class="underline" href="mailto:info@almosthomehumane.org">info@almosthomehumane.org</a>
                <a class="underline" href="tel:+17654745222">(765) 474-5222</a>
            </div>
          </div>    
        </div>
        <div class="flex flex-col lg:flex-row w-full justify-center items-center py-4 gap-6 lg:gap-24">
          <div class="hidden lg:flex flex-row items-center">
            <span class="icon-[lucide--copyright]"></span>
            {new Date().getFullYear()} Almost Home Humane Society
          </div>
          <div class="flex flex-col items-center justify-center">
            <span>Follow Us:</span>
            <div class="flex flex-row gap-2 items-center justify-center">
              <a aria-label="Facebook" href="https://www.facebook.com/AlmostHomeHS/" target="_blank">
                <span class="icon-[logos--facebook] size-8 lg:size-6"></span>                
              </a>
              <a aria-label="Facebook" href="https://instagram.com/almosthomehumane" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class="size-8 lg:size-6 -mt-[5px]"><g fill="none"><rect width="256" height="256" fill="url(#skillIconsInstagram0)" rx="60"/><rect width="256" height="256" fill="url(#skillIconsInstagram1)" rx="60"/><path fill="#fff" d="M128.009 28c-27.158 0-30.567.119-41.233.604c-10.646.488-17.913 2.173-24.271 4.646c-6.578 2.554-12.157 5.971-17.715 11.531c-5.563 5.559-8.98 11.138-11.542 17.713c-2.48 6.36-4.167 13.63-4.646 24.271c-.477 10.667-.602 14.077-.602 41.236s.12 30.557.604 41.223c.49 10.646 2.175 17.913 4.646 24.271c2.556 6.578 5.973 12.157 11.533 17.715c5.557 5.563 11.136 8.988 17.709 11.542c6.363 2.473 13.631 4.158 24.275 4.646c10.667.485 14.073.604 41.23.604c27.161 0 30.559-.119 41.225-.604c10.646-.488 17.921-2.173 24.284-4.646c6.575-2.554 12.146-5.979 17.702-11.542c5.563-5.558 8.979-11.137 11.542-17.712c2.458-6.361 4.146-13.63 4.646-24.272c.479-10.666.604-14.066.604-41.225s-.125-30.567-.604-41.234c-.5-10.646-2.188-17.912-4.646-24.27c-2.563-6.578-5.979-12.157-11.542-17.716c-5.562-5.562-11.125-8.979-17.708-11.53c-6.375-2.474-13.646-4.16-24.292-4.647c-10.667-.485-14.063-.604-41.23-.604zm-8.971 18.021c2.663-.004 5.634 0 8.971 0c26.701 0 29.865.096 40.409.575c9.75.446 15.042 2.075 18.567 3.444c4.667 1.812 7.994 3.979 11.492 7.48c3.5 3.5 5.666 6.833 7.483 11.5c1.369 3.52 3 8.812 3.444 18.562c.479 10.542.583 13.708.583 40.396s-.104 29.855-.583 40.396c-.446 9.75-2.075 15.042-3.444 18.563c-1.812 4.667-3.983 7.99-7.483 11.488c-3.5 3.5-6.823 5.666-11.492 7.479c-3.521 1.375-8.817 3-18.567 3.446c-10.542.479-13.708.583-40.409.583c-26.702 0-29.867-.104-40.408-.583c-9.75-.45-15.042-2.079-18.57-3.448c-4.666-1.813-8-3.979-11.5-7.479s-5.666-6.825-7.483-11.494c-1.369-3.521-3-8.813-3.444-18.563c-.479-10.542-.575-13.708-.575-40.413s.096-29.854.575-40.396c.446-9.75 2.075-15.042 3.444-18.567c1.813-4.667 3.983-8 7.484-11.5s6.833-5.667 11.5-7.483c3.525-1.375 8.819-3 18.569-3.448c9.225-.417 12.8-.542 31.437-.563zm62.351 16.604c-6.625 0-12 5.37-12 11.996c0 6.625 5.375 12 12 12s12-5.375 12-12s-5.375-12-12-12zm-53.38 14.021c-28.36 0-51.354 22.994-51.354 51.355s22.994 51.344 51.354 51.344c28.361 0 51.347-22.983 51.347-51.344c0-28.36-22.988-51.355-51.349-51.355zm0 18.021c18.409 0 33.334 14.923 33.334 33.334c0 18.409-14.925 33.334-33.334 33.334s-33.333-14.925-33.333-33.334c0-18.411 14.923-33.334 33.333-33.334"/><defs><radialGradient id="skillIconsInstagram0" cx="0" cy="0" r="1" gradientTransform="matrix(0 -253.715 235.975 0 68 275.717)" gradientUnits="userSpaceOnUse"><stop stop-color="#fd5"/><stop offset=".1" stop-color="#fd5"/><stop offset=".5" stop-color="#ff543e"/><stop offset="1" stop-color="#c837ab"/></radialGradient><radialGradient id="skillIconsInstagram1" cx="0" cy="0" r="1" gradientTransform="matrix(22.25952 111.2061 -458.39518 91.75449 -42.881 18.441)" gradientUnits="userSpaceOnUse"><stop stop-color="#3771c8"/><stop offset=".128" stop-color="#3771c8"/><stop offset="1" stop-color="#60f" stop-opacity="0"/></radialGradient></defs></g></svg>             
              </a>              
            </div>
          </div>
          <div class="lg:hidden flex flex-row items-center">
            <span class="icon-[lucide--copyright]"></span>
            {new Date().getFullYear()} Almost Home Humane Society
          </div>          
        </div>
      </footer>      
    </main>
    <div class="drawer-side z-50">
      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
      <label for='nav-drawer' class="drawer-overlay" onclick={() => (drawerState.value = !drawerState.value)}>

      </label>
      {#if drawerState}
        <nav class="nav-list list-none" use:focusTrap={drawerState.value}>
          <button
            class="btn-icon"
            aria-label="Close navigation drawer"
            id='nav_drawer_close_btn'
            data-target="tooltip"
            onclick={() => drawerState.value = !drawerState.value}
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="size-6" viewBox="0 0 24 24"><path fill="currentColor" d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"/></svg>
          </button>
        </nav>
        <ul class="list-none mt-16">
          <NavItem route="/" onclick={() => (drawerState.value = !drawerState.value)}>
            Home
          </NavItem>
          <NavItem route="/about" onclick={() => (drawerState.value = !drawerState.value)}>
            About Us
          </NavItem>
          <NavItem route="/donate" onclick={() => (drawerState.value = !drawerState.value)}>
            Donate
          </NavItem>
          <NavItem route="/faq" onclick={() => (drawerState.value = !drawerState.value)}>
            Frequently Asked Questions
          </NavItem>
        </ul>
      {/if}
    </div>
  </div>
</div>
