import Image from "next/image";
import sun from "assets/sun.png";
import Navigation from "@/components/layout/Navigation";
import Link from "next/link";
import { HiOutlineUser } from "react-icons/hi";
import { HiOutlineShoppingCart } from "react-icons/hi";
export default function Header() {
  return (
    <header className="pt-16 px-24 pb-5">
      <div className="flex items-center justify-between mb-20 relative">
        <Link href="/login" passHref>
          <a className="flex items-center gap-1">
            <HiOutlineUser className="text-2xl" />
            <p className="font-semibold">Login</p>
          </a>
        </Link>
        {/* <div className="-translate-x-[10px] -translate-y-[10px]">
          <Image src={logo} alt="logo Lighthouse that I myself made." />
        </div> */}
        <Link href="/" passHref>
          <a>
            <div className="text-[27px] relative -translate-x-8">
              <span className="font-extrabold">Light</span>
              <span className="font-normal drop-shadow-logo">house</span>
              <div className="absolute -top-[3px] right-[31px] -z-10 h-10 w-10">
                <Image
                  src={sun}
                  alt="the sun | cosmestic content"
                  // layout="fill"
                  // objectFit="contain"
                />
              </div>
            </div>
          </a>
        </Link>
        <Link href="/cart" passHref>
          <a className="relative">
            <HiOutlineShoppingCart className="text-2xl" />
            <div className="absolute -top-1 -left-3 h-4 w-5 rounded-lg bg-[#eb5757] flex items-center justify-center text-white">
              1
            </div>
          </a>
        </Link>
      </div>
      <Navigation />
    </header>
  );
}
