import styled, { keyframes } from "styled-components";
import media from "./media";

const productAnimation = keyframes`
    100% {
        transform: scale(103%);
    }
`;

export const ProductArticle = styled.article`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;

    a {
        cursor: pointer;
        text-decoration: none;

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
            color: black;
            text-align: center;
            padding: 6px 0px;
            
            strong {
                color: gold;
            }

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
        font-size: 12px;
        border: none;
        border-radius: 3px;
        padding: 5px 10px;
        cursor: pointer;

        ${media.tablet`
            font-size: 13.5px;
        `}

        :hover {
            background-color: #4BA6FF;
            transition: 0.3s;
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