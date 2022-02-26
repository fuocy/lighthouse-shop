import similar1 from "assets/clothes/similar/similar1.png";
import similar2 from "assets/clothes/similar/similar2.png";
import similar3 from "assets/clothes/similar/similar3.png";
import similar4 from "assets/clothes/similar/similar4.png";
import similar5 from "assets/clothes/similar/similar5.png";
import Image from "next/image";
import { BsChevronRight } from "react-icons/bs";
import { BsChevronLeft } from "react-icons/bs";

const similarData = [
  {
    img: similar1,
    name: "Modern Iranian Lotus Watch...",
    id: 1,
    price: 5000,
    oldPrice: "",
    tag: "Limited",
  },
  {
    img: similar2,
    name: "Blue short sleeve T-shirt...",
    id: 2,
    price: 40.7,
    oldPrice: "",
    tag: "",
  },
  {
    img: similar3,
    name: "LX leather handbag, model 007...",
    id: 3,
    price: 25.2,
    oldPrice: 70,
    tag: "25% off",
  },
  {
    img: similar4,
    name: "Cream and brown hand basket...",
    id: 4,
    price: 14.8,
    oldPrice: "",
    tag: "Limited",
  },
  {
    img: similar5,
    name: "Red winter blouse...",
    id: 5,
    price: 20.6,
    oldPrice: "",
    tag: "Limited",
  },
];

export function LimitedTag() {
  return (
    <div className="invisible group-first:visible absolute top-[8px] left-[8px] py-[7px] px-[10px] text-rede7 bg-[#fdeeee] font-medium">
      Limited
    </div>
  );
}

export function SaleOffTag() {
  return (
    <div className="invisible group-last:visible absolute bg-primary-color py-[5px] px-[10px] top-[8px] right-[8px]">
      <p className="text-lg font-semibold leading-none">25%</p>
      <p className="text-[9px] font-semibold text-center">OFF</p>
    </div>
  );
}

export function OldPriceTag() {
  return (
    <div className="invisible group-last:visible absolute -top-[2px] left-12 text-[12px] text-gray-500 line-through">{`$ ${70}`}</div>
  );
}

export default function SimilarProduct() {
  return (
    <div className="col-span-full">
      <h4 className="text-lg font-semibold mb-5 text-gray-700">
        Similar products
      </h4>
      <div className="relative">
        <ul className="grid grid-cols-5 gap-x-[17px] ">
          {similarData.map((similar) => (
            <li key={similar.id} className="flex flex-col group relative">
              <div className="bg-background-grayec">
                <Image src={similar.img} alt="" />
              </div>
              <div className="p-4 bg-white flex-1 flex flex-col justify-between">
                <h5 className="mb-6 text-sm font-medium">{similar.name}</h5>
                <div className="text-base font-semibold relative">
                  <OldPriceTag />
                  {`$${similar.price}`}
                </div>
              </div>
              <LimitedTag />
              <SaleOffTag />
            </li>
          ))}
        </ul>
        <BsChevronLeft className="absolute top-1/2 -translate-y-1/2 -left-12 text-4xl text-gray-300 hover:text-gray-600 transition duration-200 cursor-pointer" />
        <BsChevronRight className="absolute top-1/2 -translate-y-1/2 -right-12 text-4xl text-gray-300 hover:text-gray-600 transition duration-200 cursor-pointer" />
      </div>
    </div>
  );
}
