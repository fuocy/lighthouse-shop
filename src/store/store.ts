import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import imageReducer from "./imageSlice";
import sortedReducer from "./sortedSlice";
const store = configureStore({
  reducer: {
    cart: cartReducer,
    image: imageReducer,
    sorted: sortedReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
