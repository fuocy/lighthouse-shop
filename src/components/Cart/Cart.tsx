import CartInfo from "./CartInfo";
import CartSummary from "./CartSummary";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { Zoom } from "react-toastify";

export default function Cart() {
  useEffect(() => {
    setTimeout(() => {
      toast.info(
        "Just wanted to mention that reloading the page won't lose your cart state :)",
        {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
    }, 3000);
  }, []);

  return (
    <div className="layout-container pb-20">
      <ToastContainer transition={Zoom} />
      {/* <CurrentPath url1="Cart" /> */}
      {/* <span className="text-sm font-thin text-gray-500 max-w-3xl mt-2 block">
        {`*Your cart is already stored in a database so you can try refreshing the
        page (press F5) and the cart is still here :)`}
      </span> */}
      <div className="grid grid-cols-cart items-start">
        <CartInfo />
        <CartSummary />
      </div>
    </div>
  );
}
