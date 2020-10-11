import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counter-slice.js";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
