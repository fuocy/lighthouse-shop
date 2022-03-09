// Don't really need, can use internal state of react tab
import { GetState, SetState } from "zustand";
import { MyState } from "./useStore";

export interface IndexTabSlice {
  indexTab: number;
  setIndexTab: (newIndex: number) => void;
}

const createIndexTabSlice = (
  set: SetState<MyState>,
  get: GetState<MyState>
) => ({
  indexTab: 1,
  setIndexTab: (newIndex: number) => {
    set({ indexTab: newIndex });
  },
});

export default createIndexTabSlice;
