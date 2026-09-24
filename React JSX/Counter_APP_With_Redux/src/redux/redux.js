import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "../app/slice/counterSlice";

const rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer;
