import styled from "styled-components";
import media from "./media";

export const CartMain = styled.main`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding-top: 90px;
`;

export const CartSection = styled.section`
    width: 100%;
    margin: 10px;

    ${media.desktop`
        width: 40%;
    `}
    
    table {
        border-collapse: collapse;
        width: 100%;
        text-align: center;
        
        td {
            border: 1px solid lightgray;
        }
    }
`;

export const PaymentSection = styled.section`
    width: 100%;
    margin: 10px;
    padding: 10px;
    border: 1px solid lightgray;

    ${media.desktop`
        width: 20%;
    `}

    p {
        font-size: 25px;

        strong {
            font-size: 30px;
        }
    }
`;