// import Header from "@/components/layout/Header";

// type AppProps = {
//   children: React.ReactNode;
// };

// import { useAppDispatch, useAppSelector } from "src/store/redux-toolkit/hooks";
// import sendCartData, { fetchCartData } from "src/store/redux-toolkit/cartThunk";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import useStore from "src/store/zustand/useStore";
// import { FaFacebookF } from "react-icons/fa";
// import { BsInstagram, BsYoutube } from "react-icons/bs";
// import Link from "next/link";
// import { GrSun } from "react-icons/gr";
// import Image from "next/image";
// import classes from "styles/scrollbar.module.css";
// import "animate.css";
// import { Transition } from "react-transition-group";
// let isInitial = true;

// export default function Layout({ children }: AppProps): JSX.Element {
//   const dispatch = useAppDispatch();
//   const cart = useAppSelector((state) => state.cart);
//   const router = useRouter();
//   const setToken = useStore((state) => state.setToken);
//   const setEmail = useStore((state) => state.setEmail);
//   const setAvatar = useStore((state) => state.setAvatar);
//   const isLoggedIn = useStore((state) => !!state.tokenId);
//   const setLovedProductIds = useStore((state) => state.setLovedProductIds);
//   const showHeader = router.pathname === "/auth" ? false : true;
//   const totalQuantity = useAppSelector((state) => state.cart.totalQuantity);
//   const cartItems = useAppSelector((state) => state.cart.items);

//   useEffect(() => {
//     dispatch(fetchCartData());
//   }, [dispatch]);

//   useEffect(() => {
//     if (isInitial) {
//       isInitial = false;
//       return;
//     }

//     if (cart.changed) {
//       dispatch(sendCartData(cart));
//     }
//   }, [cart, dispatch]);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     const email = localStorage.getItem("email");
//     const avatar = localStorage.getItem("avatar");

//     if (token && email && avatar) {
//       setToken(token);
//       setEmail(email);
//       setAvatar(avatar);
//     }
//   }, [setToken, setEmail, setAvatar]);

//   useEffect(() => {
//     if (isLoggedIn) {
//       const lovedProductIdsJSON = localStorage.getItem("love");
//       if (lovedProductIdsJSON !== null) {
//         const lovedProductIds = JSON.parse(lovedProductIdsJSON);

//         setLovedProductIds(lovedProductIds);
//       }
//     }
//   }, [isLoggedIn, setLovedProductIds]);

//   const [isOpenLabel, setIsOpenLabel] = useState(false);
//   const handleClickLabel = () => {
//     setIsOpenLabel((prev) => !prev);
//   };

//   return (
//     <>
//       {showHeader && <Header />}
//       <main className="bg-[#fafafa] ">
//         {children}
//         {isOpenLabel && (
//           <div
//             className={`fixed right-[36px] top-[45vh] bg-[#F6F5F3] py-3 px-3 z-50 shadow-sm`}
//           >
//             <h3 className="font-semibold text-xl mb-5 pb-3 border-b-2 border-primary-color">
//               Cart ({totalQuantity})
//             </h3>
//             <div
//               className={`h-[250px] overflow-auto ${classes["custom-scrollbar"]} mb-3`}
//             >
//               <ul>
//                 {cartItems.map((cartItem) => (
//                   <li
//                     key={cartItem.id}
//                     className="flex items-center gap-2 rounded-sm px-3 py-2 mb-3"
//                   >
//                     <div className="relative h-24 w-24">
//                       <Image
//                         src={cartItem.img}
//                         layout="fill"
//                         className="object-cover"
//                         alt=""
//                       />
//                     </div>
//                     <div className="flex-1">
//                       <p className="font-medium max-w-[200px] mb-2">
//                         {cartItem.name}
//                       </p>
//                       <p className="font-medium mb-2">$ {cartItem.price}</p>
//                       <div className="flex-between mb-1 text-sm text-gray-700">
//                         <p>Size:</p>
//                         <p>{cartItem.size}</p>
//                       </div>
//                       <div className="flex-between mb-1 text-sm text-gray-700">
//                         <p>Quantity:</p>
//                         <p>{cartItem.quantity}</p>
//                       </div>
//                     </div>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <Link href="/cart" passHref>
//               <a
//                 className="uppercase bg-primary-color  font-medium text-lg
//                 rounded-full
//                 active:shadow-sm active:scale-[.98] active:translate-y-0
//                 active:bg-[#e5b32f]
//                 hover:bg-[#fecd48] hover:-translate-y-[2px]
//                 transition-all duration-[250ms]
//                 z-10 relative overflow-hidden
//                 py-3 px-5
//                 mx-auto
//                 group
//                 block text-center max-w-[150px]"
//               >
//                 Checkout
//                 <div
//                   className="-z-10 bg-[#ffffff33]
//                   absolute top-[-1000%] bottom-[-375%]
//                   w-9
//                   translate3d-rotate group-hover:transition group-hover:duration-[1000ms] group-hover:ease-in-out group-hover:translate3d-rotate-hover"
//                 ></div>
//               </a>
//             </Link>
//           </div>
//         )}
//         <button
//           onClick={handleClickLabel}
//           className="fixed right-0 top-[45vh] bg-primary-color py-3 px-2 flex flex-col items-center gap-1"
//         >
//           <p className="text-xl font-semibold">{totalQuantity}</p>
//           <GrSun className="text-xl font-semibold hover:text-[#eee] transition cursor-pointer" />
//         </button>

