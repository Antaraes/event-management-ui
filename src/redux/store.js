import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./Theme/themeSlice";
import filterSlice from "./Filter/eventSlice";
import contributorSlice from "./Filter/contributorSlice";
import globalSlice from "./global/globalSlice";
import authSlice from "./auth/authSlice";

export const store = configureStore({
  reducer: {
    global: globalSlice,
    theme: themeReducer,
    event: filterSlice,
    auth: authSlice,
    contributor: contributorSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat([]),
});
