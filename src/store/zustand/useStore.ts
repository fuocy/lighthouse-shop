import create from "zustand";
import createIndexTabSlice, { IndexTabSlice } from "./createIndexTabSlice";
import createShowModalSlice, { ShowModalSlice } from "./createShowModalSlice";
import createIsSignInSlice, { IsSignInSlice } from "./createIsSignInSlice";
import createAuthSlice, { AuthSlice } from "./createAuthSlice";
import createLoveCountSlice, { LoveCountSlice } from "./createLoveCountSlice";
import createNumFilteredPriceSlice, {
  NumFilteredPriceSlice,
} from "./createNumFilteredPriceSlice";
import createNumSlice, { NumSlice } from "./createNumSlice";

export type MyState = IndexTabSlice &
  ShowModalSlice &
  IsSignInSlice &
  AuthSlice &
  LoveCountSlice &
  NumFilteredPriceSlice &
  NumSlice;

const useStore = create<MyState>((set, get) => ({
  ...createIndexTabSlice(set, get),
  ...createShowModalSlice(set, get),
  ...createIsSignInSlice(set, get),
  ...createAuthSlice(set, get),
  ...createLoveCountSlice(set, get),
  ...createNumFilteredPriceSlice(set, get),
  ...createNumSlice(set, get),
}));

export default useStore;
