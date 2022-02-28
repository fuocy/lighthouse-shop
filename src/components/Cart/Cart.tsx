import CurrentPath from "@/components/common/CurrentPath";
import CartInfo from "./CartInfo";

import CartSummary from "./CartSummary";

export default function Cart() {
  return (
    <div className="layout-container pb-20">
      {/* <CurrentPath url1="Cart" /> */}
      <div className="grid grid-cols-cart items-start">
        <CartInfo />
        <CartSummary />
      </div>
    </div>
  );
}
