import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./Theme/themeSlice";
import filterSlice from "./Filter/eventSlice";
import contributorSlice from "./Filter/contributorSlice";
import globalSlice from "./global/globalSlice";

export const store = configureStore({
  reducer: {
    global: globalSlice,
    theme: themeReducer,
    event: filterSlice,
    contributor: contributorSlice,
  },
});