import React, { useCallback, useState } from 'react';
import styled, { css } from 'styled-components';

import type { RothkoKind } from '../../theme/types';
import AccordionContext from './AccordionContext';
import type { Icon } from './types';
import type { WithAriaHidden, WithAriaLabeling } from '../../types';

type WithAria<T> = WithAriaHidden<WithAriaLabeling<T>>;

type AccordionProps = WithAria<{
  id?: string;
  /**
   * If `true`, borders are added around each accordion item.
   */
  bordered?: boolean;
  /**
   * The content of the accordion, required.
   */
  children: React.ReactNode;
  /**
   * CSS class name for custom styling.
   */
  className?: string;
  /**
   * Adds spacing around items for better separation.
   */
  compact?: boolean;
  /**
   * Custom icons for accordion state indicators.
   */
  icon?: Icon;
  /**
   * Specifies the accordion's style kind.
   */
  kind?: RothkoKind;
  /**
   * If `true`, only one accordion item can be open at a time.
   */
  multiple?: boolean;
  /**
   * Inline styles for the accordion.
   */
  style?: React.CSSProperties;
  /**
   * If `true`, icons are _not_ shown next to items.
   */
  hideIcon?: boolean;
  /**
   * The list of selected panels by key.
   * @default []
   */
  selectedKeys?: string[];
  /**
   * Callback when a panel is opened or closed.
   */
  onPanelChange?: (isOpen: boolean, panelKey: string) => void;
}>;

const Accordion = ({
  id,
  'aria-describedby': ariaDescribedBy,
  'aria-details': ariaDetails,
  'aria-hidden': ariaHidden,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  bordered,
  children,
  className,
  compact,
  icon: iconOverride,
  kind,
  multiple,
  onPanelChange,
  selectedKeys = [],
  style,
  hideIcon,
}: AccordionProps) => {
  const [selectedPanels, setSelectedPanels] = useState(selectedKeys || []);

  const onClickPanel = useCallback(
    (panelKey: string) => {
      setSelectedPanels(selected => {
        const isOpen = selected.includes(panelKey);
        onPanelChange?.(!isOpen, panelKey);

        if (isOpen) {
          return selected.filter(key => key !== panelKey);
        }

        return multiple ? [...selected, panelKey] : [panelKey];
      });
    },
    [setSelectedPanels, multiple, onPanelChange]
  );

  return (
    <AccordionContext.Provider
      value={{
        bordered,
        iconOverride,
        kind,
        onClickPanel,
        selectedPanels,
        compact,
        hideIcon,
      }}
    >
      <AccordionGroupDiv
        id={id}
        role="tablist"
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        aria-describedby={ariaDescribedBy}
        aria-details={ariaDetails}
        aria-multiselectable={multiple}
        aria-hidden={ariaHidden}
        $spaced={!compact}
        style={style}
        className={className}
      >
        {children}
      </AccordionGroupDiv>
    </AccordionContext.Provider>
  );
};

const AccordionGroupDiv = styled.div<{ $spaced?: boolean }>`
  display: flex;
  flex-direction: column;

  ${({ $spaced }) =>
    $spaced &&
    css`
      gap: 0.75rem;
    `}
`;

export default Accordion;
