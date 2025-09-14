import type { Snippet } from "svelte";

export type TriggerEventType = 'click' | 'hover' | 'focus';

export type TooltipProps = {
  containerClass?: string;
  children: Snippet;
  disabled?: boolean;
  event?: TriggerEventType;
  label: string | Snippet;
}