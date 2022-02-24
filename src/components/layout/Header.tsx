import logo from "assets/logoMini.png";
import Image from "next/image";
import sun from "assets/sun.png";
import Navigation from "@/components/layout/Navigation";
import Link from "next/link";
export default function Header() {
  return (
    <header className="pt-16 px-24 pb-5">
      <div className="flex items-center justify-between mb-20 relative">
        <Link href="/login" passHref>
          <a className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <p className="font-semibold">Login</p>
          </a>
        </Link>

        {/* <div className="-translate-x-[10px] -translate-y-[10px]">
          <Image src={logo} alt="logo Lighthouse that I myself made." />
        </div> */}
        <Link href="/" passHref>
          <a>
            <div className="text-2xl relative">
              <span className="font-extrabold">Light</span>
              <span className="font-normal drop-shadow-logo">house</span>
              <div className="absolute top-0 right-[26px] -z-10 h-10 w-10">
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
          <a className="relative ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <div className="absolute -top-1 -left-3 h-4 w-5 rounded-lg bg-[#eb5757] flex items-center justify-center ">
              1
            </div>
          </a>
        </Link>
      </div>
      <Navigation />
    </header>
  );
}
