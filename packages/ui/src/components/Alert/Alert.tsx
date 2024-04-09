import React from 'react';
import styled from 'styled-components';

import { isString } from '@rothko-ui/utils';

import { semanticTextChildrenStyle } from '../../library/Styles';
import type { KindProps, RothkoKind } from '../../theme/types';
import Typography from '../Typography/Typography';

type AlertProps = {
  /** ARIA label for the alert, enhancing accessibility. */
  'aria-label'?: string;
  /** The content of the alert. */
  children: React.ReactNode;
  /** CSS class name for custom styling. */
  className?: string;
  /** Specifies the alert's style kind. Default is 'danger'. */
  kind?: RothkoKind;
  /** Inline styles for the alert. */
  style?: React.CSSProperties;
};

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ 'aria-label': ariaLabel, children, kind = 'danger', className, style }, ref) => {
    return (
      <AlertContainerDiv
        role="alert"
        aria-label={ariaLabel}
        className={className}
        kind={kind}
        ref={ref}
        style={style}
      >
        {isString(children) ? <Typography.body>{children}</Typography.body> : children}
      </AlertContainerDiv>
    );
  }
);

Alert.displayName = 'Alert';

const AlertContainerDiv = styled.div<Required<KindProps>>`
  ${semanticTextChildrenStyle}
  background-color: ${({ kind }) => `var(--rothko-${kind}-500)`};
  padding: 1rem 1.25rem;
  font-size: 1rem;
`;

export default Alert;
