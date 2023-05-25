import { CloseOutline } from '@rothko-ui/icons';
import React from 'react';
import styled from 'styled-components';
import { phantomButtonStyle } from '../../Library/PhantomButton';
import type { KindProps } from '../../Theme/types';
import { Typography } from '../Typography';

type TagAppearance = 'filled' | 'outline';

type TagProps = KindProps & {
  appearance?: TagAppearance;
  children?: React.ReactNode;
  onClose?: () => void;
};

const Tag = ({ appearance = 'filled', children, kind, onClose }: TagProps) => {
  const iconColor =
    appearance === 'outline' ? `var(--rothko-${kind}-500, #000)` : `var(--rothko-color, #FFF)`;

  return (
    <TagContainerDiv appearance={appearance} kind={kind}>
      {typeof children === 'string' ? (
        <Typography.inlineBody style={{ margin: 0 }}>{children}</Typography.inlineBody>
      ) : (
        <div>{children}</div>
      )}
      {onClose && (
        <TagCloseButton>
          <CloseOutline onClick={onClose} fill={iconColor} width={16} height={16} />
        </TagCloseButton>
      )}
    </TagContainerDiv>
  );
};

type ContainerProps = KindProps & {
  appearance: TagAppearance;
};

const TagContainerDiv = styled.div<ContainerProps>`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: fit-content;
  min-width: 4rem;
  height: max-content;
  padding: 0.125rem 0.5rem;
  justify-content: center;
  text-align: center;

  background-color: ${({ kind, appearance }) => {
    if (kind) {
      return appearance === 'filled' ? `var(--rothko-${kind}-500, #000)` : 'transparent';
    }
    return appearance === 'filled' ? `var(--rothko-background, #FFF)` : 'transparent';
  }};
  color: ${({ kind, appearance }) => {
    if (kind) {
      return appearance === 'filled'
        ? `var(--rothko-color, #000)`
        : `var(--rothko-${kind}-500, #000)`;
    }
    return `var(--rothko-color, #000)`;
  }};

  border: 1px solid
    ${({ kind }) => (kind ? `var(--rothko-${kind}-500, #000)` : `var(--rothko-color, #000)`)};
  border-radius: 50vh;
`;

const TagCloseButton = styled.button`
  ${phantomButtonStyle}
  margin-left: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Tag;
