<script lang="ts">
	import Tooltip from "../tooltip/Tooltip.svelte";

  type Props = {
    pinned: boolean;
    onclick(): void;
  }

  let { pinned, onclick }: Props = $props();

</script>

{#if pinned === true}
  <button class="nav-item cursor-pointer" onclick={() => onclick()}>
    <span class="icon-[material-symbols--menu-open-rounded] size-5"></span>
    Collapse
  </button>
{/if}

{#if pinned === false}
  <Tooltip label='Expand Navigation Menu'>
    <button 
      aria-label='Expand navigation menu'
      id='nav-toggle-btn'
      class="navrail-icon-btn"
      onclick={() => onclick()}
    >
      <span class="icon-[material-symbols--menu-rounded] size-7"></span>    
    </button>
  </Tooltip>
{/if}

