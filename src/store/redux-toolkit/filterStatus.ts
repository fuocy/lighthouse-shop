import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface FilterStatusState {
  selectedStatus: string;
  numSaleOff: number;
  numLimited: number;
  numLoved: number;
}

const initialState = {
  selectedStatus: "",
  numSaleOff: 0,
  numLimited: 0,
  numLoved: 0,
} as FilterStatusState;

export const filterStatusSlice = createSlice({
  name: "filterStatus",
  initialState,
  reducers: {
    setFilterStatus: (state, action: PayloadAction<string>) => {
      state.selectedStatus = action.payload;
    },

    setNumSaleOff: (state, action: PayloadAction<number>) => {
      state.numSaleOff = action.payload;
    },
    setNumLimited: (state, action: PayloadAction<number>) => {
      state.numLimited = action.payload;
    },
    setNumLoved: (state, action: PayloadAction<number>) => {
      state.numLoved = action.payload;
    },
  },
});

export const filterStatusActions = filterStatusSlice.actions;

export default filterStatusSlice.reducer;
