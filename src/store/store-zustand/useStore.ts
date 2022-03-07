import create from "zustand";

import createIndexTabSlice, { IndexTabSlice } from "./createIndexTabSlice";
import createShowModalSlice, { ShowModalSlice } from "./createShowModalSlice";
import createIsSignInSlice, { IsSignInSlice } from "./createIsSignInSlice";
import createAuthSlice, { AuthSlice } from "./createAuthSlice";

export type MyState = IndexTabSlice &
  ShowModalSlice &
  IsSignInSlice &
  AuthSlice;

const useStore = create<MyState>((set, get) => ({
  ...createIndexTabSlice(set, get),
  ...createShowModalSlice(set, get),
  ...createIsSignInSlice(set, get),
  ...createAuthSlice(set, get),
}));

export default useStore;
