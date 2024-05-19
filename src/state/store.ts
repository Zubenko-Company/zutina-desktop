import { configureStore } from "@reduxjs/toolkit";
import userReduser from "./user/userSlice";
import windowReducer from "./window/windowSlice";

export const store = configureStore({
  reducer: {
    user: userReduser,
    window: windowReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
