import styled from "styled-components";

export const PageLoaderContainer = styled.div`
    animation: is-rotating 1s infinite;
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 9;
    width: 40px;
    height: 40px;
    border: 3px solid white;
    border-top-color: dodgerblue;
    border-radius: 50%;

    @keyframes is-rotating {
        to {
            transform: rotate(1turn);
        }
    }
`;