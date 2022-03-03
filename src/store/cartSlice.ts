import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import Cart from "src/model/Cart";

// Define a type for the slice state
interface CartState {
  items: Cart[];
  totalQuantity: number;
  totalAmount: number;
}

// Define the initial state using that type
const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
} as CartState;

export const cartSlice = createSlice({
  name: "cart",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    replaceCart: (state, action: PayloadAction<CartState>) => {
      state.items = action.payload.items;
      state.totalQuantity = action.payload.totalQuantity;
      state.totalAmount = action.payload.totalAmount;
    },

    resetCart: () => initialState,
    // Use the PayloadAction type to declare the contents of `action.payload`
    addItemToCart: (state, action: PayloadAction<Cart>) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.items.push(newItem);
      } else {
        existingItem.quantity += newItem.quantity;
        existingItem.totalPrice += newItem.totalPrice;
      }

      state.totalQuantity += newItem.quantity;
      state.totalAmount += newItem.totalPrice;
    },

    removeItemFromCart: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem!.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem!.quantity--;
        existingItem!.totalPrice -= existingItem!.price;
      }

      state.totalQuantity--;
      state.totalAmount -= existingItem!.price;
    },

    removeEntireItem: (state, action: PayloadAction<string>) => {
      const id = action.payload;

      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity -= existingItem!.quantity;
      state.totalAmount -= existingItem!.totalPrice;

      // ONLY FILTER IT OUT AFTER CALCULATING ALL THE AMOUNT
      state.items = state.items.filter((item) => item.id !== id);
    },
  },
});

export const cartActions = cartSlice.actions;

// export const selectCount = (state: RootState) => state.counter.value;

export default cartSlice.reducer;
