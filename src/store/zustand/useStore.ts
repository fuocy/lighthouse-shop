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
import createIsMobileSlice, { IsMobileSlice } from "./createIsMobileSlice";
// import createRecentlyViewedSlice, {
//   RecentlyViewedSlice,
// } from "./createRecentlyViewedSlice";

export type MyState = IndexTabSlice &
  ShowModalSlice &
  IsSignInSlice &
  AuthSlice &
  LoveCountSlice &
  NumFilteredPriceSlice &
  NumSlice &
  IsMobileSlice;
// &
// RecentlyViewedSlice;

const useStore = create<MyState>((set, get) => ({
  ...createIndexTabSlice(set, get),
  ...createShowModalSlice(set, get),
  ...createIsSignInSlice(set, get),
  ...createAuthSlice(set, get),
  ...createLoveCountSlice(set, get),
  ...createNumFilteredPriceSlice(set, get),
  ...createNumSlice(set, get),
  ...createIsMobileSlice(set, get),
  // ...createRecentlyViewedSlice(set, get),
}));

export default useStore;
