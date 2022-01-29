import { ProductArticle, ComicInformation } from "../styles/comic";

const Comic = ({ comic }) => {
    let { title, thumbnail, prices } = comic;

    const getRandomPriceForPricelessComics = (minPrice, maxPrice) => (Math.random() * (maxPrice - minPrice) + minPrice).toFixed(2);

    return (
        <ProductArticle key={title}>
            <a href={`/comic/${comic.id}`} key={title}>
                <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={title} />
                <p>{title}</p>
                <ComicInformation>
                    <span>${prices[0].price === 0 ? getRandomPriceForPricelessComics(3.99, 100) : prices[0].price}</span>
                    <button>Add to Cart</button>
                </ComicInformation>
            </a>
        </ProductArticle>
    );
};

export default Comic;