//         <div className="fixed right-0 top-[60vh] bg-[#666] py-3 px-2 flex flex-col gap-3">
//           <Link href="https://www.facebook.com/pH1109ji" passHref>
//             <a target="_blank">
//               <FaFacebookF className="text-xl text-[#999] hover:text-[#eee] transition cursor-pointer" />
//             </a>
//           </Link>
//           <Link href="https://www.youtube.com/watch?v=s5YjHRWba5A" passHref>
//             <a target="_blank">
//               <BsYoutube className="text-xl text-[#999] hover:text-[#eee] transition cursor-pointer" />
//             </a>
//           </Link>
//           <Link href="https://www.instagram.com/ph1109ji/" passHref>
//             <a target="_blank">
//               <BsInstagram className="text-xl text-[#999] hover:text-[#eee] transition cursor-pointer" />
//             </a>
//           </Link>
//         </div>
//       </main>
//       {showHeader && <footer className="h-[38px] bg-[#333333]"></footer>}
//     </>
//   );
// }

type AppProps = {
  children: React.ReactNode;
};
import Header from "@/components/layout/Header";
import { useAppDispatch, useAppSelector } from "src/store/redux-toolkit/hooks";
import sendCartData, { fetchCartData } from "src/store/redux-toolkit/cartThunk";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import useStore from "src/store/zustand/useStore";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram, BsYoutube } from "react-icons/bs";
import Link from "next/link";
import { GrSun } from "react-icons/gr";
import Image from "next/image";
import classes from "styles/scrollbar.module.css";
import "animate.css";
import { Transition } from "react-transition-group";
import hangerEmpty from "assets/hangerEmpty.png";
import { AiFillGithub } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { useAutoAnimate } from "@formkit/auto-animate/react";
let isInitial = true;

