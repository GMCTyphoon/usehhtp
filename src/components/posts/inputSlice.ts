import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import { Todo } from "./types";

// Define a type for the slice state
interface DataState {
  dataStore: Todo[];
  count: number;
}

// Define the initial state using that type
const initialState = { dataStore: [], count: 0 } as DataState;

export const generalSlice = createSlice({
  name: "generalSlice",
  initialState,
  reducers: {
    setData(state, action: PayloadAction<Todo | Todo[]>) {
      state.dataStore = !Array.isArray(action.payload)
        ? [...state.dataStore, action.payload]
        : action.payload;
    },

    increment: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
    decrement: (state, action: PayloadAction<number>) => {
      state.count -= action.payload;
    },
  },
});

export const { setData, increment, decrement } = generalSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectData = (state: RootState) => state.generalSlice.count;

export default generalSlice.reducer;
