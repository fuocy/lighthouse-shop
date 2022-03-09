// import { GetState, SetState } from "zustand";
// import { MyState } from "./useStore";

// export interface RecentlyViewedSlice {
//   viewedProductIds: string[];
//   setRecentlyViewed: (productId: string) => void;
//   setViewedProductIds: (productIds: string[]) => void;
// }

// const createRecentlyViewedSlice = (
//   set: SetState<MyState>,
//   get: GetState<MyState>
// ) => ({
//   viewedProductIds: [],
//   setRecentlyViewed: (productId: string) =>
//     set((state) => {
//       // state.viewedProductIds.concat(productId);
//       const copyViewedProductIds = [productId, ...state.viewedProductIds];
//       // copyViewedProductIds.unshift(productId);

//       if (copyViewedProductIds.length > 0)
//         localStorage.setItem("viewed", JSON.stringify(copyViewedProductIds));

//       return {
//         viewedProductIds: copyViewedProductIds,
//       };
//     }),
//   setViewedProductIds: (productIds: string[]) =>
//     set({
//       viewedProductIds: productIds,
//     }),
// });

// export default createRecentlyViewedSlice;
