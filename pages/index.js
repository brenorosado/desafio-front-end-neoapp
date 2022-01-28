import Comic from "../src/components/Comic";
import { HomeMain } from "../src/styles/homepage";

const Home = ({ data }) => {

  return (
    <HomeMain>
      {
        data.comics.map(item => <Comic comic={item}/>)
      }
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