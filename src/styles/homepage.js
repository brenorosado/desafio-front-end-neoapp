import styled, { keyframes } from "styled-components";
import media from "./media";

export const FadeInAnimation = keyframes`
    0% {
        opacity: 0;
        top: 40px;
    }

    100% {
        opacity: 1;
        top: 0px;
    }
`;

export const HomeMain = styled.main`
    animation: ${FadeInAnimation} 0.5s both;
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