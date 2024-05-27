import { TasksState } from "@/app/_utils/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: TasksState = {
  tasksSlice: [],
};

const tasksSlice = createSlice({
  name: "tasksSlice",
  initialState,
  reducers: {
    addTask: (state, action) => {
      //state is referring to initialState, whatever is in there you have access to

      state.tasksSlice.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.tasksSlice = state.tasksSlice.filter(
        (task) => task.id !== action.payload
      );
    },
    toggleTaskDone: (state, action) => {
      const taskToToggle = state.tasksSlice.find(
        (task) => task.id === action.payload
      );
      if (taskToToggle) {
        taskToToggle.done = !taskToToggle.done;
      }
    },
    updateTaskTitle: (state, action) => {
      const { id, title } = action.payload;
      const taskToUpdate = state.tasksSlice.find((task) => task.id === id);
      if (taskToUpdate) {
        taskToUpdate.title = title;
      }
    },
    updateTaskDescription: (state, action) => {
      const { id, description } = action.payload;
      const taskToUpdate = state.tasksSlice.find((task) => task.id === id);
      if (taskToUpdate) {
        taskToUpdate.description = description;
      }
    },
    updateTaskDueDate: (state, action) => {
      const { id, dueDate } = action.payload;
      const taskToUpdate = state.tasksSlice.find((task) => task.id === id);
      if (taskToUpdate) {
        taskToUpdate.dueDate = dueDate;
      }
    },
    toggleTaskUrgency: (state, action) => {
      const taskToToggle = state.tasksSlice.find(
        (task) => task.id === action.payload
      );
      if (taskToToggle) {
        taskToToggle.urgency = !taskToToggle.urgency;
      }
    },
    updateTaskTags: (state, action) => {
      const { id, tags } = action.payload;
      const taskToUpdate = state.tasksSlice.find((task) => task.id === id);
      if (taskToUpdate) {
        taskToUpdate.tags = tags;
      }
    },
  },
});

export const {
  addTask,
  deleteTask,
  toggleTaskDone,
  updateTaskTitle,
  updateTaskDescription,
  updateTaskDueDate,
  updateTaskTags,
  toggleTaskUrgency,
} = tasksSlice.actions;
export default tasksSlice.reducer;
