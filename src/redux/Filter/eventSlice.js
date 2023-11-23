import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  eventFrom: "",
  isTrending: false,
  isUpcoming: false,
};

export const fitlerSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    setTrending: (state) => {
      state.isTrending = !state.isTrending;
    },
    setUpcoming: (state) => {
      state.isUpcoming = !state.isUpcoming;
    },
    setEventFrom: (state, action) => {
      state.eventFrom = action.payload === "remove" ? "" : action.payload || "";
    },
  },
});

export const { setEventFrom, setTrending, setUpcoming } = fitlerSlice.actions;
export default fitlerSlice.reducer;
