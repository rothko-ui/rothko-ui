import { useEffect, useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

type PortalProps = {
  children: React.ReactNode;
  wrapperId: string;
};

export const DomPortal = ({ children, wrapperId }: PortalProps) => {
  const [wrapperEl, setWrapperEl] = useState<HTMLElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    let element = document.getElementById(wrapperId);
    let elementAutoGenerated = false;
    if (!element) {
      elementAutoGenerated = true;
      element = createWrapperAndAppendToBody(wrapperId);
    }
    setWrapperEl(element);
    return () => {
      // delete auto-created element
      if (elementAutoGenerated) {
        element?.parentNode?.removeChild(element);
      }
    };
  }, [wrapperId]);

  return wrapperEl ? createPortal(children, wrapperEl) : null;
};

export const createWrapperAndAppendToBody = (wrapperId: string) => {
  const wrapperElement = document.createElement('div');
  wrapperElement.setAttribute('id', wrapperId);
  document.body.appendChild(wrapperElement);
  return wrapperElement;
};
