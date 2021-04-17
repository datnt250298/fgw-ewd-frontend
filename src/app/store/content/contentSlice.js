import { createSlice } from "@reduxjs/toolkit";

export const contentSlice = createSlice({
  name: "content",
  initialState: {
    pageState: "",
  },

  reducers: {
    navigateTo: (state, action) => {
      state.pageState = action.payload;
    },
  },
});

export const { navigateTo } = contentSlice.actions;

export default contentSlice.reducer;
