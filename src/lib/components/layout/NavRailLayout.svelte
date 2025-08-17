<script lang="ts">
  import type {
    NavItemProps,
    NavListItem,
    NavSectionProps,
    Theme,
  } from '$lib/state/types';
  import type { Snippet } from 'svelte';
  import PinnedToggleButton from './PinnedToggleButton.svelte';
  import { navList } from '$lib/utils/navlist';
  import ThemeToggleButton from './ThemeToggleButton.svelte';
  import NavItem from './NavItem.svelte';
  import NavSection from './NavSection.svelte';
  import NavRailItem from './NavRailItem.svelte';
  import NavRailSection from './NavRailSection.svelte';
  import { page } from '$app/state';
  import Logo from '$lib/components/Logo.svelte';

  type Props = {
    children: Snippet;
    theme: Theme;
    onThemeToggle(): void;
  };

  let { children, theme, onThemeToggle }: Props = $props();
  let hasExpanded = $state<boolean>(false);
  let expanded = $state<boolean>(false);
  let pinned = $derived.by<boolean>(() => true);
  let expandedItems = $state<NavListItem[]>([]);
</script>

<div
  class={`navrail-layout ${pinned ? 'pinned' : ''} ${theme === 'dark' ? 'bg-surface-dark-01 text-neutral-50' : 'bg-surface-light-01 text-neutral-900'}`}
>
  <div class="bg-container"></div>
  <nav class="navrail">
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div
      class={`navrail-content ${expanded ? 'expanded' : 'collapsed'} ${pinned ? 'pinned' : ''}`}
      onmouseleave={() => {
        if (!pinned) expanded = false;
      }}
    >
      <div class={`icons-container ${expanded ? 'expanded' : 'collapsed'}`}>
        {#key pinned}
          <div class="sticky-top-container">
            <PinnedToggleButton
              {pinned}
              onclick={() => {
                pinned = !pinned;
                expanded = false;
                expandedItems = [];
              }}
            />
          </div>
        {/key}
        <div class="nav-container">
          {#if pinned}
            <ul role="navigation">
              {#each navList as item}
                {#if Object.hasOwn(item, 'label')}
                  <NavItem {...item as NavItemProps} />
                {:else}
                  <NavSection {...item as NavSectionProps} />
                {/if}
              {/each}
            </ul>
          {:else}
            <ul role="navigation">
              {#each navList as item}
                {#if Object.hasOwn(item, 'label')}
                  <NavRailItem
                    closeOnClick={(item as NavItemProps).closeOnClick}
                    disabled={(item as NavItemProps).disabled}
                    exact={(item as NavItemProps).exact}
                    external={(item as NavItemProps).external}
                    icon={(item as NavItemProps).icon}
                    label={(item as NavItemProps).label}
                    noAction={(item as NavItemProps).noAction}
                    path={(item as NavItemProps).path}
                    pathMatch={(item as NavItemProps).pathMatch}
                    onclick={() => {
                      expandedItems = [];
                      if (expanded && !pinned) {
                        expanded = false;
                      }

                      const onClickEvent = (item as NavItemProps).onclick;

                      if (onClickEvent) onClickEvent();
                    }}
                    onhover={() => {
                      expanded = false;
                      expandedItems = [];
                    }}
                  />
                {:else}
                  <NavRailSection
                    {...item as NavSectionProps}
                    onhover={() => {
                      hasExpanded = true;
                      expanded = true;
                      expandedItems = [...(item as NavSectionProps).items];
                    }}
                  />
                {/if}
              {/each}
            </ul>
          {/if}
        </div>
        {#key pinned}
          <ThemeToggleButton {pinned} {theme} onclick={() => onThemeToggle()} />
        {/key}
      </div>
      <div
        class={`expanded-container ${expanded ? 'expanded' : hasExpanded ? 'collapsed' : ''}`}
      >
        {#if expanded && !pinned}
          {#each expandedItems as item}
            {#if Object.hasOwn(item, 'label')}
              <NavItem {...item as NavItemProps} />
            {:else}
              <NavSection {...item as NavSectionProps} />
            {/if}
          {/each}
        {/if}
      </div>
    </div>
  </nav>
  <div class="body relative">
    <div
      class={`flex flex-col w-full p-3 xl:p-4 relative xl:sticky xl:top-0 xl:left-0 z-10 bg-surface-light-01 dark:bg-surface-dark-01`}
    >
      <div class="flex flex-row items-center w-full gap-3">
        <Logo class="h-12" />
        <h1 class="flex lg:hidden text-2xl font-bold">AHHS</h1>
        <div class="hidden lg:flex flex-col gap-0">
          <h1
            class={`${page.url.pathname === '/' ? 'text-2xl lg:text-3xl xl:text-5xl' : 'text-2xl'} font-bold text-ahhs-blue dark:text-white`}
          >
            Almost Home Humane Society
          </h1>
          {#if page.url.pathname !== '/'}
            <span class="text-ahhs-red-500 dark:text-ahhs-red-200"
              >Adopt a friend. Save a life.</span
            >
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

          <div class="flex flex-row px-2 py-1 rounded-full gap-2"></div>
        </div>
      </div>
      <!-- Header -->
    </div>
    <div class={`content ${page.url.pathname === '/' ? '' : 'py-4 px-8'}`}>
      {@render children()}
    </div>
  </div>
</div>
