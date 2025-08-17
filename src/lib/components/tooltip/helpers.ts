import { arrow, computePosition, flip, offset, shift, size } from '@floating-ui/dom';
import type { Placement } from '@floating-ui/core';

type ArrowPlacement = {
  left: string;
  top: string;
}

export function getArrowPosition(triggerElement: HTMLElement, placement: Placement): ArrowPlacement {
  const rect = triggerElement.getBoundingClientRect();
  const returnValue = { top: '0px', left: '0px' };

  if (placement.includes('top')) {
    returnValue.top = `${rect.top - 18}px`;
    returnValue.left = `${rect.left + rect.width / 2 - 7}px`;
  } else {
    returnValue.top = `${rect.top + rect.height + 4}px`;
    returnValue.left = `${rect.left + rect.width / 2 - 7}px`;
  }

  return returnValue;
}

export function getPosition(element: HTMLElement | null, x: number, y: number) {
  if (!element) return { x: x, y: y};

  if (x <= 15) {
    return { x: 15, y: y};
  } else if (element.getBoundingClientRect().width + x >= window.innerWidth - 15) {
    return { x: x-15, y: y};
  }

  return { x: x, y: y };
}

export function updatePosition(
  triggerRef: HTMLElement,
  tooltipElement: HTMLElement,
  arrowElement: HTMLElement
) {
  computePosition(triggerRef, tooltipElement, {
    placement: 'top',
    strategy: 'fixed',
    middleware: [
      arrow({ element: arrowElement }),
      offset(8),
      flip({ fallbackStrategy: 'initialPlacement' }),
      shift(),
      size({
        apply({ availableWidth, availableHeight, elements }) {
          Object.assign(elements.floating.style, {
            'max-height': `${availableHeight - 30}px`,
            'max-width': `${availableWidth - 30}px`
          })
        }
      })
    ]
  }).then(({ x, y, placement }) => {
    if (tooltipElement && tooltipElement instanceof HTMLElement) {
      const position = getPosition(tooltipElement, x, y);
      tooltipElement.setAttribute('data-placement', placement);

      Object.assign(tooltipElement.style, {
        position: 'fixed',
        left: `${position.x}px`,
        top: `${position.y}px`,
        whitespace: 'normal',
        zIndex: '999'
      });

      const arrowPosition = getArrowPosition(triggerRef, placement);

      Object.assign(arrowElement!.style, {
        position: 'fixed',
        left: arrowPosition.left,
        top: arrowPosition.top,
        zIndex: '999'
      });
    }
  })
}