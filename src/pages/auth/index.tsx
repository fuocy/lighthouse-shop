import Auth from "@/components/login/Auth";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import useStore from "src/store/zustand/useStore";

export default function LoginPage() {
  const router = useRouter();
  const isLoggedIn = useStore((state) => !!state.tokenId);

  useEffect(() => {
    if (isLoggedIn) {
      router.push("/men");
    }
  }, [isLoggedIn, router]);

  return (
    <>
      <Head>
        <title>Lighthouse | Authentication </title>
        <link rel="icon" href="/favicon-sun.ico" />
        <meta name="description" content="Lighthouse were my everything." />
      </Head>
      <Auth />;
    </>
  );
}
