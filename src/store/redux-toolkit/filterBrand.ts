import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FilterBrandState {
  selectedBrands: boolean[];
}

const initialState = {
  selectedBrands: [false, false, false],
} as FilterBrandState;

export const filterBrandSlice = createSlice({
  name: "filterBrand",
  initialState,
  reducers: {
    setSelectedBrands: (state, action: PayloadAction<boolean[]>) => {
      state.selectedBrands = action.payload;
    },
  },
});

export const filterBrandActions = filterBrandSlice.actions;

export default filterBrandSlice.reducer;
