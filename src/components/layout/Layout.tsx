import Header from "@/components/layout/Header";

type AppProps = {
  children: React.ReactNode;
};

import { useAppDispatch, useAppSelector } from "src/store/hooks";
import sendCartData, { fetchCartData } from "src/store/cartThunk";
import { useEffect } from "react";
import { useRouter } from "next/router";
import useStore from "src/store/store-zustand/useStore";
let isInitial = true;

export default function Layout({ children }: AppProps): JSX.Element {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart);
  const router = useRouter();
  const setToken = useStore((state) => state.setToken);
  const setEmail = useStore((state) => state.setEmail);
  const setAvatar = useStore((state) => state.setAvatar);
  const isLoggedIn = useStore((state) => !!state.tokenId);
  const setLovedProductIds = useStore((state) => state.setLovedProductIds);
  const showHeader = router.pathname === "/auth" ? false : true;

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

  return (
    <>
      {showHeader && <Header />}
      <main className="bg-[#fafafa]">{children}</main>
      {showHeader && <footer className="h-[38px] bg-[#333333]"></footer>}
    </>
  );
}
