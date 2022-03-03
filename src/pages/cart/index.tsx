import Cart from "@/components/Cart/Cart";
import Head from "next/head";

export default function CartPage() {
  return (
    <>
      <Head>
        <title>Your cart</title>
        <link rel="icon" href="/favicon-sun.ico" />
        <meta name="description" content="Your cart is here. Buy now" />
      </Head>
      <Cart />;
    </>
  );
}
