import { combineReducers } from "@reduxjs/toolkit";
import  todoReducer  from "../App/slice/TodoSlice";


const rootReducer = combineReducers({
  todo: todoReducer,
});

export default rootReducer;
