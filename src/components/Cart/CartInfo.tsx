import CartItem from "./CartItem";
import classes from "styles/scrollbar.module.css";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { useAppSelector } from "src/store/redux-toolkit/hooks";
import { useRouter } from "next/router";
import CartEmpty from "./CartEmpty";
import { useAutoAnimate } from "@formkit/auto-animate/react";
export default function CartInfo() {
  const [parent] = useAutoAnimate();

  const cartState = useAppSelector((state) => state.cart);
  const router = useRouter();

  const goBackHandler = () => {
    router.back();
  };

  return (
    <div
      className="bg-white 
      shadow-sm
      mt-5 px-5 pt-6"
    >
      <div
        className="flex items-center justify-between
        text-2xl font-semibold
        pb-12 mb-[40px]
        border-b-2 border-primary-color"
      >
        <h1>Shopping Cart</h1>
        <p className="text-xl text-black/75">{cartState.totalQuantity} items</p>
      </div>
      {cartState.totalQuantity !== 0 && (
        <div className="grid grid-cols-cart-item gap-10 justify-items-center mb-4">
          <div
            className="text-gray-700 text-sm 
    justify-self-start pl-5"
          >
            PRODUCTS DETAIL
          </div>
          <div className="text-gray-700 text-sm  ">QUANTITY</div>
          <div className="text-gray-700 text-sm ">PRICE</div>
          <div className="text-gray-700 text-sm  ">TOTAL</div>
        </div>
      )}
      <div>
        <ul
          // @ts-ignore
          ref={parent}
          className={`overflow-y-auto h-[500px] ${classes["custom-scrollbar"]} `}
        >
          {cartState.items.length > 0 &&
            cartState.items.map((cart) => (
              <CartItem
                key={cart.id}
                id={cart.id}
                img={cart.img}
                name={cart.name}
                brand={cart.brand}
                quantity={cart.quantity}
                price={cart.price}
                totalPrice={cart.totalPrice}
                color={cart.color}
                size={cart.size}
              />
            ))}
          {cartState.items.length === 0 && <CartEmpty />}
        </ul>
      </div>
      <button onClick={goBackHandler}>
        <a className="flex items-center gap-3 pb-8 cursor-pointer pl-5">
          <HiOutlineArrowNarrowLeft className="text-red-500 text-xl -translate-y-[1px]" />
          <p
            className="italic text-slate-500 
          pb-1 border-b-2 border-transparent hover:border-primary-color transition duration-500"
          >
            Continue Shopping
          </p>
        </a>
      </button>
    </div>
  );
}
