// import Image from "next/image";
// import sun from "assets/sun.png";
// import Navigation from "@/components/layout/Navigation";
// import Link from "next/link";
// import { HiOutlineUser } from "react-icons/hi";
// import { HiOutlineShoppingCart } from "react-icons/hi";
// import { useAppSelector } from "src/store/hooks";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/router";
// export default function Header() {
//   const totalQuantity = useAppSelector((state) => state.cart.totalQuantity);
//   const router = useRouter();
//   const path = router.asPath;

//   const [scrolled, setScrolled] = useState(false);

//   const handleScroll = () => {
//     const offset = window.scrollY;

//     if (offset > 200) {
//       setScrolled(true);
//     } else {
//       setScrolled(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//   }, []);

//   // className={scrolled && "fixed top-0 left-0 bg-slate-400"}

//   return (
//     <header
//       className={`pt-10 px-24 pb-5 transition duration-300 ${
//         scrolled &&
//         path !== "/cart" &&
//         "fixed top-0 left-0 bg-white/[95] w-full z-50 pt-5 shadow-sm "
//       }`}
//     >
//       <div
//         className={`flex items-center justify-between  relative ${
//           scrolled && path !== "/cart" ? "mb-2" : "mb-14"
//         }`}
//       >
//         <Link href="/login" passHref>
//           <a className="flex items-center gap-1">
//             <HiOutlineUser className="text-2xl" />
//             <p className="font-semibold">Login</p>
//           </a>
//         </Link>
//         <Link href="/" passHref>
//           <a>
//             <div className="text-[27px] relative -translate-x-8">
//               <span className="font-extrabold">Light</span>
//               <span className="font-normal drop-shadow-logo">house</span>
//               <div className="absolute -top-[3px] right-[31px] -z-10 h-10 w-10">
//                 <Image
//                   src={sun}
//                   alt="the sun | cosmestic content"
//                   // layout="fill"
//                   // objectFit="contain"
//                 />
//               </div>
//             </div>
//           </a>
//         </Link>
//         {scrolled && path !== "/cart" && <Navigation />}
//         <Link href="/cart" passHref>
//           <a className="relative">
//             <HiOutlineShoppingCart className="text-2xl" />
//             {totalQuantity > 0 && (
//               <div className="absolute -top-1 -left-3 h-4 w-5 rounded-lg bg-[#eb5757] flex items-center justify-center text-white">
//                 {totalQuantity}
//               </div>
//             )}
//           </a>
//         </Link>
//       </div>
//       {!scrolled && <Navigation />}
//     </header>
//   );
// }

import Image from "next/image";
import sun from "assets/sun.png";
import Navigation from "@/components/layout/Navigation";
import Link from "next/link";
import { HiOutlineUser } from "react-icons/hi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useAppSelector } from "src/store/hooks";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useStore from "src/store/store-zustand/useStore";

export default function Header() {
  const totalQuantity = useAppSelector((state) => state.cart.totalQuantity);
  const router = useRouter();
  const path = router.asPath;

  // const [scrolled, setScrolled] = useState(false);

  // const handleScroll = () => {
  //   const offset = window.scrollY;

  //   if (offset > 200) {
  //     setScrolled(true);
  //   } else {
  //     setScrolled(false);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  // }, []);

  // className={scrolled && "fixed top-0 left-0 bg-slate-400"}
  const isLoggedIn = useStore((state) => !!state.tokenId);
  const userEmail = useStore((state) => state.email);
  const userAvatar = useStore((state) => state.avatar);

  const logout = useStore((state) => state.logout);
  return (
    <header className={`pt-10 px-24 pb-5 transition duration-300 `}>
      <div className={`flex items-center justify-between  relative mb-14`}>
        {!isLoggedIn && (
          <Link href="/auth" passHref>
            <a className="flex items-center gap-1">
              <HiOutlineUser className="text-2xl" />
              <p className="font-semibold">Login</p>
            </a>
          </Link>
        )}
        {isLoggedIn && (
          <div className="flex items-center gap-3">
            <div className="relative h-11 w-11 rounded-full overflow-hidden">
              <Image
                src={
                  userAvatar
                    ? userAvatar
                    : "https://i.ibb.co/CJqGvY6/satthudatinh.jpg"
                }
                alt=""
                layout="fill"
                className="object-cover"
              />
            </div>
            <div>
              <div className="text-semibold text-base">
                {userEmail.slice(0, -10)}
              </div>
              <button onClick={logout} className="text-gray-500 text-sm">
                Logout
              </button>
            </div>
          </div>
        )}
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
            {totalQuantity > 0 && (
              <div className="absolute -top-1 -left-3 h-4 w-5 rounded-lg bg-[#eb5757] flex items-center justify-center text-white">
                {totalQuantity}
              </div>
            )}
          </a>
        </Link>
      </div>
      <Navigation />
    </header>
  );
}
