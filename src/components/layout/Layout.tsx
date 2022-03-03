import Header from "@/components/layout/Header";

type AppProps = {
  children: React.ReactNode;
};

import { useAppDispatch, useAppSelector } from "src/store/hooks";
import sendCartData, { fetchCartData } from "src/store/cartThunk";
import { useEffect } from "react";
let isInitial = true;

export default function Layout({ children }: AppProps): JSX.Element {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart);

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

  return (
    <>
      <Header />
      <main className="bg-[#fafafa]">{children}</main>
      <footer className="h-[38px] bg-[#333333]"></footer>
    </>
  );
}
