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
            <SingleComicPage
                title={comicToShow.title}
                description={comicToShow.description}
                dates={comicToShow.dates}
                format={comicToShow.format}
                pageCount={comicToShow.pageCount}
                prices={comicToShow.prices}
                series={comicToShow.series}
                thumbnail={comicToShow.thumbnail}
                creators={comicToShow.creators}
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