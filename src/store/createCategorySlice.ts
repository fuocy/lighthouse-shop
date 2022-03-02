import { BlobOptions } from "buffer";
import { GetState, SetState } from "zustand";
import { MyState } from "./useStore";
import Product from "src/model/Product";

export interface CategorySlice {
  men: Product[];
  women: Product[];
  children: Product[];
  shoes: Product[];
  accessory: Product[];

  initialize: (products: Product[], type: any) => void;
}
const createCategorySlice = (
  set: SetState<MyState>,
  get: GetState<MyState>
) => ({
  men: [],
  women: [],
  children: [],
  shoes: [],
  accessory: [],

  initialize: (products: Product[], type: any) => {
    if (type === "men") {
      set({ men: products });
    }

    if (type === "women") {
      set({ women: products });
    }

    if (type === "children") {
      set({ children: products });
    }

    if (type === "shoes") {
      set({ shoes: products });
    }

    if (type === "accessory") {
      set({ accessory: products });
    }
  },
});

export default createCategorySlice;
