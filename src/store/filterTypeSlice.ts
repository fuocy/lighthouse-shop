import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Product from "src/model/Product";

export interface FilterTypeState {
  filteredProducts: Product[];
}

const initialState = {
  filteredProducts: [],
} as FilterTypeState;

export const filterTypeSlice = createSlice({
  name: "filterType",
  initialState,
  reducers: {
    replaceByFilteredProduct: (state, action: PayloadAction<Product[]>) => {
      state.filteredProducts = action.payload.map((product) => ({
        ...product,
        id: product._id.toString(),
      }));
    },
  },
});

export const filterTypeActions = filterTypeSlice.actions;

export default filterTypeSlice.reducer;
