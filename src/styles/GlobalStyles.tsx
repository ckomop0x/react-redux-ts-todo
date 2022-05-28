import { createGlobalStyle } from 'styled-components';

import { ThemeInterface } from '../types';

export const GlobalStyles = createGlobalStyle`
  * {
    font-family: Roboto, sans-serif;
  }

  body,
  html { 
    padding: 0;
    margin: 0;
    color: ${({ theme }: { theme: ThemeInterface }) => theme.colors.textPrimary}; 
    min-height: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;
