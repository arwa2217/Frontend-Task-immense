import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "../slice/UserInfoSlice";

export const rootReducer = combineReducers({
userDetails: userReducer,
});