import shirt1 from "assets/clothes/men/shirt1.png";
import shirt2 from "assets/clothes/men/shirt2.png";
import shirt3 from "assets/clothes/men/shirt3.png";

import Image from "next/image";

const shirts = [
  { id: "id" + Math.random().toString(36).slice(2), img: shirt1 },
  { id: "id" + Math.random().toString(36).slice(2), img: shirt2 },
  { id: "id" + Math.random().toString(36).slice(2), img: shirt3 },
];

import Product from "src/model/Product";

interface AppProps {
  singleProduct: Product;
}

export default function ShowClothes({ singleProduct }: AppProps) {
  const imageEntries = Object.entries(singleProduct.image);
  return (
    <div>
      <ul className="flex flex-col gap-1">
        {imageEntries.map((imageArr) => (
          <li
            key={imageArr[0]}
            className="relative w-[473px] h-[473px] bg-background-grayec group"
          >
            <Image
              src={imageArr[1]}
              alt={singleProduct.name}
              priority
              layout="fill"
              className="object-cover"
            />
            <div className="invisible group-first:visible flex items-center gap-1 bg-primary-color py-[15px] pl-[7px] absolute top-[18px] left-[18px] font-semibold ">
              <p className="text-xl leading-none">25%</p>
              <p className="uppercase text-[9px] -rotate-90 leading-none ">
                off
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
