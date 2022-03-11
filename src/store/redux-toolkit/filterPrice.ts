import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface FilterPriceState {
  minPrice: number;
  maxPrice: number;
}

const initialState = {
  minPrice: 0,
  maxPrice: 4000,
} as FilterPriceState;

export const filterPriceSlice = createSlice({
  name: "filterPrice",
  initialState,
  reducers: {
    setRange: (state, action: PayloadAction<{ min: number; max: number }>) => {
      state.minPrice = action.payload.min;
      state.maxPrice = action.payload.max;
    },
  },
});

export const filterPriceActions = filterPriceSlice.actions;

export default filterPriceSlice.reducer;
