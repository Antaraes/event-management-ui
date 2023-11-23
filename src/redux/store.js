import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./Theme/themeSlice";
import filterSlice from "./Filter/eventSlice";
import contributorSlice from "./Filter/contributorSlice";
export const store = configureStore({
  reducer: {
    theme: themeReducer,
    event: filterSlice,
    contributor: contributorSlice
  },
});
