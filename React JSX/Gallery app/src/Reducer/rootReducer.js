import { combineReducers } from "@reduxjs/toolkit";
import galleryReducer from "../store/slice/gallerySlice";

const rootReducer = combineReducers({
  gallery: galleryReducer,
});

export default rootReducer;
