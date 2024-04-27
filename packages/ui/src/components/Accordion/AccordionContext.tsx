import { createContext } from 'react';

import type { RothkoKind } from '../../theme';
import type { Icon } from './types';

type AccordionContextType = {
  /**
   * Determines whether the Accordion should have a border.
   */
  bordered?: boolean;
  /**
   * Determines whether the Accordion should have a compact layout.
   */
  compact?: boolean;
  /**
   * Overrides the default icon for the Accordion.
   */
  iconOverride?: Icon;
  /**
   * Determines the kind of Accordion.
   */
  kind?: RothkoKind;
  /**
   * Callback function triggered when a panel is clicked.
   * @param id - The ID of the clicked panel.
   */
  onClickPanel: (id: string) => void;
  /**
   * IDs of the selected panels.
   */
  selectedPanels: string[];
  /**
   * Determines whether the Accordion should hide the icon.
   */
  hideIcon?: boolean;
};

const AccordionContext = createContext<AccordionContextType | null>(null);

export default AccordionContext;
