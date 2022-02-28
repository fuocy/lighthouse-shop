import Image from "next/image";
import { AiTwotoneHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { TiStarburst } from "react-icons/ti";
import { BsCheck } from "react-icons/bs";
type AppProps = {
  img: string;
  name: string;
  price: number;
  tag: { preBuy: boolean; saleOff: boolean; limited: boolean };
  availability: boolean;
};

export default function ProductItem({
  img,
  name,
  price,
  tag,
  availability,
}: AppProps) {
  return (
    <li className=" bg-background-grayec shadow-md overflow-hidden">
      <div className="relative w-full h-[250px] group ">
        <Image
          src={img}
          alt=""
          priority
          layout="fill"
          placeholder="blur"
          blurDataURL={img}
          className="object-cover"
        />
        {tag.preBuy && (
          <div className="absolute top-2 left-2 text-[#09a677] bg-[#eaf7f3] font-medium h-[32px] w-[72px] flex items-center justify-center">
            Prebuy
          </div>
        )}
        {tag.saleOff && (
          <div className="absolute top-[9px] right-[-47px] text-black bg-primary-color font-medium h-[30px] w-[139px] flex items-center justify-center rotate-[45deg]">
            <p className="text-sm">25%</p>
            <p className="uppercase text-[9px] font-semibold -rotate-90 ">
              off
            </p>
          </div>
        )}
        {!tag.preBuy && tag.limited && (
          <div className="absolute top-2 left-2 text-rede7 bg-[#fdeeee] font-medium h-[32px] w-[72px] flex items-center justify-center">
            Limited
          </div>
        )}
        <div className="absolute opacity-0 transition duration-300 z-10 group-hover:opacity-100 py-2 px-5 border-2 font-normal border-primary-color text-primary-color top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center cursor-pointer shadow-md">
          View product
        </div>
        <div className="absolute opacity-0 transition duration-500 w-full h-full top-0 left-0 bg-black/60 group-hover:opacity-100"></div>
      </div>
      <div className="py-5 px-5 bg-white">
        <div className="mb-[10px] text-lg font-medium capitalize">{name}</div>
        <div className="flex items-center mb-2 ml-[-5px]">
          <div className="flex items-center">
            <TiStarburst className="text-2xl text-primary-color" />
            <BsCheck className="text-lg text-black -translate-x-[21px]" />
          </div>
          <p className="-translate-x-[15px] font-normal text-slate-700">
            Balenciaga
          </p>
        </div>
        {availability && (
          <div className="text-right text-2xl font-semibold">{`$${price}`}</div>
        )}
        {!availability && (
          <div className="text-right text-base text-rede7 font-normal leading-loose">
            Unavailable
          </div>
        )}
        <div className="flex items-center gap-2 mt-auto">
          <AiOutlineHeart className="text-lg text-rede7" />
          {/* <AiTwotoneHeart className="text-lg text-rede7" /> */}
          <p>18</p>
        </div>
      </div>
    </li>
  );
}
