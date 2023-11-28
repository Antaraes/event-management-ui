import { createSlice } from "@reduxjs/toolkit";

const inititalState = {
  isDrawer: false,
  isUserActive: false,
  eventData: null,
  ticketData: null,
  paymentType: null,
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
    setEventData: (state, action) => {
      state.eventData = action.payload;
    },
    setTicketData: (state, actions) => {
      state.ticketData = actions.payload;
    },
    setPaymentType: (state, actions) => {
      state.paymentType = actions.payload;
    }
  },
});

export const { setDrawer, setUserActive, setEventData, setTicketData, setPaymentType } = globalSlice.actions;
export default globalSlice.reducer;
