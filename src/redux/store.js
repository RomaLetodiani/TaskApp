import { configureStore } from '@reduxjs/toolkit';
import TasksSlice from './slices/TasksSlice';
import { localStorageMiddleware } from './localStorageMiddleware';

// Load state from localStorage
const persistedState = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState'))
  : {};

export const store = configureStore({
  reducer: {
    tasks: TasksSlice,
  },
  preloadedState: persistedState, // Initialize store with persisted state
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});
