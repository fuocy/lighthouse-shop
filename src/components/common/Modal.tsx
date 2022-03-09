import Image from "next/image";

import success from "assets/success.png";
import fail from "assets/fail.png";
import Portal from "./Portal";
import useStore from "src/store/zustand/useStore";
import React from "react";

type AppProps = {
  type: string;
  title: string;
  message: string;
  action: string;
};

export const Backdrop = () => {
  const setShowModal = useStore((state) => state.setShowModal);
  return (
    <div
      onClick={setShowModal}
      className="fixed top-0 left-0 w-full h-screen z-10 bg-black/75"
    ></div>
  );
};

export function ModalOverlay({ type, title, message, action }: AppProps) {
  const setShowModal = useStore((state) => state.setShowModal);
  const setIsSignIn = useStore((state) => state.setIsSignIn);
  const actionHandler = () => {
    if (type === "fail") {
      setShowModal();
    }

    if (type === "success") {
      setShowModal();
      setIsSignIn(true);
    }
  };

  return (
    <div
      className={`rounded-xl border-t-[12px] ${
        type === "success" ? "border-[#5ae9ba]" : "border-[#f86969]"
      } px-4 py-5 fixed top-[20vh] left-[37%] z-20 max-w-[400px] bg-white text-center`}
    >
      <div className="w-[150px] h-[150px] relative mb-5 mx-auto">
        <Image
          src={type === "success" ? success : fail}
          alt=""
          layout="fill"
          className="object-cover"
        />
      </div>
      <div className="text-2xl uppercase tracking-wider text-gray-700 mb-1">
        {title}
      </div>
      <p className="text-gray-500 leading-relaxed tracking-wider mb-8 ">
        {message}
      </p>
      <button
        onClick={actionHandler}
        className={`${
          type === "success" ? "bg-[#5ae9ba]" : "bg-[#f86969]"
        } py-5 px-10 rounded-full shadow-sm text-white`}
      >
        {action}
      </button>
    </div>
  );
}

export default function Modal({ type, title, message, action }: AppProps) {
  return (
    <Portal>
      <Backdrop />
      <ModalOverlay
        type={type}
        title={title}
        message={message}
        action={action}
      />
    </Portal>
  );
}
