import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
  },

  reducers: {
    LOGIN_SUCCESS: (state) => {
      state.isLoggedIn = true;
    },
  },
});

export const { LOGIN_SUCCESS } = authSlice.actions;

console.log(authSlice);

export default authSlice.reducer;
