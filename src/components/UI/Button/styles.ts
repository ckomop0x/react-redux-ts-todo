import styled from 'styled-components';

import { VariantInterface } from '../../../types';

import { getBackgroundColor } from 'utils/styles/getBackgroundColor';

export const ButtonWrapper = styled.button<{
  variant?: VariantInterface;
  disabled?: boolean;
}>`
  border: 0;
  padding: 8px;
  margin-left: 8px;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.background};
  background-color: ${({ theme }) => theme.colors.primary};
  transition: 0.3s background-color ease;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryAccent};
  }

  ${({ variant, theme }) => variant && getBackgroundColor(variant, theme)}}
  ${({ disabled, theme }) => disabled && getBackgroundColor('disabled', theme)}}
`;
