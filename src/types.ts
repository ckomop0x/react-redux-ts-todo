export interface TaskInterface {
  id: string;
  title: string;
  isCompleted: boolean;
}

export type VariantInterface = 'success' | 'alert' | 'disabled' | undefined;

import { theme } from 'styles/theme';

export type ThemeInterface = typeof theme;

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  type DefaultTheme = ThemeInterface;
}
