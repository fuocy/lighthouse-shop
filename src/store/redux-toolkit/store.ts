import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import imageReducer from "./imageSlice";
import filterTypeReducer from "./filterTypeSlice";
import viewedReducer from "./viewedSlice";
import { loadState } from "@/components/common/browser-storage";
const store = configureStore({
  reducer: {
    cart: cartReducer,
    image: imageReducer,
    filterType: filterTypeReducer,
    viewed: viewedReducer,
  },
  preloadedState: loadState(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
