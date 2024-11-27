import { createSlice } from "@reduxjs/toolkit";

export const inputSlice = createSlice({
  name: "userInput",
  //   initialState: { title: "", id: new Date().toISOString() },
  initialState: {},
  reducers: {
    setTitle(state, action) {
      return { ...state, ...action.payload };
    },
  },
});

export const { setTitle } = inputSlice.actions;

export default inputSlice.reducer;
