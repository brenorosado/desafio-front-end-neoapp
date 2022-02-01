import styled from "styled-components";
import media from "./media";

export const ItemAddedMain = styled.main`
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    section {
        width: 100%;

        h1 {
            text-align: center;
            margin-bottom: 10px;
            
            strong {
                color: green;
                font-size: 20px;
            }
        }

        ${media.desktop`
            width: 40%;
        `}

    }
`;

export const ItemContainer = styled.article`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border: 1px solid lightgray;
    padding: 10px;
    margin-bottom: 10px;

    img {
        height: 150px;
        margin-right: 10px;
    }
`;

export const ButtonsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    button {
        width: 48%;
        padding: 10px;
        background-color: dodgerblue;
        color: white;
        border: none;
        cursor: pointer;

        :hover {
            background-color: #4BA6FF;
            transition: 0.3s;
        }
    }
`;