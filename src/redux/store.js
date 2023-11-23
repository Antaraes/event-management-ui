import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./Theme/themeSlice";
import globalReducer from './global/globalSlice'
export const store = configureStore({
  reducer: { theme: themeReducer,global:globalReducer },
});
