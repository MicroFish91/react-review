import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  phoneBook: [],
};

const contactSlice = createSlice({
  name: "contacts",
  initialState: INITIAL_STATE,
  reducers: {
    addContact: (state, { payload }) => {
      const existingUser = state.phoneBook.findIndex(
        (contact) => contact.phoneNumber === payload.phoneNumber
      );
      if (existingUser === -1) {
        state.phoneBook.push(payload);
      }
    },
  },
});

export const { addContact: addContactAction } = contactSlice.actions;

export default contactSlice.reducer;
