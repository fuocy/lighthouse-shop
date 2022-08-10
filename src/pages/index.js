import Link from "next/link";
import ActiveLinkImprove from "src/components/layout/ActiveLinkImprove";
import { NavData } from "src/model/NavData";
import sun from "assets/sun.png";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { AiFillFire } from "react-icons/ai";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { AiFillPlaySquare } from "react-icons/ai";
import guy from "assets/guy.jpg";
import quayMat from "assets/quayMat.jpg";

import shirtLanding from "assets/Shirt-landing.png";
import shoeLanding from "assets/Shoe-landing.png";
import sunglassesLanding from "assets/Sunglasses-landing.png";
import Head from "next/head";
import Meta from "@/components/common/Meta";
const navItems = [
  new NavData("Men"),
  new NavData("Women"),
  new NavData("Children"),
  new NavData("Shoes"),
  new NavData("Accessory"),
];

// first:before:absolute first:before:py-1 first:before:px-3 first:before:rounded-full first:before:bg-primary-color first:before:-top-6 first:before:left-7 first:before:content-['new'] first:before:text-center
// intend to make message box but it's hard to make arrow parts
const HomePage = () => {
  return (
    <>
      <Meta
        title="Lighthouse | Won't let you down"
        description="Lighthouse used to be my everything."
        image="/preview.png"
      />

      <div className="max-w-[1290px] mx-auto pt-[50px] ">
        <div className="flex justify-between md:flex-col">
          <nav>
            <ul className="flex gap-8 font-medium">
              {navItems.map((navItem) => (
                <li
                  key={navItem.id}
                  className="relative group transition p-1 
              "
                >
                  <ActiveLinkImprove href={navItem.url}>
                    <a>{navItem.name}</a>
                  </ActiveLinkImprove>
                  <div className="absolute bottom-0 left-0 w-0 right-0 m-auto text-transparent bg-[#aaa] h-[3px] text-left opacity-0 group-hover:-z-10 group-hover:opacity-100 group-hover:animate-nav-move" />
                </li>
              ))}
            </ul>
          </nav>
          <Link href="/" passHref>
            <a
              className="text-[37px] relative -translate-x-8
          xs:translate-y-5
          md:translate-x-32 md:translate-y-0
          w-[200px]
          md:mt-5"
            >
              <span className="font-extrabold">Light</span>
              <span className="font-normal drop-shadow-logo">house</span>
              <div className="absolute top-[-3px] right-[49px] -z-10 h-14 w-14 md:right-[365px] md:top-[-2px]">
                <Image src={sun} alt="the sun | cosmestic content" />
              </div>
            </a>
          </Link>
          <div className="flex items-center shadow-md rounded-lg px-3 md:hidden">
            <FaSearch size={20} className="" />
            <input text="text" placeholder="Search" className="py-3 px-5" />
            <div className="border-l-2 pl-3">
              <HiOutlineShoppingCart size={20} />
            </div>
          </div>
        </div>
        <div className="flex items-start gap-20 mt-[70px] md:mt-5 md:flex-col">
          <div className="max-w-[600px] mt-4 md:text-center">
            <p className=" text-gray-400 tracking-wider font-semibold mb-3 text-xl flex items-center gap-1">
              TRENDY COLLECTION&apos;S{" "}
              <AiFillFire size={30} className="text-primary-color" />
            </p>
            <p
              style={{ wordSpacing: "15px" }}
              className="text-[90px] font-bold tracking-tighter mb-10"
            >
              <p className="whitespace-nowrap">DRESSES TO</p>
              <p className="whitespace-nowrap">BE NOTICED</p>
            </p>
            <div className="!text-medium !border-l-4 !border-gray-200 !pl-5 !bg-white !leading-loose !text-lg !max-w-[500px]">
              Fashion is part of the daily air and it changes all the time, with
              all the events
            </div>
            <div className="mt-9 flex items-center gap-5">
              <Link href="/men">
                <a
                  className="uppercase bg-primary-color  font-medium text-lg
                rounded-full
                active:shadow-sm active:scale-[.98] active:translate-y-0 
                active:bg-[#e5b32f] 
                hover:bg-[#fecd48] hover:-translate-y-[2px] 
                transition-all duration-[250ms] 
                z-10 relative overflow-hidden 
                py-3 px-5
                group
                inline-block text-center
                animate-pulse
                "
                >
                  <div className="flex gap-3 items-center">
                    <p>Start shopping</p> <BsFillPlayCircleFill size={25} />
                  </div>
                  <div
                    className="-z-10 bg-[#ffffff33] 
                  absolute top-[-1000%] bottom-[-375%] 
                  w-9 
                  translate3d-rotate group-hover:transition group-hover:duration-[1000ms] group-hover:ease-in-out group-hover:translate3d-rotate-hover"
                  ></div>
                </a>
              </Link>
              <Link href="/men">
                <a className="flex gap-2 items-center">
                  <AiFillPlaySquare size={57} className="text-black" />
                  <p className="font-medium text-lg">What&apos;s Trending?</p>
                </a>
              </Link>
            </div>
          </div>

          <div className="relative w-[600px] h-[600px] shrink-0 overflow-x-hidden">
            <Image src={guy} alt="" layout="fill" className="object-cover" />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-24 -mt-10 xl:mt-8 mx-auto">
        <div className="relative w-[250px] h-[250px] ml-16 shrink-0 md:hidden">
          <Image src={quayMat} alt="" layout="fill" className="object-cover" />
        </div>
        <div className="flex-grow">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary-color">
              <AiFillFire size={25} className="text-black" />
            </div>

            <p className="font-semibold tracking-wider text-2xl">FEATURED</p>
          </div>
          <div className="bg-black rounded-tl-3xl py-[17px] px-12">
            <ul className="flex  md:flex-col md:gap-5">
              <li className="flex items-center gap-3 pr-[45px]">
                <div className="w-36 h-36 relative">
                  <Image
                    src={shirtLanding}
                    alt=""
                    layout="fill"
                    className="object-cover"
                  />
                </div>
                <div className="text-white">
                  <p className="font-bold mb-2 text-xl">SHIRTS</p>
                  <Link href="/men">
                    <a className="text-gray-200 text-sm hover:text-gray-400 transition duration-300 tracking-wider">
                      See All
                    </a>
                  </Link>
                </div>
              </li>
              <li className="flex items-center gap-3 px-[45px] md:border-x-2 md:border-slate-700">
                <div className="w-36 h-36 relative">
                  <Image
                    src={shoeLanding}
                    alt=""
                    layout="fill"
                    className="object-cover"
                  />
                </div>
                <div className="text-white">
                  <p className="font-bold mb-2 text-xl">SHOES</p>
                  <Link href="/shoes">
                    <a className="text-gray-200 text-sm hover:text-gray-400 transition duration-300 tracking-wider">
                      See All
                    </a>
                  </Link>
                </div>
              </li>
              <li className="flex items-center gap-3 pl-[45px]">
                <div className="w-36 h-36 relative">
                  <Image
                    src={sunglassesLanding}
                    alt=""
                    layout="fill"
                    className="object-cover"
                  />
                </div>
                <div className="text-white">
                  <p className="font-bold mb-2 text-xl">Accessory</p>
                  <Link href="/accessory">
                    <a className="text-gray-200 text-sm hover:text-gray-400 transition duration-300 tracking-wider">
                      See All
                    </a>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
{
  /* <div className="hidden">
        <h1 className="text-white">
          7:25a.m 3/3/2022 Thi ra la mot giac mo. Lighthouse duy nhat ma toi co,
          gio la chiec website nay.
        </h1>
        <p className="text-white">
          6:00 9/3/2022 Lai la 1 giac mo dep... em vui ve noi chuyen voi toi
        </p>
      </div> */
}
