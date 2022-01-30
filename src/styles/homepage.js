import styled from "styled-components";
import media from "./media";

export const HomeMain = styled.main`
    padding-top: 100px;
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const HomeSection = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 40%);
    justify-content: center;
    grid-gap: 25px;

    ${media.tablet`
        grid-template-columns: repeat(3, 200px)
    `}

    ${media.desktop`
        grid-template-columns: repeat(4, 200px);
    `}

    ${media.widescreen`
        grid-template-columns: repeat(5, 200px);
    `}
`;