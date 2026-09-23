import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "./slice/TodoSlice.js";

export const store = configureStore({
  reducer: {
    todo: TodoReducer,
  },
});
