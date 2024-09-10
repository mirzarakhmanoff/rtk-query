import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user-slice";
import { api } from "../context/api/index";

export const store = configureStore({
  reducer: {
    user: userSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
