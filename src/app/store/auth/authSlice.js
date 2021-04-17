import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
  },

  reducers: {
    loginSuccess: (state) => {
      state.isLoggedIn = true;
    },
  },
});

export const { loginSuccess } = authSlice.actions;

console.log(authSlice);

export default authSlice.reducer;
