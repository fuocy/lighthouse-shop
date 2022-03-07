import { GetState, SetState } from "zustand";
import { MyState } from "./useStore";

export interface IsSignInSlice {
  isSignIn: boolean;
  setIsSignIn: (isSignIn: boolean) => void;
}

const createIsSignInSlice = (
  set: SetState<MyState>,
  get: GetState<MyState>
) => ({
  isSignIn: true,
  setIsSignIn: (isSignIn: boolean) => set({ isSignIn: isSignIn }),
});

export default createIsSignInSlice;
