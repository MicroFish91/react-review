import { combineReducers } from "@reduxjs/toolkit";
import contactsReducer from "./contacts/contactSlice";

export default combineReducers({
  contacts: contactsReducer,
});
