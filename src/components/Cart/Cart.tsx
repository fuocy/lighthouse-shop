import CartInfo from "./CartInfo";
import CartSummary from "./CartSummary";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { Zoom } from "react-toastify";

export default function Cart() {
  return (
    <div className="layout-container pb-20 sm:px-0">
      {/* <CurrentPath url1="Cart" /> */}
      {/* <span className="text-sm font-thin text-gray-500 max-w-3xl mt-2 block">
        {`*Your cart is already stored in a database so you can try refreshing the
        page (press F5) and the cart is still here :)`}
      </span> */}
      <div className="grid grid-cols-cart items-start sm:grid-cols-1">
        <CartInfo />
        <CartSummary />
      </div>
    </div>
  );
}
