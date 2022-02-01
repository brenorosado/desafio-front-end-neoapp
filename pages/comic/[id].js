import { useContext } from "react";
import SingleComicPage from "../../src/components/SingleComicPage";
import { Context } from "../../src/Context";
import Loading from "../../src/components/Loading";

const ComicPage = ({ id }) => {
    const { comicsData } = useContext(Context);
    
    let comicToShow = null;
    
    if (comicsData) {
        comicsData.comics.map(item => {
            if (item.id === Number(id)) comicToShow = item;
        });

        return (
            <SingleComicPage comic={comicToShow}
            />
        );
    };

    return <Loading />;
};

export async function getServerSideProps(context) {
    return {
        props: {
            id: context.query.id,
        }
    }
};

export default ComicPage;