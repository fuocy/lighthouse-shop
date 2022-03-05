import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Product from "src/model/Product";

export interface SortedState {
  sortedProduct: Product[];
}

const initialState = {
  sortedProduct: [],
} as SortedState;

export const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    handleSort: (state, action: PayloadAction<Product[]>) => {
      state.sortedProduct = action.payload;
    },
  },
});

export const sortActions = sortSlice.actions;

export default sortSlice.reducer;

// THIS IS USELESS. I WILL DELETE THIS FILE LATER
