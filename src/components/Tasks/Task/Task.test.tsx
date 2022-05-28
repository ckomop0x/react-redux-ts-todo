import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import store from '../../../store';

import Task from './Task';

import { theme } from 'styles/theme';

describe('Task', () => {
  const taskProps = { id: 'task-123', title: 'Default Task', isCompleted: false };

  beforeEach(() => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Task title={taskProps.title} id={taskProps.id} isCompleted={taskProps.isCompleted} />
        </ThemeProvider>
      </Provider>,
    );
  });

  it('Should render task with default controls', () => {
    expect(screen.getByText(taskProps.title)).toBeTruthy();
    expect(screen.getByText('Edit')).toBeTruthy();
    expect(screen.getByText('Complete')).toBeTruthy();
    expect(screen.getByText('Delete')).toBeTruthy();
  });
  it('Should toggle task edit mode', () => {
    fireEvent.click(screen.getByText('Edit'));

    expect(screen.queryByText('Edit')).toBeNull();
    expect(screen.queryByText('Save')).toBeTruthy();
    expect(screen.queryByText('Cancel')).toBeTruthy();

    fireEvent.click(screen.getByText('Cancel'));
    expect(screen.getByText('Edit')).toBeTruthy();
    expect(screen.getByText('Complete')).toBeTruthy();
    expect(screen.getByText('Delete')).toBeTruthy();
  });
});
