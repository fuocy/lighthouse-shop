import Image from "next/image";
import { GrFormSubtract } from "react-icons/gr";
import { GrFormAdd } from "react-icons/gr";
import { TiStarburst } from "react-icons/ti";
import { BsCheck } from "react-icons/bs";
import { useAppDispatch } from "src/store/hooks";
import { cartActions } from "src/store/cartSlice";

type AppProps = {
  img: string;
  name: string;
  brand: string;
  quantity: number;
  price: number;
  id: string;
  totalPrice: number;
};

export default function CartItem({
  img,
  name,
  brand,
  quantity,
  price,
  id,
  totalPrice,
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
    };
    dispatch(cartActions.addItemToCart(newSingleItem));
  };

  const removeEntireItem = () => {
    dispatch(cartActions.removeEntireItem(id));
    console.log(id);
  };

  return (
    <li
      className="grid grid-cols-cart-item items-center gap-10 justify-items-center
    py-6 
    shadow-sm"
    >
      <div className="flex items-center gap-8">
        <div className="relative h-[100px] w-[100px] bg-background-grayec">
          <Image src={img} alt={name} layout="fill" className="object-cover" />
        </div>
        <div className="flex-1">
          <h3
            className="font-semibold text-[14px]
          mb-5"
          >
            {name}
          </h3>
          <div className="flex items-center mb-4">
            <div className="flex items-center">
              <TiStarburst className="text-2xl text-primary-color" />
              <BsCheck className="text-lg text-black -translate-x-[21px]" />
            </div>
            <p className="-translate-x-[15px] font-thin capitalize italic text-[14px]">
              {brand}
            </p>
          </div>
          <button onClick={removeEntireItem} className="text-gray-600 text-sm">
            Remove
          </button>
        </div>
      </div>
      <div
        className="flex items-center gap-[22px] 
      px-[15px] py-[13px] 
      bg-background-grayfa"
      >
        <button onClick={decrementQuantity}>
          <GrFormSubtract className="text-2xl" />
        </button>
        <div>{quantity}</div>
        <button onClick={incrementQuantity}>
          <GrFormAdd className="text-2xl" />
        </button>
      </div>
      <div className="font-semibold text-lg">{`$${price}`}</div>
      <div className="font-semibold text-lg">{`$${totalPrice}`}</div>
    </li>
  );
}
