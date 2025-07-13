<script lang="ts">
  import { page } from "$app/state";
	import type { Snippet } from "svelte";

  type Props = {
    children: Snippet;
    external?: boolean;
    noAction?: boolean;
    route: string;
    onclick?(): void;
  }

  let { children, external, noAction, route, onclick }: Props = $props();

  let isActive = $derived.by(() => {
    return page.url.pathname.toLowerCase() === route.toLowerCase();
  });
</script>

<li class="flex w-full">
  <a
    class="nav-item w-full"
    href={route}
    target={external ? '_blank' : undefined}
    rel={external ? 'noreferrer' : undefined}
    onclick={(event) => {
      if (noAction) {
        event.preventDefault();
        if (onclick) onclick();
        return;
      }

      if (onclick) onclick();
    }}
  >
    {#if isActive}
      <span class="nav-indicator"></span>
    {/if}
    <span class="focused flex flex-row items-center gap-2 w-full">
      {@render children()}
    </span>
  </a>
</li>
