<script lang="ts">
	import { page } from "$app/state";
	import type { NavSectionProps } from "$lib/state/types";
	import { showAsActive } from "$lib/utils/navlist";
	import Tooltip from "../tooltip/Tooltip.svelte";

  type Props = NavSectionProps & {
    onhover(): void;
  }

  let props: Props = $props();
  let isActive = $derived.by(() => showAsActive(props, page.url.pathname));
  let id = $derived(props.title.replace(/\s+/g, '-').toLowerCase() + '_icon');
</script>

<li onmouseenter={props.onhover}>
  <Tooltip label={props.title}>
    <button
      aria-label={props.title}
      class={`navrail-icon-btn ${isActive ? 'active' : ''}`}
      onclick={event => event.preventDefault()}
    >
      {#if props.icon}
          {@html props.icon}
      {/if}
    </button>
  </Tooltip>
</li>