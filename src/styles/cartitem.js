import styled from "styled-components";
import media from "./media";

export const ItemLine = styled.tr`
    td {
        padding: 10px;

        h4 {
            small {
                font-size: 14px;
                font-weight: normal;
            }
        }

        img {
            height: 150px;

            ${media.desktop`
                height: 174px;
            `}
        }
    }
`;

export const QuantityElement = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    
    div {
        display: flex;
        padding: 5px 0px;

        span {
            width: 30px;
            text-align: center;
        }

        button {
            border: none;
            cursor: pointer;
            background-color: white;
            width: 15px;
            padding-top: 2px;
            color: dodgerblue;
        }
    }
`;

export const RemoveButton = styled.button`
    color: red;
    font-weight: bold;
    font-size: 12px;
    background: white;
    border: none;
    cursor: pointer;
`;

export const PriceElement = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-width: 60px;

    span {
        font-weight: bold;
        color: green;
    }
`;