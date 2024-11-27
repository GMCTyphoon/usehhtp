import { configureStore } from "@reduxjs/toolkit";
import generalReducer from "../components/posts/inputSlice";

export default configureStore({
  reducer: { generalSlice: generalReducer },
});
