import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "../store/slices/userSlice.js";
import productReducer from "../store/slices/apiPorduct.js";
import menProductReducer from "../store/slices/menProductSlice.js";
import womenProductReducer from "../store/slices/womenProductSlice.js";
import wishLishReducer from "../store/slices/wishListSlice.js";
import cartReducer from "../store/slices/cartSlice.js"

const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
  menProduct: menProductReducer,
  womenProduct: womenProductReducer,
  wishList: wishLishReducer,
  cart: cartReducer,
});

export default rootReducer;
