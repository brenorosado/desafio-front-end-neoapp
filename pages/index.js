import React, { useState, useContext } from "react";
import Comic from "../src/components/Comic";
import Pagination from "../src/components/Pagination";
import { HomeMain, HomeSection } from "../src/styles/homepage";
import { Context } from "../src/Context";
import Loading from "../src/components/Loading";
import { ITEMS_PER_PAGE, TOTAL_ITEMS } from "./_app";

const Home = () => {
  const [offset, setOffset] = useState(0);
  const { comicsData } = useContext(Context);

  let comicsToShow = comicsData ? comicsData.comics.slice(offset, offset + ITEMS_PER_PAGE) : null;

  return comicsToShow ? (
    <HomeMain>
      <HomeSection>
        {
          comicsToShow.map(item => <Comic comic={item} />)
        }
        <Pagination limit={ITEMS_PER_PAGE} total={TOTAL_ITEMS} offset={offset} setOffset={setOffset} />
      </HomeSection>
    </HomeMain>
  ) : <Loading />;
};

export default Home;