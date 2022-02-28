import Image from "next/image";
import { GrFormSubtract } from "react-icons/gr";
import { GrFormAdd } from "react-icons/gr";
import { TiStarburst } from "react-icons/ti";
import { BsCheck } from "react-icons/bs";

type AppProps = {
  img: string;
  name: string;
  type: string;
  quantity: number;
  price: number;
};

export default function CartItem({
  img,
  name,
  type,
  quantity,
  price,
}: AppProps) {
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
            className="font-semibold text-xl
          mb-5"
          >
            {name}
          </h3>
          <div className="flex items-center mb-4">
            <div className="flex items-center">
              <TiStarburst className="text-2xl text-primary-color" />
              <BsCheck className="text-lg text-black -translate-x-[21px]" />
            </div>
            <p className="-translate-x-[15px] font-medium">{type}</p>
          </div>
          <button className="text-gray-600 text-sm">Remove</button>
        </div>
      </div>
      <div
        className="flex items-center gap-[22px] 
      px-[15px] py-[13px] 
      bg-background-grayfa"
      >
        <button>
          <GrFormSubtract className="text-2xl" />
        </button>
        <div>{quantity}</div>
        <button>
          <GrFormAdd className="text-2xl" />
        </button>
      </div>
      <div className="font-semibold text-lg">{`$${price}`}</div>
      <div className="font-semibold text-lg">{`$${quantity * price}`}</div>
    </li>
  );
}
