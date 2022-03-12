// Don't really need, can use internal state of react tab
import { GetState, SetState } from "zustand";
import { MyState } from "./useStore";

export interface IsMobileSlice {
  isMobile: boolean;
  setIsMobile: (isMobile: boolean) => void;
}

const createIsMobileSlice = (
  set: SetState<MyState>,
  get: GetState<MyState>
) => ({
  isMobile: false,
  setIsMobile: (isMobile: boolean) => {
    set({ isMobile: isMobile });
  },
});

export default createIsMobileSlice;