export default function Layout({ children }: AppProps): JSX.Element {
  const [parent] = useAutoAnimate();
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart);
  const router = useRouter();
  const setToken = useStore((state) => state.setToken);
  const setEmail = useStore((state) => state.setEmail);
  const setAvatar = useStore((state) => state.setAvatar);
  const isLoggedIn = useStore((state) => !!state.tokenId);
  const setLovedProductIds = useStore((state) => state.setLovedProductIds);
  const showHeader =
    router.pathname === "/auth" || router.pathname === "/" ? false : true;
  // This showHeader variable is used to decide whether or not to show not only HEADER but also FOOTER, LABELS
  const totalQuantity = useAppSelector((state) => state.cart.totalQuantity);
  const cartItems = useAppSelector((state) => state.cart.items);

  const nodeRef = useRef(null);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");
    const avatar = localStorage.getItem("avatar");

    if (token && email && avatar) {
      setToken(token);
      setEmail(email);
      setAvatar(avatar);
    }
  }, [setToken, setEmail, setAvatar]);

  useEffect(() => {
    if (isLoggedIn) {
      const lovedProductIdsJSON = localStorage.getItem("love");
      if (lovedProductIdsJSON !== null) {
        const lovedProductIds = JSON.parse(lovedProductIdsJSON);

        setLovedProductIds(lovedProductIds);
      }
    }
  }, [isLoggedIn, setLovedProductIds]);

  const [isOpenLabel, setIsOpenLabel] = useState(false);
  const handleClickLabel = () => {
    setIsOpenLabel((prev) => !prev);
  };

  useEffect(() => {
    setIsOpenLabel(false);
  }, [router.pathname]);

  return (
    <>
      {showHeader && <Header />}

      <main className=" bg-[#fafafa] dark:bg-[#191919] dark:text-[#DDDDDD]">
        {children}

        <Transition
          in={isOpenLabel}
          timeout={800}
          mountOnEnter
          unmountOnExit
          nodeRef={nodeRef}
        >
          {(state) => {
            return (
              <div
                ref={nodeRef}
                className={`fixed right-[36px] top-[45vh] bg-[#F6F5F3] py-3 px-3 z-20 shadow-sm ${
                  state === "entering"
                    ? "animate__animated animate__bounceInRight animate__fast"
                    : state === "exiting"
                    ? "animate__animated animate__bounceOutRight animate__fast"
                    : " "
                }`}
              >
                <h3 className="font-semibold text-xl mb-5 pb-3 border-b-2 border-primary-color">
                  Cart ({totalQuantity})
                </h3>
                <div
                  className={`h-[250px] overflow-auto ${classes["custom-scrollbar"]} mb-3`}
                >
                  {cartItems.length > 0 && (
                    <ul
                      // @ts-ignore
                      ref={parent}
                    >
                      {cartItems.map((cartItem) => (
                        <li
                          key={cartItem.id}
                          className="flex items-center gap-2 rounded-sm px-3 py-2 mb-3"
                        >
                          <div className="relative h-24 w-24">
                            <Image
                              src={cartItem.img}
                              layout="fill"
                              className="object-cover"
                              alt=""
                            />
                          </div>
                          <div className="flex-1">
                            <p className="font-medium max-w-[200px] mb-2">
                              {cartItem.name}
                            </p>
                            <p className="font-medium mb-2">
                              $ {cartItem.price}
                            </p>
                            <div className="flex-between mb-1 text-sm text-gray-700">
                              <p>Size:</p>
                              <p>{cartItem.size}</p>
                            </div>
                            <div className="flex-between mb-1 text-sm text-gray-700">
                              <p>Quantity:</p>
                              <p>{cartItem.quantity}</p>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                  {cartItems.length === 0 && (
                    <div className="py-14 px-10">
                      <div className="relative h-16 w-44 mb-6">
                        <Image
                          src={hangerEmpty}
                          layout="fill"
                          className="object-cover"
                          alt=""
                        />
                      </div>
                      <p className="font-medium text-gray-600 text-xl text-center">
                        Your cart is empty
                      </p>
                    </div>
                  )}
                </div>
                <Link href="/cart" passHref>
                  <a
                    className="uppercase bg-primary-color  font-medium text-lg
                rounded-full
                active:shadow-sm active:scale-[.98] active:translate-y-0 
                active:bg-[#e5b32f] 
                hover:bg-[#fecd48] hover:-translate-y-[2px] 
                transition-all duration-[250ms] 
                z-10 relative overflow-hidden 
                py-3 px-5
                mx-auto
                group
                block text-center max-w-[150px]"
                  >
                    Checkout
                    <div
                      className="-z-10 bg-[#ffffff33] 
                  absolute top-[-1000%] bottom-[-375%] 
                  w-9 
                  translate3d-rotate group-hover:transition group-hover:duration-[1000ms] group-hover:ease-in-out group-hover:translate3d-rotate-hover"
                    ></div>
                  </a>
                </Link>
              </div>
            );
          }}
        </Transition>

        {showHeader && (
          <button
            onClick={handleClickLabel}
            className="fixed right-0 top-[45vh] bg-primary-color py-3 px-2 flex flex-col items-center gap-1 z-30"
          >
            <p className="text-xl font-semibold">{totalQuantity}</p>
            <GrSun className="text-xl font-semibold hover:text-[#eee] transition cursor-pointer" />
          </button>
        )}
        {showHeader && (
          <div className="fixed right-0 top-[60vh] bg-[#666] py-3 px-2 flex flex-col gap-3 z-30">
            <Link href="https://www.facebook.com/fuocy" passHref>
              <a target="_blank">
                <FaFacebookF className="text-xl text-[#999] hover:text-[#eee] transition cursor-pointer" />
              </a>
            </Link>
            <Link href="https://www.youtube.com/watch?v=s5YjHRWba5A" passHref>
              <a target="_blank">
                <BsYoutube className="text-xl text-[#999] hover:text-[#eee] transition cursor-pointer" />
              </a>
            </Link>
            <Link href="https://www.instagram.com/h2.huu_huan/" passHref>
              <a target="_blank">
                <BsInstagram className="text-xl text-[#999] hover:text-[#eee] transition cursor-pointer" />
              </a>
            </Link>
          </div>
        )}
      </main>

      {showHeader && (
        <footer className="h-[38px] bg-[#333333] flex items-center px-10 justify-between">
          <p className="text-white">Copyright Fuocy © 2022</p>
          <div className="flex gap-4 items-center">
            <p className="text-white">Contact me: </p>
            <Link href="https://www.facebook.com/fuocy">
              <a>
                <BsFacebook
                  size={22}
                  className="text-white hover:text-blue-500 transition duration-300"
                />
              </a>
            </Link>
            <Link href="https://github.com/fuocy">
              <a>
                <AiFillGithub
                  size={25}
                  className="text-white hover:text-blue-500 transition duration-300"
                />
              </a>
            </Link>
          </div>
        </footer>
      )}
    </>
  );
}
