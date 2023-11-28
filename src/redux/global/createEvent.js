import { createSlice } from "@reduxjs/toolkit";

const inititalState = {
  eventData: null,
  ticketData: null,
};
export const createEvent = createSlice({
  name: "eventData",
  initialState: inititalState,
  reducers: {
    setEventData: (state, action) => {
      state.eventData = action.payload;
    },
    setTicketData: (state, actions) => {
      state.ticketData = actions.payload;
    }
  },
});

export const { setEventData, setTicketData } = createEvent.actions;
export default createEvent.reducer;
