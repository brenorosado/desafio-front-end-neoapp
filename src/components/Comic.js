import { ProductArticle, ComicInformation } from "../styles/comic";
import { BsFillStarFill } from 'react-icons/bs';
import Link from "next/link";
import { Context } from "../Context";
import React, { useContext } from "react";

const Comic = ({ comic }) => {
    let { id, title, thumbnail, prices, comicType } = comic;
    const { cartItems, setCartItems } = useContext(Context);

    return (
        <ProductArticle key={title}>
            <Link href={`/comic/${id}`} passHref>
                <a>
                    <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={title} />
                    <p><strong>{(comicType === 'rare') ? <BsFillStarFill/> : ''} </strong>{title}</p>
                </a>
            </Link>
            <ComicInformation>
                <span>{prices[0].price ? `$${prices[0].price}` : 'Free'}</span>
                <button onClick={() => cartItems.includes(comic) ? null : setCartItems([...cartItems, comic])}>Add to Cart</button>
            </ComicInformation>
        </ProductArticle>
    );
};

export default Comic;