<script lang="ts">
	import type { Snippet } from "svelte";

  type Props = {
    children: Snippet;
    showBottomBorder: boolean;
    showTopBorder: boolean;
    title: string;
  }
  let { children, showBottomBorder, showTopBorder, title }: Props = $props();
  let expanded = $state<boolean>(false);
  let classList = $derived.by(() => {
    const list: string[] = ['nav-section'];
    if (showBottomBorder) list.push('bottom-border');
    if (showTopBorder) list.push('top-border');
    return list.join(' ');
  })
</script>

<li>
  <div class={classList}>
    <button class="nav-section-title" onclick={() => (expanded = !expanded)}>
      {title}
      <span class={`iconify ${expanded ? 'lucide--chevron-up' : 'lucide--chevron-right'} size-6 lg:size-5`}></span>
    </button>
    {#if expanded}
      <ul class="list-none">
        {@render children()}
      </ul>
    {/if}
  </div>
</li>



