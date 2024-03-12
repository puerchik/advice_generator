import { appReducer } from "./adviceGeneratorSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: { appReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
