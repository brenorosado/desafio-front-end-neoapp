import styled, { keyframes } from "styled-components";
import media from "./media";

const productAnimation = keyframes`
    0% {
        transform: translateY(0px);
    }

    100% {
        transform: scale(103%);
    }
`;

export const ProductArticle = styled.article`
    width: 100%;
    background-color: rgba(255, 255, 255, 0.1);

    a {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 100%;
        cursor: pointer;

        img {
            width: 100%;
            box-shadow: 2px 5px 10px #888888;

            :hover {
                animation: ${productAnimation} 0.3s ease-out forwards;
            }
        }

        p {
            font-size: 14px;
            font-family: Arial, sans-serif;
            font-weight: bold;
            text-align: center;
            padding: 6px 0px;
            
            ${media.tablet`
                font-size: 15px;
            `}
        }
    }
`;

export const ComicInformation = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;

    button {
        background-color: dodgerblue;
        color: white;
        font-weight: bold;
        font-size: 11px;
        border: none;
        border-radius: 5px;
        padding: 5px 10px;
        cursor: pointer;
        box-shadow: inset 0 0 0 0 green;
        transition: ease-out 0.3s;

        ${media.tablet`
            font-size: 13.5px;
        `}

        :hover {
            box-shadow: inset 150px 0 0 0 green;
        }
    }

    span {
        font-weight: bold;
        font-size: 18px;
        color: green;
        font-family: sans-serif;

        ${media.tablet`
            font-size: 21px;
        `}
    }
`;