import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ViewedState {
  viewedProductIds: string[];
}

const initialState = {
  viewedProductIds: [],
} as ViewedState;

export const viewedSlice = createSlice({
  name: "viewed",
  initialState,
  reducers: {
    markAsViewed: (state, action: PayloadAction<string>) => {
      state.viewedProductIds.unshift(action.payload);
      state.viewedProductIds = Array.from(new Set(state.viewedProductIds));
      state.viewedProductIds = state.viewedProductIds.slice(0, 5);
    },

    // resetCurrentViewed: (state) => {
    //   state.currentViewed = "";
    // },
  },
});

export const viewedActions = viewedSlice.actions;

export default viewedSlice.reducer;
