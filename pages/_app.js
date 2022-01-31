import { GlobalStyle } from "../src/styles/global";
import { useRouter } from "next/router";
import MenuNavBar from "../src/components/MenuNavBar";
import React, { useEffect, useState } from "react";
import Loading from "../src/components/Loading";
import { Context } from "../src/Context";

export default function App({ Component, pageProps }) {
  const [comicsData, setComicsData] = useState(null);
  const [selectedComic, setSelectedComic] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchComicsData = async () => {
      const res = await fetch('http://localhost:3000/api/comics');
      const json = await res.json();
  
      setComicsData(json);
    };
  
    fetchComicsData();
  }, []);
    
  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleStop = () => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routerChangeError", handleStop);
  }, [router]);


  return (
    <>
      <Context.Provider value={{selectedComic, setSelectedComic, comicsData, cartItems, setCartItems}}>
        <MenuNavBar />
        <GlobalStyle />
        <Component {...pageProps}/>
      </Context.Provider>
      { loading && (<Loading/>)}
    </>
  );
};
