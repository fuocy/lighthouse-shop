import "styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/layout/Layout";
import { Provider } from "react-redux";
import store from "src/store/redux-toolkit/store";
import { debounce } from "debounce";
import { saveState } from "@/components/common/browser-storage";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  //////////////////////////////////////////////////////////////////////
  /////////////////////BAR_PROCESS/////////////////////////////////////
  // import NProgress from "nprogress";
  // import "styles/nprogress.css";
  // import { useEffect } from "react";
  // import { useRouter } from "next/router";
  // const router = useRouter();

  // useEffect(() => {
  //   const handleStart = (url: string) => {
  //     NProgress.start();
  //   };
  //   const handleStop = () => {
  //     NProgress.done();
  //   };

  //   router.events.on("routeChangeStart", handleStart);
  //   router.events.on("routeChangeComplete", handleStop);
  //   router.events.on("routeChangeError", handleStop);

  //   return () => {
  //     router.events.off("routeChangeStart", handleStart);
  //     router.events.off("routeChangeComplete", handleStop);
  //     router.events.off("routeChangeError", handleStop);
  //   };
  // }, [router]);
  //////////////////////////////////////////////////////////////////////

  store.subscribe(
    debounce(() => {
      saveState(store.getState());
    }, 800)
  );

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon-sun.ico" type="image/x-icon" />
      </Head>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}

export default MyApp;

// async redirects() {
//   return [{ source: "/", destination: "/men", permanent: false }];
// },
