import { useAppSelector } from "src/store/hooks";
import classes from "styles/input-effect.module.css";

export default function CartSummary() {
  const cartState = useAppSelector((state) => state.cart);

  return (
    <div className="pl-11 pr-4">
      <h2
        className="text-2xl font-semibold
      pb-12 mb-[40px] mt-[44px]
      border-b-2 border-primary-color"
      >
        Order Summary
      </h2>
      <div className="flex-between mb-10">
        <p className="font-medium text-gray-700">
          ITEMS: <span className="font-bold">{cartState.totalQuantity}</span>
        </p>
        <p className="font-semibold text-xl">{`$${cartState.totalAmount}`}</p>
      </div>
      <div
        className="pb-14 border-b-2 border-[#09a677] 
      mb-7"
      >
        <div className="mb-10">
          <label
            htmlFor="shipping"
            className="block 
          mb-7
          font-medium text-gray-700"
          >
            SHIPPING
          </label>
          <select
            id="shipping"
            name="shipping"
            className="appearance-none  
            w-full
            rounded-md
            py-4 px-5
            outline-none
            shadow-sm
            "
          >
            <option value="standard">Standard Delivery - $4.00</option>
            <option value="standard">Express Delivery - $7.00</option>
            <option value="standard">I Have No Money </option>
          </select>
        </div>
        <div>
          <label
            htmlFor="code"
            className="block 
          mb-7
          font-medium text-gray-700"
          >
            PROMO CODE
          </label>
          <div className={`${classes["input__div-effect"]} mb-5`}>
            <input
              id="code"
              type="text"
              name="code"
              className={`appearance-none
              w-full
              rounded-md
              py-4 px-5 
              font-jakarta
              outline-none
              shadow-sm
              input__input-effect
              ${classes["input__input-effect"]}`}
              placeholder="Enter your code"
            />
            <span className={`${classes["input__span-effect"]}`}></span>
          </div>
          <button
            className=" bg-[#fdeeee] text-rede7 font-medium
            rounded-sm
            py-3 px-5 "
          >
            APPLY
          </button>
        </div>
      </div>
      <div className="mb-10 flex-between">
        <p className="font-medium text-gray-700">TOTAL COST</p>
        <p className="font-bold text-2xl">{`$${461.98}`}</p>
      </div>
      <button
        className="uppercase  bg-primary-color font-extrabold text-xl 
        shadow-md rounded-sm
        active:shadow-sm active:scale-[.98] active:translate-y-0 
        active:bg-[#e5b32f] 
        hover:bg-[#fecd48] hover:-translate-y-[2px] 
        transition-all duration-[250ms] 
        z-10 relative overflow-hidden 
        w-full py-5
        group"
      >
        checkout
        <div
          className="-z-10 bg-[#ffffff33] 
        absolute top-[-1000%] bottom-[-375%] 
        w-9 
        translate3d-rotate group-hover:transition group-hover:duration-[1000ms] group-hover:ease-in-out group-hover:translate3d-rotate-hover"
        ></div>
      </button>
    </div>
  );
}
