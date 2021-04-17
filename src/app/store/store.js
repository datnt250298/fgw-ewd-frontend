import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import contentReducer from "./content/contentSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
    content: contentReducer,
  },
});
