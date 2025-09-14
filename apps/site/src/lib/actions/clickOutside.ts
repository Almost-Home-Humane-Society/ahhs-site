type ClickOutsideArgs = {
  enabled: boolean;
  callback: (node: HTMLElement) => void;
}

export function clickOutside(node: HTMLElement, args: ClickOutsideArgs) {
  function handler(e: MouseEvent) {
    if (!node.contains(e.target as Node)) args.callback(node);
  }

  function setHandler(enabled: boolean) {
    (enabled ? window.addEventListener : window.removeEventListener)('click', handler);
  }

  setHandler(args.enabled);

  return {
    update(params: ClickOutsideArgs) {
      setHandler(params.enabled);
    },
    destroy() {
      setHandler(false);
    }
  }
}