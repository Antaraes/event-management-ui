import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: null,
};

export const authSlice = createSlice({
  initialState: initialState,
  name: "auth",
  reducers: {
    logout: () => initialState,
    setUser: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
  },
});

export const { logout, setUser } = authSlice.actions;

export default authSlice.reducer;
