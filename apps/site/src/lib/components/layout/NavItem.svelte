<script lang="ts">
  import { page } from "$app/state";
	import { drawerState } from "$lib/state/drawerState.svelte";
	import type { NavItemProps } from "$lib/state/types";
	import { showAsActive } from "$lib/utils/navlist";
  let props: NavItemProps = $props();
  const isActive = $derived.by(() => showAsActive(props, page.url.pathname));
</script>

<li
  class={`nav-item py-0 px-0 ${props.disabled ? 'disabled cursor-not-allowed' : 'cursor-pointer'} ${isActive ? 'active' : ''}`}
>
  <a
    class="py-2 px-3 text-sm rounded-md"
    href={props.path}
    target={props.external ? 'blank' : undefined}
    rel={props.external ? 'noreferrer' : undefined}
    onclick={(event) => {
      drawerState.value = false;

      if (props.noAction) {
        event.preventDefault();
      }

      if (props.onclick) props.onclick();
    }}
  >
    {props.label}
  </a>
</li>
