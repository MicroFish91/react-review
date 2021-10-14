import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./User/userSlice";

export default rootReducer = combineReducers({
  user: userReducer,
});
