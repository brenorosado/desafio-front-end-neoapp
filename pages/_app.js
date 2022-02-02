import { GlobalStyle } from "../src/styles/global";
import MenuNavBar from "../src/components/MenuNavBar";
import React, { useEffect, useState } from "react";
import { Context } from "../src/Context";

export const ITEMS_PER_PAGE = 20;
export const TOTAL_ITEMS = 100; // Limite de items da requisicao da api

export default function App({ Component, pageProps }) {
  const [comicsData, setComicsData] = useState(null);
  const [selectedComic, setSelectedComic] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [usedCoupons, setUsedCoupons] = useState([]);
  const [couponInformation, setCouponInformation] = useState(null);

  useEffect(() => {
    const fetchComicsData = async () => {
      const res = await fetch('http://localhost:3000/api/comics');
      const json = await res.json();

      //Gerando HQs raras aleatoriamente
      let numbers = [];

      while (numbers.length < Math.floor(TOTAL_ITEMS / 10)) {
        let randomNumber = Math.floor(Math.random() * (TOTAL_ITEMS));
        (numbers.includes(randomNumber)) ? null : numbers.push(randomNumber);
      };

      let controlVariable = 0;
      let aux = json;

      aux.comics.map(item => {
        const newItem = numbers.includes(controlVariable) ? Object.assign(item, { comicType: 'rare' }) : Object.assign(item, { comicType: 'common' });
        controlVariable++;
        return newItem;
      });

      setComicsData(aux);
    };

    fetchComicsData();
  }, []);


  return (
    <>
      <Context.Provider value={{ selectedComic, setSelectedComic, comicsData, setComicsData, cartItems, setCartItems, usedCoupons, setUsedCoupons, couponInformation, setCouponInformation }}>
        <MenuNavBar />
        <GlobalStyle />
        <Component {...pageProps} />
      </Context.Provider>
    </>
  );
};
