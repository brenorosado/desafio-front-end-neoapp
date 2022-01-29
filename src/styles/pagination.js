import styled from "styled-components";
import media from "./media";

export const PaginationContainer = styled.div`
    grid-column: 1 / 3;
    width: 100%;
    ${'' /* border: 1px solid red; */}
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;

    ${media.tablet`
        grid-column: 1 / 4;
    `}

    ${media.desktop`
        grid-column: 1 / 5;
    `}

    ${media.widescreen`
        grid-column: 1 / 6;
    `}

    button {
        background-color: dodgerblue;
        width: 30px;
        height: 30px;
        border-radius: 5px;
        color: white;
        font-size: 15px;
        border: none;
        padding: 5px;
        cursor: pointer;
    }

    span {
        width: 30px;
        height: 30px;
        margin: 0px 10px;
        font-weight: bold;
        font-size: 18px;
        background-color: lightgray;
        border: 1px solid gray;
        border-radius: 5px;
        text-align: center;
    }
`;