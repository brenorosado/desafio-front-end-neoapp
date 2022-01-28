import styled from "styled-components";

export const ProductArticle = styled.article`
    width: 100%;
    background-color: rgba(255, 255, 255, 0.1);
    ${'' /* border: 1px solid black; */}

    a {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 100%;
        ${'' /* border: 1px solid red; */}

        img {
            width: 200px;
            box-shadow: 2px 5px 10px #888888;
        }

        p {
            font-size: 16px;
            text-align: center;
            padding: 6px 0px;
        }
    }
`;

export const ComicInformation = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    button {
        background-color: dodgerblue;
        color: white;
        border: none;
        border-radius: 5px;
        padding: 5px 10px;
        cursor: pointer;
    }

    span {
        font-weight: bold;
        font-size: 21px;
        color: green;
    }
`;