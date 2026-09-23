import { createSlice } from "@reduxjs/toolkit";

const initialState = { todos: [] };

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodos: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodos: (state, action) => {
      let findTodo = state.todos.find((todo) => todo.id === action.payload.id);
      if(findTodo){
        findTodo.title = action.payload.title
      }
    },
  },
});

export const { addTodos, deleteTodo,updateTodos } = todoSlice.actions;

export default todoSlice.reducer;
