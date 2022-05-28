import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import Title from './Title';

import { theme } from 'styles/theme';

describe('Title', () => {
  it('Should render with text', () => {
    const text = 'My first task';

    render(
      <ThemeProvider theme={theme}>
        <Title>{text}</Title>
      </ThemeProvider>,
    );

    expect(screen.getByText(text).textContent).toBe(text);
  });
});
