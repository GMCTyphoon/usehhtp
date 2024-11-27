import { createSlice } from "@reduxjs/toolkit";

export const generalSlice = createSlice({
  name: "generalSlice",
  initialState: { dataStore: [], count: 0 },
  reducers: {
    setData(state, action) {
      state.dataStore = !action.payload.length
        ? [...state.dataStore, action.payload]
        : action.payload;
    },

    increment: (state, action) => {
      state.count += action.payload;
    },
    decrement: (state, action) => {
      state.count -= action.payload;
    },
  },
});

export const { setData, increment, decrement, incrementByAmount } =
  generalSlice.actions;
export default generalSlice.reducer;
