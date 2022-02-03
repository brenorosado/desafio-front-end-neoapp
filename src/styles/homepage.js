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

export const InputField = styled.input`
    width: 90%
`;

export const InputButton = styled.input`
    width: 20%;
    background-color: dodgerblue;
    color: white;
    border: none;
    cursor: pointer;
    font-weight: bold;

    ${media.desktop`
        width: 10%;
    `}

    :hover {
        background-color: #4BA6FF;
        transition: 0.3s;
    }
`;

export const HomeSection = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 150px);
    justify-content: center;
    grid-gap: 15px;

    form {
        width: 100%;
        display: flex;
        grid-column: 1 / 3;

        input {
            padding: 10px;
        }

        ${media.tablet`
            grid-column: 1 / 4;
        `}

        ${media.desktop`
            grid-column: 1 / 5;
        `}

        ${media.widescreen`
            grid-column: 1 / 6;
        `}
    }

    ${media.tablet`
        grid-template-columns: repeat(3, 200px);
        grid-gap: 25px;
    `}

    ${media.desktop`
        grid-template-columns: repeat(4, 200px);
    `}

    ${media.widescreen`
        grid-template-columns: repeat(5, 200px);
    `}
`;