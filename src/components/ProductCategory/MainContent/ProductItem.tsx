import Image from "next/image";
import { AiFillHeart, AiTwotoneHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { TiStarburst } from "react-icons/ti";
import { BsCheck } from "react-icons/bs";
import Link from "next/link";
import { useRouter } from "next/router";
import useStore from "src/store/zustand/useStore";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
type AppProps = {
  img: string;
  name: string;
  price: number;
  availability: boolean;
  discount: number;
  love: number;
  brand: string;
  id: string;
};

export default function ProductItem({
  img,
  name,
  price,
  love,
  discount,
  availability,
  brand,
  id,
}: AppProps) {
  // bg-background-grayec
  const router = useRouter();
  const category = router.query.productCategory;

  const lovedProductIds = useStore((state) => state.lovedProductIds);

  const setLoveCount = useStore((state) => state.setLoveCount);
  const isLoggedIn = useStore((state) => !!state.tokenId);

  const handleLove = () => {
    if (!isLoggedIn) {
      toast.error("You have to log in to mark love", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      setTimeout(() => {
        router.push("/auth");
      }, 2000);

      return;
    }

    setLoveCount(id);
  };

  const showLoveFill = lovedProductIds.includes(id) && isLoggedIn;
  const showLoveOutline = !lovedProductIds.includes(id) || !isLoggedIn;

  return (
    <li className=" bg-[#F6F5F3] shadow-md overflow-hidden ">
      <ToastContainer />
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
        {/* {tag.preBuy && (
          <div className="absolute top-2 left-2 text-[#09a677] bg-[#eaf7f3] font-medium h-[32px] w-[72px] flex items-center justify-center">
            Prebuy
          </div>
        )} */}

        {/* bg-[#E8E9EB] */}
        {discount > 0 && (
          <div className="absolute top-[9px] right-[-47px] text-black  bg-primary-color font-medium h-[30px] w-[139px] flex items-center justify-center rotate-[45deg]">
            <p className="text-sm">{discount}%</p>
            <p className="uppercase text-[9px] font-semibold -rotate-90 ">
              off
            </p>
          </div>
        )}
        {/* {!tag.preBuy && tag.limited && (
          <div className="absolute top-2 left-2 text-rede7 bg-[#fdeeee] font-medium h-[32px] w-[72px] flex items-center justify-center">
            Limited
          </div>
        )} */}
        <Link href={`/${category}/${id}`} passHref>
          <a className="absolute opacity-0 transition duration-300 z-10 group-hover:opacity-100 py-2 px-5 border-2 font-normal border-primary-color text-primary-color top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center cursor-pointer shadow-md">
            View product
          </a>
        </Link>
        <div className="absolute opacity-0 transition duration-500 w-full h-full top-0 left-0 bg-black/60 group-hover:opacity-100"></div>
      </div>
      <div className="py-5 px-5 bg-white h-[156px] flex flex-col justify-between">
        <div
          className="mb-[10px] text-sm font-medium uppercase 
        lg:text-xs"
        >
          {name}
        </div>
        <div>
          <div className="flex items-center mb-2 ml-[-5px]">
            <div className="flex items-center">
              <TiStarburst className="text-2xl  text-[#F6F5F3]" />
              <BsCheck className="text-lg text-black -translate-x-[21px]" />
            </div>
            <p
              className="-translate-x-[15px] font-light text-sm capitalize italic text-slate-700
            lg:text-xs"
            >
              {brand}
            </p>
          </div>
          {availability && (
            <div
              className="text-right text-sm font-thin 
            lg:text-xs"
            >{`$${(price - (price * discount) / 100).toFixed(2)}`}</div>
          )}
          {!availability && (
            <div
              className="text-right text-sm text-slate-700 italic font-thin 
            lg:text-xs"
            >
              Unavailable
            </div>
          )}
          <button
            onClick={handleLove}
            className="flex items-center gap-2 mt-auto"
          >
            {showLoveFill && (
              <AiFillHeart className="text-sm  text-[#19110B]" />
            )}
            {showLoveOutline && (
              <AiOutlineHeart className="text-sm  text-[#19110B]" />
            )}
            {/* <p className="text-[13px]">{love}</p> */}
          </button>
        </div>
      </div>
    </li>
  );
}
