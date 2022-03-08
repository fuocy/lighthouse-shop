import { GetState, SetState } from "zustand";
import { MyState } from "./useStore";

export interface LoveCountSlice {
  lovedProductIds: string[];
  setLoveCount: (productId: string) => void;
  setLovedProductIds: (productId: string) => void;
}

const createLoveCountSlice = (
  set: SetState<MyState>,
  get: GetState<MyState>
) => ({
  lovedProductIds: [],
  setLoveCount: (productId: string) =>
    set((state) => {
      let updatedLovedProductIds: string[];

      if (!state.lovedProductIds.includes(productId)) {
        updatedLovedProductIds = state.lovedProductIds.concat(productId);
      } else {
        updatedLovedProductIds = state.lovedProductIds.filter(
          (lovedProductId) => lovedProductId !== productId
        );
      }

      localStorage.setItem("love", JSON.stringify(updatedLovedProductIds));

      return {
        lovedProductIds: updatedLovedProductIds,
      };
    }),
  setLovedProductIds: (productIds: string[]) =>
    set({
      lovedProductIds: productIds,
    }),
});

export default createLoveCountSlice;
