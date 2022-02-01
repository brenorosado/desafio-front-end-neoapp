import styled from 'styled-components';
import media from './media';

export const LoaderWrapper = styled.div`
    height: 80vh;
    grid-column: 1 / 3;
    display: flex;
    justify-content: center;
    align-items: center;

    ${media.tablet`
        grid-column: 1 / 4;
    `}

    ${media.desktop`
        grid-column: 1 / 5;
    `}

    ${media.widescreen`
        grid-column: 1 / 6;
    `}
`;

export const LoaderContainer = styled.div`
    animation: is-rotating 1s infinite;
    width: 100px;
    height: 100px;
    border: 7px solid white;
    border-top-color: dodgerblue;
    border-radius: 50%;

    @keyframes is-rotating {
        to {
            transform: rotate(1turn);
        }
    }
`;