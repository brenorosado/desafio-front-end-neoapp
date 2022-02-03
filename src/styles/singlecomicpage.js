import styled from "styled-components";
import media from "./media";
import { FadeInAnimation } from "./homepage";

export const MainComicContent = styled.main`
    animation: ${FadeInAnimation} 0.5s both;
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 100px 10px 0px 10px;
`;

export const ComicContentSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${media.tablet`
        width: 80%
    `}

     ${media.desktop`
        width: 60%;
    `}

    table {
        width: 100%;
        border-collapse: collapse;
        background-color: #f3f3f3;

        tr {
        }

        td {
            padding: 5px;
            border: 1px solid gray;

            ul {
                list-style: none;
            }
        }
    }
`;

export const ContentContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    width: 100%;

    img {
        height: 300px;

        ${media.tablet`
            height: 400px;
        `}

        ${media.desktop`
            height: 500px;
        `}
    }
`;

export const ComicInfo = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 20px;

    h1 {
        font-size: 25px;

        ${media.desktop`
            font-size: 28px;
        `}
    }
`;

export const BuyInfo = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;

    span {
        color: green;
        font-weight: bold;
        font-size: 40px;
        margin-bottom: 20px;
    }

    button {
        background-color: dodgerblue;
        width: 100%;
        height: 50px;
        color: white;
        font-weight: bold;
        font-size: 20px;
        border: none;
        border-radius: 5px;
        padding: 5px 10px;
        cursor: pointer;

        ${media.tablet`
            width: 80%;
        `}

        ${media.desktop`
            width: 60%;
        `}

        ${media.widescreen`
            width: 40%;
        `}

        :hover {
            background-color: #4BA6FF;
            transition: 0.3s;
        }
    }
`;
