import Comic from "../src/components/Comic";
import { HomeMain, HomeSection } from "../src/styles/homepage";

const Home = ({ data }) => {

  return (
    <HomeMain>
      <HomeSection>
        {
          data.comics.map(item => <Comic comic={item} />)
        }
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