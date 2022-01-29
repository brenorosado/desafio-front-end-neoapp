import { GlobalStyle } from "../src/styles/global";
import { useRouter } from "next/router";
import { useEffect } from "react";
import NProgress from "nprogress";
import "../src/styles/nprogress.css";
import MenuNavBar from "../src/components/MenuNavBar";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleStart = (url) => {
      console.log(`Loading: ${url}`);
      NProgress.start();
    };

    const handleStop = () => {
      NProgress.done();
    };

    router.events.on("routeChangeStart", () => handleStart);
    router.events.on("routeChangeComplete", () => handleStop);
    router.events.on("routerChangeError", () => handleStop);
  
    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    };
  }, [router]);

  return (
    <>
      <MenuNavBar />
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};
