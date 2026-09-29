import { combineReducers } from "@reduxjs/toolkit";
import userReducer from '../store/slices/userSlice.js'
import productReducer from '../store/slices/apiPorduct.js'

const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer
});

export default rootReducer;
