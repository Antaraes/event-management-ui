import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./Theme/themeSlice";
export const store = configureStore({
  reducer: { theme: themeReducer },
});
