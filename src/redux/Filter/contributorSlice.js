import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isBlueMark: false,
};

export const contributorSlice = createSlice({
  name: "contributor",
  initialState,
  reducers: {
    setBlueMark: (state) => {
      state.isBlueMark = !state.isBlueMark;
    },
  },
});

export const { setBlueMark } = contributorSlice.actions;
export default contributorSlice.reducer;
