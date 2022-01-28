import { GlobalStyle } from "../src/styles/global";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Link from "next/link";
import NProgress from "nprogress";
import "../src/styles/nprogress.css";

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
      <nav>
        <Link href="/"><a>Home</a></Link>
        <Link href="/cart"><a>Cart</a></Link>
      </nav>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};
