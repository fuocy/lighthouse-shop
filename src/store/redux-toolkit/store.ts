import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import imageReducer from "./imageSlice";
import viewedReducer from "./viewedSlice";
import { loadState } from "@/components/common/browser-storage";
import filterBrandReducer from "./filterBrand";
import paginationReducer from "./paginationSlice";
import filterPriceReducer from "./filterPrice";
import filterStatusReducer from "./filterStatus";
import filterSearchReducer from "./filterSearch";
const store = configureStore({
  reducer: {
    cart: cartReducer,
    image: imageReducer,
    filterPrice: filterPriceReducer,
    filterStatus: filterStatusReducer,
    filterSearch: filterSearchReducer,
    viewed: viewedReducer,
    filterBrand: filterBrandReducer,
    pagination: paginationReducer,
  },
  preloadedState: loadState(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
