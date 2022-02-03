import styled, { keyframes } from "styled-components";
import media from "./media";

const productAnimation = keyframes`
    100% {
        transform: scale(103%);
    }
`;

const buttonGradientBackgroundAnimation = keyframes`
    0% {
        background-position: 0 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0 50%;
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
        :hover {
            animation: ${productAnimation} 0.3s ease-out forwards;
        }

        img {
            box-shadow: 2px 5px 10px #888888;
        }

        p {
            font-size: 14px;
            font-family: Arial, sans-serif;
            font-weight: bold;
            color: black;
            text-align: center;
            padding: 6px 0px;
            height: 40px;
            margin-bottom: 8px;
            overflow: hidden;
            
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
    justify-content: space-between;
    align-items: center;

    button {
        background-color: dodgerblue;
        color: white;
        font-weight: bold;
        font-size: 12px;
        border: none;
        border-radius: 3px;
        padding: 7px 20px;
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

export const RarityInfo = styled.div`
    animation: ${buttonGradientBackgroundAnimation} 5s ease infinite;
    width: 100%;
    background: linear-gradient(-45deg, ${props => props.gradient}) no-repeat;
    background-size: 300% 300%;
    color: white;
    font-weight: bold;
    padding: 4px 0px 1px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
`;