import { tick } from "svelte";

export function portal(el: HTMLElement, target: string | HTMLElement = 'body') {
  let targetEl;
  async function update(newTarget: string | HTMLElement) {
    target = newTarget;
    if (typeof target === 'string') {
      targetEl = document.querySelector(target);
      if (targetEl === null) {
        await tick();
        targetEl = document.querySelector(target);
      }

      if (targetEl === null) {
        throw new Error(`No matching element found for css select: "${target}"`);
      }
    } else {
      targetEl = target;
    }

    targetEl.appendChild(el);
    el.hidden = false;
  }

  function destroy() {
    if (el.parentNode) {
      el.parentNode.removeChild(el);
    }
  }

  update(target);

  return {
    update,
    destroy
  };
}