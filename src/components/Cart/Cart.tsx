import CartInfo from "./CartInfo";
import CartSummary from "./CartSummary";
import "react-toastify/dist/ReactToastify.css";

export default function Cart() {
  return (
    <div className="layout-container pb-20 sm:px-0">
      <div className="grid grid-cols-cart items-start sm:grid-cols-1">
        <CartInfo />
        <CartSummary />
      </div>
    </div>
  );
}
