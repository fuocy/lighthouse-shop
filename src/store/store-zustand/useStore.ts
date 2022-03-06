import create from "zustand";

import createIndexTabSlice, { IndexTabSlice } from "./createIndexTabSlice";

export type MyState = IndexTabSlice;

const useStore = create<MyState>((set, get) => ({
  ...createIndexTabSlice(set, get),
}));

export default useStore;
