import { GlobalStyle } from "../src/styles/global";
import MenuNavBar from "../src/components/MenuNavBar";
import React, { useEffect, useReducer, useState } from "react";
import { Context } from "../src/Context";
import { useRouter } from "next/router";
import PageLoading from "../src/components/PageLoading";

export var ITEMS_PER_PAGE = 20;
export var TOTAL_ITEMS; // Quantidade de quadrinhos que a API retorna

export default function App({ Component, pageProps }) {
  const [comicsData, setComicsData] = useState(null);
  const [selectedComic, setSelectedComic] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [usedCoupons, setUsedCoupons] = useState([]);
  const [couponInformation, setCouponInformation] = useState(null);
  const [pageLoading, setPageLoading] = useState(false);
  const [orders, setOrders] = useState([]);

  const router = useRouter();

  useEffect(() => {

    const handleStart = () => setPageLoading(true);
    const handleStop = () => setPageLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);
  }, [router])


  useEffect(() => {
    const fetchComicsData = async () => {
      const res = await fetch('/api/comics');
      const json = await res.json();
      
      TOTAL_ITEMS = json.count;

      //Gerando HQs raras aleatoriamente
      let numbers = [];

      while (numbers.length < Math.floor(TOTAL_ITEMS / 10)) {
        let randomNumber = Math.floor(Math.random() * (TOTAL_ITEMS + 1));
        (numbers.includes(randomNumber)) ? null : numbers.push(randomNumber);
      };

      let controlVariable = 0;
      let aux = json;

      aux.comics.map(item => {
        const newItem = numbers.includes(controlVariable) ? Object.assign(item, { comicType: 'raro' }) : Object.assign(item, { comicType: 'comum' });
        controlVariable++;
        return newItem;
      });

      setComicsData(aux);
    };

    fetchComicsData();
  }, []);

  return (
    <>
      <Context.Provider value={{ selectedComic, setSelectedComic, comicsData, setComicsData, cartItems, setCartItems, usedCoupons, setUsedCoupons, couponInformation, setCouponInformation, orders, setOrders }}>
        <MenuNavBar />
        <GlobalStyle />
        <Component {...pageProps} />
      </Context.Provider>
      {
        pageLoading ? <PageLoading/> : null
      }
    </>
  );
};
