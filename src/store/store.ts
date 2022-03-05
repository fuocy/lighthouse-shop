import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import imageReducer from "./imageSlice";
import filterTypeReducer from "./filterTypeSlice";
const store = configureStore({
  reducer: {
    cart: cartReducer,
    image: imageReducer,
    filterType: filterTypeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
