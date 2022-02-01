import { ProductArticle, ComicInformation, AddedMessageContainer } from "../styles/comic";
import { BsFillStarFill } from 'react-icons/bs';
import Link from "next/link";
import { Context } from "../Context";
import React, { useContext, useState } from "react";

const Comic = ({ comic }) => {
    let { id, title, thumbnail, prices, comicType } = comic;
    const { cartItems, setCartItems } = useContext(Context);

    return (
        <ProductArticle key={title}>
            <Link href={`/comic/${id}`} passHref>
                <a>
                    <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={title} />
                    <p><strong>{(comicType === 'rare') ? <BsFillStarFill /> : ''} </strong>{title}</p>
                </a>
            </Link>
            <ComicInformation>
                <span>{prices[0].price ? `$${prices[0].price}` : 'Free'}</span>
                <Link href={`/cart/${id}`}>
                    <button onClick={() => setCartItems([...cartItems, comic])}>Add to Cart</button>
                </Link>
            </ComicInformation>

        </ProductArticle >
    );
};

export default Comic;