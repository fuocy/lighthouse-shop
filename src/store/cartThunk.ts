import axios from "axios";
import Cart from "src/model/Cart";
import { AppDispatch } from "./store";
import { cartActions, CartState } from "./cartSlice";
export default function sendCartData(cart: CartState) {
  return async (dispatch: AppDispatch) => {
    try {
      const { data } = await axios.put("/api/send-cart", {
        items: cart.items,
        totalQuantity: cart.totalQuantity,
        totalAmount: cart.totalAmount,
      });
    } catch (error: any) {
      console.error(`${error.message} 😢😭`);
    }
  };
}

export function fetchCartData() {
  return async (dispatch: AppDispatch) => {
    try {
      const { data } = await axios.get("/api/fetch-cart");

      dispatch(
        cartActions.replaceCart({
          items: data.convertedcartFetched.items || [],
          totalAmount: data.convertedcartFetched.totalAmount,
          totalQuantity: data.convertedcartFetched.totalQuantity,
        })
      );


    } catch (error: any) {
      console.error(`${error.message} 😢😭`);
    }
  };
}
