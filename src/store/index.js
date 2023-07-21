import { configureStore } from "@reduxjs/toolkit";
import posts from "./slices/postsSlice";

export const store = configureStore({
  reducer: {
    posts,
  },
});
