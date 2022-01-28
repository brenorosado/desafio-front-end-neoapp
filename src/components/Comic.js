import { ProductArticle, ComicInformation } from "../styles/comic";

const Comic = ({ comic }) => {
    let { title, thumbnail, prices } = comic;

    return (
        <ProductArticle key={title}>
            <a>
                <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={title} />
                <p>{title}</p>
                <ComicInformation>
                    <span>${prices[0].price === 0 ? 9.99 : prices[0].price}</span>
                    <button>Add to cart</button>
                </ComicInformation>
            </a>
        </ProductArticle>
    );
};

export default Comic;