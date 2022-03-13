import Image from "next/image";
import { GrFormSubtract } from "react-icons/gr";
import { GrFormAdd } from "react-icons/gr";
import { TiStarburst } from "react-icons/ti";
import { BsCheck } from "react-icons/bs";
import { useAppDispatch } from "src/store/redux-toolkit/hooks";
import { cartActions } from "src/store/redux-toolkit/cartSlice";

type AppProps = {
  img: string;
  name: string;
  brand: string;
  quantity: number;
  price: number;
  id: string;
  totalPrice: number;
  color: string;
  size: string;
};

////////////////////////////////////////////////////////////
// THIS COMMENT IS IMPORTANCE, DON'T DELETE IT

// bg-[#000]     bg-[#fff]    bg-[#455851]
// bg-[#30323C]  bg-[#F4F4E8] bg-[#595E7B]
// bg-[#181A29]
// bg-[#E6B2B8]  bg-[#2D2C2F] bg-[#BFAA80]
// bg-[#7BB4B5]  bg-[#FAC0C3] bg-[#D1C2AD]
// bg-[#E3E2DE]  bg-[#FE37A7] bg-[#2A2A2C]
// bg-[#E9E7E6]
// bg-[#46302C]
// bg-[#121629]  bg-[#B1412C]
// bg-[#272429]  bg-[#3D3D56] bg-[#656D6D]
// bg-[#6C1F31]
// bg-[#C1C0C9]  bg-[#D9C8B4]
// bg-[#94815F]  bg-[#406174] bg-[#6A323F]
// bg-[#F0C1CB]
// bg-[#F6DFA8]  bg-[#F4F4F4] bg-[#EBEBEB]
// bg-[#C1AA84]
// bg-[#37313C]
// bg-[#E1DED5]
// bg-[#2A346B]
// bg-[#ddd]
// bg-[#00FF00]
// bg-[#ffd500]

///////////////////////////////////////////////////////////

export default function CartItem({
  img,
  name,
  brand,
  quantity,
  price,
  id,
  totalPrice,
  color,
  size,
}: AppProps) {
  const dispatch = useAppDispatch();

  const decrementQuantity = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  const incrementQuantity = () => {
    const newSingleItem = {
      id,
      name,
      brand,
      img,
      quantity: 1,
      price,
      totalPrice: price * 1,
      color,
      size,
    };
    dispatch(cartActions.addItemToCart(newSingleItem));
  };

  const removeEntireItem = () => {
    dispatch(cartActions.removeEntireItem(id));
  };

  return (
    <li
      className="grid grid-cols-cart-item items-center gap-10 justify-items-center
    py-6 
    shadow-sm
    sm:gap-2"
    >
      <div
        className="flex items-center gap-8
      sm:gap-3
      "
      >
        <div
          className="relative h-[100px] w-[100px] bg-background-grayec
        sm:h-[50px] sm:w-[50px]"
        >
          <Image src={img} alt={name} layout="fill" className="object-cover" />
        </div>
        <div className="flex-1">
          <h3
            className="font-semibold text-[14px]
          mb-2
          sm:text-xs
          sm:w-[70px]"
          >
            {name}
          </h3>
          <div className="flex items-center mb-2 gap-2">
            <div className="flex items-center">
              <TiStarburst className="text-lg text-primary-color" />
              <BsCheck className="text-sm text-black -translate-x-[16px]" />
            </div>
            <p
              className="-translate-x-[15px] font-thin capitalize italic text-[14px]
            sm:w-[70px]
            sm:text-xs"
            >
              {brand}
            </p>
          </div>
          <div
            className="text-[13px] flex items-center gap-24
          sm:gap-1"
          >
            <div className="text-[13px] flex items-center gap-2">
              <p>{size}</p>
              <div className={`h-3 w-3 bg-[${color}]`}></div>
            </div>
            <button
              onClick={removeEntireItem}
              className="text-gray-600 text-sm  hover:text-gray-400 transition"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
      <div
        className="flex items-center gap-[22px] 
      px-[15px] py-[13px] 
      bg-background-grayfa
      sm:px-[1px]
      sm:text-sm
      sm:-translate-x-6"
      >
        <button onClick={decrementQuantity}>
          <GrFormSubtract className="text-2xl  sm:text-sm" />
        </button>
        <div>{quantity}</div>
        <button onClick={incrementQuantity}>
          <GrFormAdd className="text-2xl  sm:text-sm" />
        </button>
      </div>
      <div
        className="font-semibold text-lg
      sm:text-sm"
      >{`$${price}`}</div>
      <div
        className="font-semibold text-lg
      sm:text-sm"
      >{`$${+totalPrice.toFixed(2)}`}</div>
    </li>
  );
}
