import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type AdviceGenerator = {
  id: number | "";
  advice: string;
};

const initialState: AdviceGenerator = { id: "", advice: "" };

const adviceGeneratorSlice = createSlice({
  name: "adviceGenerator",
  initialState,
  reducers: {
    getAdvice(state, action: PayloadAction<AdviceGenerator>) {
      (state.id = action.payload.id), (state.advice = action.payload.advice);
    },
  },
});

export const appReducer = adviceGeneratorSlice.reducer;
export const appActions = adviceGeneratorSlice.actions;
