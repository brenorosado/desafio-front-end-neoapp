import { ProductArticle, ComicInformation, RarityInfo } from "../styles/comic";
import Link from "next/link";
import Image from "next/image";
import { Context } from "../Context";
import React, { useContext } from "react";

const Comic = ({ comic }) => {
    let { id, title, thumbnail, prices, comicType } = comic;
    const { cartItems, setCartItems } = useContext(Context);

    return (
        <ProductArticle key={title}>
            <Link href={`/comic/${id}`} passHref>
                <a>
                    <RarityInfo gradient={(comicType === 'raro') ? '#4e3bad, #aa58cc, #6826ad, #8f06bf' : '#482cd2, #5895cc, #2646ad, #0f06bf'}>{(comicType === 'raro') ? 'RARO' : 'COMUM'}</RarityInfo>
                    <Image src={`${thumbnail.path}.${thumbnail.extension}`} alt={title} height={300} width={200} />
                    <p>{title}</p>
                </a>
            </Link>
            <ComicInformation>
                <span>{prices[0].price ? `$${prices[0].price}` : 'Grátis'}</span>
                <Link href={`/cart/${id}`}>
                    <button onClick={() => setCartItems([...cartItems, comic])}>Comprar</button>
                </Link>
            </ComicInformation>

        </ProductArticle>
    );
};

export default Comic;