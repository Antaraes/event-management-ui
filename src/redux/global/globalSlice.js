import { createSlice } from "@reduxjs/toolkit";

const inititalState = {
  isDrawer: false,
  isUserActive: false,
};
export const globalSlice = createSlice({
  name: "isDrawer",
  initialState: inititalState,
  reducers: {
    setDrawer: (state) => {
      state.isDrawer = !state.isDrawer;
    },
    setUserActive: (state, actions) => {
      state.isUserActive = actions.payload;
    },
  },
});

export const { setDrawer, setUserActive } = globalSlice.actions;
export default globalSlice.reducer;
