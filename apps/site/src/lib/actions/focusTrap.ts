export function focusTrap(node: HTMLElement, enabled: boolean) {
  const elemWhitelist = 'a[href]:not([tabindex="-1"]), button:not([tabindex="-1"]), input:not([tabindex="-1"]), textarea:not([tabindex="-1"]), select:not([tabindex="-1"]), details:not([tabindex="-1"]), [tabindex]:not([tabindex="-1"])';
  let elemFirst: HTMLElement;
  let elemLast: HTMLElement;

  function onFirstKeydown(e: KeyboardEvent): void {
    if (e.shiftKey && e.code === 'Tab') {
      e.preventDefault();
      elemLast?.focus();
    }
  }

  function onLastKeydown(e: KeyboardEvent): void {
    if (!e.shiftKey && e.code === 'Tab') {
      e.preventDefault();
      elemFirst?.focus();
    }
  }

  const sortByTabIndex = (focusableElems: HTMLElement[]): HTMLElement[] => {
    return focusableElems
      .filter(elem => elem.tabIndex >= 0)
      .sort((a, b) => {
        if (a.tabIndex === 0 && b.tabIndex > 0) {
          return 1;
        } else if (a.tabIndex > 0 && b.tabIndex === 0) {
          return -1;
        } else {
          return a.tabIndex - b.tabIndex;
        }
      });
  }

  type FocusindexElement = HTMLElement & { dataset: { focusindex: string }};

  const getFocusTrapTarget = (elemFirst: HTMLElement) => {
    const focusindexElements = [...node.querySelectorAll<FocusindexElement>('[data-focusindex')];
    if (!focusindexElements || focusindexElements.length === 0) return elemFirst;

    return focusindexElements.sort((a, b) => {
      return +a.dataset.focusindex - +b.dataset.focusindex;
    })[0] || elemFirst;
  }

  const onScanElements = (fromObserver: boolean) => {
    if (enabled === false)  return;

    const focusableElems: HTMLElement[] = sortByTabIndex(Array.from(node.querySelectorAll(elemWhitelist)));

    if (focusableElems.length) {
      elemFirst = focusableElems[0];
      elemLast = focusableElems[focusableElems.length - 1];
      if (!fromObserver) getFocusTrapTarget(elemFirst).focus();
      elemFirst.addEventListener('keydown', onFirstKeydown);
      elemLast.addEventListener('keydown', onLastKeydown);
    }
  };
  onScanElements(false);

  function onCleanUp(): void {
    if (elemFirst) elemFirst.removeEventListener('keydown', onFirstKeydown);
    if (elemLast) elemLast.removeEventListener('keydown', onLastKeydown);
  }

  const onObservationChange = (mutationRecords: MutationRecord[], observer: MutationObserver) => {
    if (mutationRecords.length) {
      onCleanUp();
      onScanElements(true);
    }

    return observer;
  }

  const observer = new MutationObserver(onObservationChange);
  observer.observe(node, { childList: true, subtree: true });

  return {
    update(newArgs: boolean) {
      enabled = newArgs;
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      newArgs ? onScanElements(false) : onCleanUp();
    },
    destroy() {
      onCleanUp();
      observer.disconnect();
    }
  }
}