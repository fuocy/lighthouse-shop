import { GrFormSubtract } from "react-icons/gr";
import { GrFormAdd } from "react-icons/gr";
import { AiOutlineHeart } from "react-icons/ai";
import { HiCheck } from "react-icons/hi";
const selections = {
  sizes: [
    {
      id: 1,
      name: "XXL",
    },
    {
      id: 2,
      name: "XL",
    },
    {
      id: 3,
      name: "L",
    },
    {
      id: 4,
      name: "M",
    },
    {
      id: 5,
      name: "S",
    },
  ],
  colors: [
    { id: 1, color: "#708c63" },
    { id: 2, color: "#d2b762" },
    { id: 3, color: "#636363" },
    { id: 4, color: "#ba5a4d" },
    { id: 5, color: "#7d5d83" },
  ],
};

import Product from "src/model/Product";

interface AppProps {
  singleProduct: Product;
}

// bg-[#708c63]
// bg-[#d2b762]
// bg-[#636363]
// bg-[#ba5a4d]
// bg-[#7d5d83]
// py-[5px] px-[15px]
export default function ClothesSelection({ singleProduct }: AppProps) {
  return (
    <>
      <div>
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-5 text-lg">
            <p className="">Size:&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <p className="font-semibold">Medium</p>
          </div>
          <ul className="flex items-center gap-[5px] text-lg">
            {singleProduct.size.map((size) => (
              <li
                className="uppercase leading-none py-[10px] px-[12px] bg-[#fafafa] last:text-[#9ca3af] first:bg-primary-color last:crossed"
                key={size}
              >
                {size}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-5 text-lg">
            <p className="">Color:</p>
            <p className="font-semibold">Moss green</p>
          </div>
          <ul className="flex items-center gap-[8px] ">
            {singleProduct.color.map((color) => (
              <li
                className={`h-6 w-6 bg-[${color}] group flex items-center justify-center`}
                key={color}
              >
                <HiCheck className="invisible group-first:visible text-xl text-white" />
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-5 text-lg">
            <p className="">Qty:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <p className="font-semibold">1</p>
          </div>
          <div className="flex items-center gap-[22px] px-[15px] py-[13px] bg-background-grayfa">
            <button>
              <GrFormSubtract className="text-2xl" />
            </button>
            <div>1</div>
            <button>
              <GrFormAdd className="text-2xl" />
            </button>
          </div>
        </div>
      </div>
      <h3 className="text-right text-[40px] font-bold mb-[30px]">{`$${Math.round(
        singleProduct.price
      )}`}</h3>
      <div className="flex gap-5">
        <button className="h-[70px] w-[70px] bg-background-grayfa flex items-center justify-center hover:-translate-y-[2px] transition-all duration-[250ms] rounded-sm active:translate-y-0 active:scale-[.98]">
          <AiOutlineHeart className="h-7 w-7 text-rede7" />
        </button>
        <button className="uppercase flex-1 bg-primary-color font-extrabold text-xl shadow-md active:shadow-sm active:scale-[.98] transition-all duration-[250ms] rounded-sm active:translate-y-0 hover:bg-[#fecd48] active:bg-[#e5b32f] hover:-translate-y-[2px] z-10 relative overflow-hidden group">
          add to basket
          <div className="-z-10 bg-[#ffffff33] absolute top-[-1000%] bottom-[-375%] w-9 translate3d-rotate group-hover:transition group-hover:duration-[1000ms] group-hover:ease-in-out group-hover:translate3d-rotate-hover"></div>
        </button>
      </div>
    </>
  );
}
