import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit';

import { TaskInterface } from '../types';

export interface State {
  tasks: TaskInterface[];
}

const initialState: State = { tasks: [] };
export const STORE_NAME = 'tasks';

export const tasksSlice = createSlice({
  name: STORE_NAME,
  initialState,
  reducers: {
    addTask(state: State, action: PayloadAction<TaskInterface>) {
      state.tasks = [...state.tasks, action.payload];
    },

    updateTask(state: State, action: PayloadAction<TaskInterface>) {
      const currentTask = state.tasks.find(task => task.id === action.payload.id);

      if (!currentTask) return;

      const currentTaskIndex = currentTask && state.tasks.indexOf(currentTask);

      state.tasks = [
        ...state.tasks.slice(0, currentTaskIndex),
        action.payload,
        ...state.tasks.slice(currentTaskIndex + 1, state.tasks.length),
      ];
    },

    deleteTask(state: State, action: PayloadAction<{ id: string }>) {
      state.tasks = state.tasks.filter(task => task.id !== action.payload.id);
    },
  },
});

const store = configureStore({
  reducer: tasksSlice.reducer,
});

export const tasksActions = tasksSlice.actions;
export default store;
