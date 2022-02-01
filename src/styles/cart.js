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
            height: 150px;
        }
    }
`;

export const PaymentSection = styled.section`
    width: 100%;
    height: 150px;
    margin: 10px;
    padding: 10px;
    border: 1px solid lightgray;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    ${media.desktop`
        width: 20%;
    `}

    p {
        font-size: 25px;
    }
`;

export const CouponSection = styled.section`
    width: 100%;
    margin: 10px;

    ${media.desktop`
        width: 61%;
    `}

    form {
        display: flex;

        input {
            padding: 10px;
        }
    }
`;

export const InputField = styled.input`
    width: 90%
`;

export const InputButton = styled.input`
    width: 20%;
    background-color: dodgerblue;
    color: white;
    border: none;
    cursor: pointer;

    :hover {
        background-color: #4BA6FF;
        transition: 0.3s;
    }
`;