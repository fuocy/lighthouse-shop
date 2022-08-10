import Meta from "@/components/common/Meta";
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
      <Meta
        title="Lighthouse | Authentication"
        description="Lighthouse were my everything."
        image="/preview.png"
      />
      <Auth />;
    </>
  );
}
