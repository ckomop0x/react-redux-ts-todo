import { css } from 'styled-components';

import { ThemeInterface, VariantInterface } from '../../types';

import { getColor } from 'utils/styles/getColor';

export const getBackgroundColor = (variant: VariantInterface, theme: ThemeInterface) => {
  const color = getColor(variant);
  return css`
    background-color: ${theme.colors[color]};
    &:hover {
      background-color: ${theme.colors[`${color}Accent`]};
    }
  `;
};
