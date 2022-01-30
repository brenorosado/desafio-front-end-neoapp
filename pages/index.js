import React, { useState, useContext } from "react";
import Comic from "../src/components/Comic";
import Pagination from "../src/components/Pagination";
import { HomeMain, HomeSection } from "../src/styles/homepage";
import { Context } from "../src/Context";
import Loading from "../src/components/Loading";

const ITEMS_PER_PAGE = 20;
const TOTAL_ITEMS = 100; // Limite de items da requisicao da api

const Home = () => {
  const [offset, setOffset] = useState(0);
  const { comicsData } = useContext(Context);

  let comicsToShow = comicsData ? comicsData.comics.slice(offset, offset + ITEMS_PER_PAGE) : null;

  return (
    <HomeMain>
      <HomeSection>
        { 
          comicsToShow ? comicsToShow.map(item => <Comic comic={item} />) : <Loading/>
        }
        <Pagination limit={ITEMS_PER_PAGE} total={TOTAL_ITEMS} offset={offset} setOffset={setOffset}/>
      </HomeSection>
    </HomeMain>
  );
};

export default Home;