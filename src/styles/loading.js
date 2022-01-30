import styled from 'styled-components';

export const LoaderContainer = styled.div`
    position: fixed;
    top: 20px;
    right: 20px;     
    animation: is-rotating 1s infinite;
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