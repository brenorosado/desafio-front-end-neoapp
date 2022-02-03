import React, { useContext } from "react";
import { MainComicContent, ComicContentSection, ContentContainer, ComicInfo, BuyInfo } from "../styles/singlecomicpage";
import { Context } from "../Context";
import Link from "next/link";

const SingleComicPage = ({ comic }) => {
    const { cartItems, setCartItems } = useContext(Context);
    const { id, title, description, dates, format, pageCount, prices, series, thumbnail, creators, comicType } = comic;

    return (
        <MainComicContent>
            <ComicContentSection>
                <ContentContainer>
                    <img src={`${thumbnail.path}.${thumbnail.extension}`} />
                    <ComicInfo>
                        <h1>{title}</h1>
                        <small><strong>Raridade: </strong>
                                {comicType === 'raro' ? (<span>Raro</span>) : (<span>Comum</span>)}
                        </small>
                        <small><strong>Formato: </strong>{format}</small>
                        <small><strong>Publicado: </strong> {dates[0].date.split("T")[0]}</small>


                        <BuyInfo>
                            <span>{prices[0].price ? `$${prices[0].price}` : 'Grátis'}</span>
                            <Link href={`/cart/${id}`}>
                                <button onClick={() => setCartItems([...cartItems, comic])}>Comprar</button>
                            </Link>
                        </BuyInfo>
                    </ComicInfo>
                </ContentContainer>
                <table>
                    <tbody>
                        <tr>
                            <td><strong>Descrição</strong></td>
                            <td><p>{description ? description : 'Indisponível'}</p></td>
                        </tr>
                        <tr>
                            <td><strong>Série</strong></td>
                            <td><p>{series.name}</p></td>
                        </tr>
                        <tr>
                            <td><strong>Páginas</strong></td>
                            <td><p>{pageCount}</p></td>
                        </tr>
                        <tr>
                            <td><strong>Criadores</strong></td>
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
