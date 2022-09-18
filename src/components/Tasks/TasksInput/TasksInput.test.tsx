import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import store from '../../../store';

import TasksInput from 'components/Tasks/TasksInput/TasksInput';
import { theme } from 'styles/theme';

describe('TasksInput', () => {
  it("Should not add an item if we didn't add a title", () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <TasksInput />
        </ThemeProvider>
      </Provider>,
    );

    const addButton = screen.getByText('Add');

    expect(addButton).toBeTruthy();
    expect(addButton).toHaveAttribute('disabled');
  });
});
