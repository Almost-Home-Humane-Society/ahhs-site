<script lang="ts">
  type Props = {
    routes: Array<{name: string, route: string}>
  }

  let props: Props = $props();
</script>

<div class="hidden lg:flex flex-row gap-0.5 items-center">
  <a class="text-sm text-alt cursor-pointer" href="/">
    Home
  </a>
  {#if props.routes.length > 0}
    <span class="iconify lucide--chevron-right size-4 text-alt"></span>
  {/if}
  {#each props.routes as item, i}
    <a class="text-sm text-alt cursor-pointer" href={item.route}>
      {item.name}
    </a>
    {#if i < props.routes.length - 1}
      <span class="iconify lucide--chevron-right size-4 text-alt"></span>
    {/if}
  {/each}
</div>