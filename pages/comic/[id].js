import SingleComicPage from "../../src/components/SingleComicPage";

const ComicPage = ({ data }) => {
    const { title, description, pageCount, prices, series, thumbnail, creators } = data[0];

    return (
            <SingleComicPage
                title={title}
                description={description}
                pageCount={pageCount}
                prices={prices}
                series={series}
                thumbnail={thumbnail}
                creators={creators}
            />
    );
};

export async function getServerSideProps(context) {
    const res = await fetch(`http://localhost:3000/api/comic/${context.query.id}`);
    const json = await res.json();

    return {
        props: {
            data: json.info
        }
    }
};

export default ComicPage;