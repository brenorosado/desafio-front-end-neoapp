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

export const EmptyCartElement = styled.td`
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    button {
        background-color: dodgerblue;
        color: white;
        padding: 10px;
        border: none;
        width: 150px;
        cursor: pointer;

        :hover {
            background-color: #4BA6FF;
            transition: 0.3s;
        }
    }
`;

export const PaymentSection = styled.section`
    width: 100%;
    height: 200px;
    margin: 10px;
    padding: 10px;
    border: 1px solid lightgray;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    ${media.desktop`
        width: 25%;
    `}

    p {
        font-size: 25px;
    }

    button {
        background-color: dodgerblue;
        color: white;
        padding: 12px;
        border: none;
        cursor: pointer;
        width: 50%;

        ${media.desktop`
            width: 100%;
        `}

        :hover {
            background-color: #4BA6FF;
            transition: 0.3s;
        }
    }
`;

export const CouponSection = styled.section`
    width: 100%;
    margin: 10px;

    ${media.desktop`
        width: 66%;
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