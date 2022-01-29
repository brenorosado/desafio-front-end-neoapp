import { MainComicContent, ComicContentSection, ContentContainer, ComicInfo, BuyInfo } from "../styles/singlecomicpage";

const SingleComicPage = ({ title, description, pageCount, prices, series, thumbnail, creators }) => {
    return (
        <MainComicContent>
            <ComicContentSection>
                <ContentContainer>
                    <img src={`${thumbnail.path}.${thumbnail.extension}`} />
                    <ComicInfo>
                        <h1>{title}</h1>
                        <BuyInfo>
                            <span>${prices[0].price ? prices[0].price : 10}</span>
                            <button>Add to Cart</button>
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
