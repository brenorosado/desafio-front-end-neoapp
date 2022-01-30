import { ProductArticle, ComicInformation } from "../styles/comic";
import Link from "next/link";
import { Context } from "../Context";
import React, { useContext } from "react";

const Comic = ({ comic }) => {
    let { id, title, thumbnail, prices } = comic;
    const { setSelectedComic } = useContext(Context);

    return (
        <ProductArticle key={title}>
            <Link href={`/comic/${id}`} passHref>
                <a onClick={() => setSelectedComic(id)}>
                    <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={title} />
                    <p>{title}</p>
                </a>
            </Link>
            <ComicInformation>
                <span>{prices[0].price ? `$${prices[0].price}` : 'Free'}</span>
                <button>Add to Cart</button>
            </ComicInformation>
        </ProductArticle>
    );
};

export default Comic;