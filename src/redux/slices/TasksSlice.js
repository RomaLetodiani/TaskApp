const { createSlice } = require('@reduxjs/toolkit');

const initialState = [
  { title: 'You Can Add, Delete', completed: false, id: 1 },
  { title: 'Edit, Mark Completed', completed: false, id: 2 },
  { title: 'And Save Your Tasks', completed: false, id: 3 },
  { title: 'To Local storage', completed: false, id: 4 },
];

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      return [
        { title: action.payload, completed: false, id: Math.random() * 100000 },
        ...state,
      ];
    },
    removeTask: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
    completeTask: (state, action) => {
      return state.map((task) =>
        task.id === action.payload.id
          ? { ...task, completed: !task.completed }
          : task
      );
    },
    editTask: (state, action) => {
      return state.map((task) => {
        return action.payload.id === task.id
          ? { ...task, title: action.payload.title }
          : task;
      });
    },
  },
});

export const { addTask, removeTask, completeTask, editTask } =
  tasksSlice.actions;
export default tasksSlice.reducer;
