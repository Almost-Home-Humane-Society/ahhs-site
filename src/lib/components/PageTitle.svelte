<script lang="ts">
	import type { Snippet } from "svelte";

  type Props = {
    tag?: string;
    title: string;
  }

  let { tag, title }: Props = $props();
</script>

<div class="flex flex-col gap-0 w-full border-b border-b-ahhs-red-200 pb-2">
  <h2 class="text-4xl font-bold">{title}</h2>
  {#if tag}
  <p class="text-xl font-medium">{tag}</p>
  {/if}
</div>