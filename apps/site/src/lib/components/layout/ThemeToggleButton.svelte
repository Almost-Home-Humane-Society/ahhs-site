<script lang="ts">
	import type { Theme } from "$lib/state/types";
	import Tooltip from "../tooltip/Tooltip.svelte";

  type Props = {
    pinned: boolean;
    theme: Theme;
    onclick(): void;
  }

  let { pinned, theme, onclick }: Props = $props();

</script>

{#if pinned === true}
  <button class="nav-item cursor-pointer" onclick={() => onclick()}>
      {#if theme === 'dark'}
        <span aria-labelledby="light_theme_btn" class="icon-[material-symbols-light--wb-sunny-outline-rounded] lg:size-5"></span>
      {:else}
        <span aria-labelledby="dark_theme_btn" class="icon-[material-symbols-light--moon-stars-outline-rounded] lg:size-5"></span>
      {/if}    
      Toggle Theme
  </button>
{/if}

{#if pinned === false}
  <Tooltip label='Toggle Theme'>
    <button 
      aria-label='Toggle theme'
      id='theme-toggle-btn'
      class="navrail-icon-btn"
      onclick={() => onclick()}
    >
      {#if theme === 'dark'}
        <span aria-labelledby="light_theme_btn" class="icon-[material-symbols-light--wb-sunny-outline-rounded] size-7"></span>
      {:else}
        <span aria-labelledby="dark_theme_btn" class="icon-[material-symbols-light--moon-stars-outline-rounded] size-7"></span>
      {/if}
    </button>
  </Tooltip>
{/if}