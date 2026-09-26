import { combineReducers } from "@reduxjs/toolkit";
import userReducer from '../feauter/users.js'


const rootReducer = combineReducers({
    users: userReducer,
});

export default rootReducer;
