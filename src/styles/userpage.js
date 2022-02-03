import styled from "styled-components";
import { FadeInAnimation } from "./homepage";

export const UserMain = styled.main`
    animation: ${FadeInAnimation} 0.5s both;
    position: absolute;
    width: 100%;
    padding: 100px 10px 10px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;