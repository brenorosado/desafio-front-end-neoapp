import React, { useContext } from "react";
import { MainComicContent, ComicContentSection, RarityInfo, ContentContainer, ComicInfo, BuyInfo } from "../styles/singlecomicpage";
import { BsFillStarFill } from 'react-icons/bs';
import { Context } from "../Context";

const SingleComicPage = ({ comic }) => {
    const { cartItems, setCartItems } = useContext(Context);
    const { title, description, dates, format, pageCount, prices, series, thumbnail, creators, comicType } = comic;
    
    return (
        <MainComicContent>
            <ComicContentSection>
                <ContentContainer>
                    <img src={`${thumbnail.path}.${thumbnail.extension}`} />
                    <ComicInfo>
                        <h1>{title}</h1>
                        <small>
                            <RarityInfo rarity={(comicType === 'rare') ? 'gold' : 'black'}>Rarity: 
                            {
                                comicType === 'rare' ? (<><span> <BsFillStarFill /> </span>Rare</>) : (<span> Common</span>)
                            }
                            </RarityInfo>
                        </small>
                        <small><strong>Format: </strong>{format}</small>
                        <small><strong>Published: </strong> {dates[0].date.split("T")[0]}</small>


                        <BuyInfo>
                            <span>{prices[0].price ? `$${prices[0].price}` : 'Free'}</span>
                            <button onClick={() => cartItems.includes(comic) ? null : setCartItems([...cartItems, comic])}>Add to Cart</button>
                        </BuyInfo>
                    </ComicInfo>
                </ContentContainer>
                <table>
                    <tbody>
                        <tr>
                            <td><strong>Description</strong></td>
                            <td><p>{description ? description : 'Unavailable'}</p></td>
                        </tr>
                        <tr>
                            <td><strong>Series</strong></td>
                            <td><p>{series.name}</p></td>
                        </tr>
                        <tr>
                            <td><strong>Pages</strong></td>
                            <td><p>{pageCount}</p></td>
                        </tr>
                        <tr>
                            <td><strong>Creators</strong></td>
                            <td>
                                <ul>
                                    {
                                        creators.items.map(item => (
                                            <li key={item.name}>{item.name} ({item.role})</li>
                                        ))
                                    }
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </ComicContentSection>
        </MainComicContent>
    );
};

export default SingleComicPage;
