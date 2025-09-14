<script lang="ts">
	import { page } from "$app/state";
	import type { NavItemProps } from "$lib/state/types";
	import { showAsActive } from "$lib/utils/navlist";
	import Tooltip from "../tooltip/Tooltip.svelte";

  type Props = NavItemProps & {
    onhover(): void;
  }

  let props: Props = $props();
  let isActive = $derived.by(() => showAsActive(props, page.url.pathname));
  let id = $derived(props.label.replace(/\s+/g, '-').toLowerCase() + '_icon');
</script>

<li onmouseenter={() => props.onhover()}>
  <Tooltip
    label={props.label}
  >
    <a
      class={`navrail-icon-btn ${isActive ? 'active' : ''} ${props.disabled ? 'disabled cursor-not-allowed' : 'cursor-pointer'}`}
      href={props.path}
      target={props.external ? 'blank' : undefined}
      rel={props.external ? 'noreferrer' : undefined}
      onclick={(event) => {
        if (props.noAction) {
          event.preventDefault();
        }

        if (props.onclick) props.onclick();
      }}
    >
      {#if props.icon}
          {@html props.icon}
      {/if}
    </a>
  </Tooltip>
</li>