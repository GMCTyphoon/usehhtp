import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import inputReducer from "../components/posts/inputSlice";

export default configureStore({
  reducer: { counter: counterReducer, userInput: inputReducer },
});
