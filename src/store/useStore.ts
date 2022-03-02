import create from "zustand";
import createCategorySlice, { CategorySlice } from "./createCategorySlice";

export type MyState = CategorySlice;

const useStore = create<MyState>((set, get) => ({
  ...createCategorySlice(set, get),
}));

export default useStore;
