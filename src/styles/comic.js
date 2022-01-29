import styled from "styled-components";
import media from "./media";

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

        img {
            width: 100%;
            box-shadow: 2px 5px 10px #888888;
        }

        p {
            font-size: 14px;
            text-align: center;
            padding: 6px 0px;
            
            ${media.tablet`
                font-size: 16px;
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

        ${media.tablet`
            font-size: 13.5px;
        `}
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