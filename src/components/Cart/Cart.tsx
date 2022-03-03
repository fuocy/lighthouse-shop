import CurrentPath from "@/components/common/CurrentPath";
import CartInfo from "./CartInfo";

import CartSummary from "./CartSummary";

export default function Cart() {
  return (
    <div className="layout-container pb-20">
      {/* <CurrentPath url1="Cart" /> */}
      <span className="text-sm font-thin text-gray-500 max-w-3xl mt-2 block">
        {`*Your cart is already stored in a database so you can try refreshing the
        page (press F5) and the cart is still here :)`}
      </span>
      <div className="grid grid-cols-cart items-start">
        <CartInfo />
        <CartSummary />
      </div>
    </div>
  );
}
