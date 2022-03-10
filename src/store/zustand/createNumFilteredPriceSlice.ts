import { GetState, SetState } from "zustand";
import { MyState } from "./useStore";

export interface NumFilteredPriceSlice {
  numFilteredPrice: number | null;
  setNumFilteredPrice: (numPrice: number) => void;
}

const createNumFilteredPriceSlice = (
  set: SetState<MyState>,
  get: GetState<MyState>
) => ({
  numFilteredPrice: null,
  setNumFilteredPrice: (numPrice: number) => {
    set({ numFilteredPrice: numPrice });
  },
});

export default createNumFilteredPriceSlice;
