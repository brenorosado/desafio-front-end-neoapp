import { useState, useEffect } from "react";
import Comic from "../src/components/Comic";
import Pagination from "../src/components/Pagination";
import { HomeMain, HomeSection } from "../src/styles/homepage";

const ITEMS_PER_PAGE = 20;
const TOTAL_ITEMS = 100; // Limite de items da requisicao da api

const Home = ({ data }) => {
  const [offset, setOffset] = useState(0);
  let comicsToShow = data.comics.slice(offset, offset + ITEMS_PER_PAGE);

  return (
    <HomeMain>
      <HomeSection>
        {
          comicsToShow.map(item => <Comic comic={item} />)
        }
        <Pagination limit={ITEMS_PER_PAGE} total={TOTAL_ITEMS} offset={offset} setOffset={setOffset}/>
      </HomeSection>
    </HomeMain>
  );
};

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/comics');
  const json = await res.json();

  return {
    props: {
      data: json
    }
  }
};

export default Home;