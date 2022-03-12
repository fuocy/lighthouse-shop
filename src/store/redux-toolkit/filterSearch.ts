import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface FilterSearchState {
  query: string;
  searchParams: string[];
}

const initialState = {
  query: "",
  searchParams: ["name", "brand", "type"],
} as FilterSearchState;

export const filterSearchSlice = createSlice({
  name: "filterSearch",
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },

    resetQuery: (state) => {
      state.query = "";
    },
  },
});

export const filterSearchActions = filterSearchSlice.actions;

export default filterSearchSlice.reducer;
