import { GetState, SetState } from "zustand";
import { MyState } from "./useStore";

export interface NumSlice {
  num: number;
  setNum: (number: number) => void;
}

const createNumSlice = (set: SetState<MyState>, get: GetState<MyState>) => ({
  num: 0,
  setNum: (number: number) => set({ num: number }),
});

export default createNumSlice;
