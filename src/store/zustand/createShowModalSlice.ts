import { GetState, SetState } from "zustand";
import { MyState } from "./useStore";

export interface ShowModalSlice {
  isShowModal: boolean;
  setShowModal: () => void;
}

const createShowModalSlice = (
  set: SetState<MyState>,
  get: GetState<MyState>
) => ({
  isShowModal: false,
  setShowModal: () =>
    set((state: any) => ({ isShowModal: !state.isShowModal })),
});

export default createShowModalSlice;
