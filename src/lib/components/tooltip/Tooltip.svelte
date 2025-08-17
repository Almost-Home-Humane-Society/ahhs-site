<script lang="ts">
  import { autoUpdate } from '@floating-ui/dom';
	import { updatePosition } from "./helpers";
	import type { TooltipProps, TriggerEventType } from "./types";
	import { portal } from '$lib/actions/portal';

  let { children, containerClass, disabled, event, label}: TooltipProps = $props();

  let id = $props.id();
  let opened = $state<boolean>(false);
  let triggerEvent = $derived<TriggerEventType>(event ?? 'hover');

  const hideEventHandler = (eventType: TriggerEventType) => {
    if (triggerEvent === eventType || (eventType === 'click' && triggerEvent === 'hover')) {
      opened = false;

      const tooltipRef: HTMLElement | null = document.querySelector(`#${id}_tooltip`);
      const arrowRef: HTMLElement | null = document.querySelector(`#${id}_arrow`);

      if (tooltipRef) {
        tooltipRef.style.display = 'none';
      }

      if (arrowRef) {
        arrowRef.style.display = 'none';
      }
    }
  }

  const showEventHandler = (eventType: TriggerEventType) => {
    if (disabled) return;

    if (triggerEvent === eventType) {
      if (eventType === 'click' && opened) {
        hideEventHandler('click');
        return;
      }

      opened = true;
      const triggerRef: HTMLElement | null = document.querySelector(`#${id}_trigger`);
      const tooltipRef: HTMLElement | null = document.querySelector(`#${id}_tooltip`);
      const arrowRef: HTMLElement | null = document.querySelector(`#${id}_arrow`);

      if (!triggerRef) return;
      if (!tooltipRef) return;
      if (!arrowRef) return;

      tooltipRef.style.display = 'block';

      const cleanup = autoUpdate(triggerRef, tooltipRef, () => {
        updatePosition(triggerRef, tooltipRef, arrowRef);
      });
    }
  }
</script>

<div
  id={`${id}_trigger`}
  aria-describedby={disabled ? 'none' : `${id}_tooltip`}
  class={`relative h-fit w-fit ${containerClass}`}
  role='presentation'
  onblur={() => hideEventHandler('click')}
  onclick={() => showEventHandler('click')}
  onkeydown={(event) => {
    if (event.key === 'Enter') showEventHandler('click');
  }}
  onmouseenter={() => showEventHandler('hover')}
  onmouseleave={() => hideEventHandler('hover')}
  onfocusin={() => showEventHandler('focus')}
  onfocusout={() => hideEventHandler('focus')}
>
  {@render children()}
</div>
<div
  aria-hidden={opened ? 'false' : 'true'}
  use:portal={document.body}
  id={`${id}_tooltip`}
  role='tooltip'
  style="display: none;"
>
  {#if typeof label === 'string'}
    {label}
  {:else}
    {@render label()}
  {/if}
  <span
    aria-hidden={opened ? 'false' : 'true'}
    class="arrow"
    id={`${id}_arrow`}
  >
  </span>
</div>