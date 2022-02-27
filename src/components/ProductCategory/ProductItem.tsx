import Image from "next/image";

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
    <li className="p-5 bg-white shadow-md">
      <div className="relative w-full h-[250px] group">
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
          <div className="absolute top-0 left-0 text-[#09a677] bg-[#eaf7f3] font-medium h-[32px] w-[72px] flex items-center justify-center">
            Prebuy
          </div>
        )}
        {tag.saleOff && (
          <div className="absolute top-0 right-0 text-black bg-primary-color font-medium h-[30px] w-[60px] flex items-center justify-center">
            <p className="text-sm">25%</p>
            <p className="uppercase text-[9px] font-semibold -rotate-90 ">
              off
            </p>
          </div>
        )}
        {!tag.preBuy && tag.limited && (
          <div className="absolute top-0 left-0 text-rede7 bg-[#fdeeee] font-medium h-[32px] w-[72px] flex items-center justify-center">
            Limited
          </div>
        )}
        <div className="absolute opacity-0 transition duration-300 z-10 group-hover:opacity-100 py-2 px-5 border-2 font-normal border-primary-color text-primary-color top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center cursor-pointer shadow-md">
          View product
        </div>
        <div className="absolute opacity-0 transition duration-500 w-full h-full top-0 left-0 bg-black/60 group-hover:opacity-100"></div>
      </div>
      <div className="mt-[30px] mb-[20px] text-lg font-medium uppercase">
        {name}
      </div>
      {availability && (
        <div className="text-right text-2xl font-semibold">{`$${price}`}</div>
      )}
      {!availability && (
        <div className="text-right text-base text-rede7 font-normal">
          Unavailable
        </div>
      )}
    </li>
  );
}
