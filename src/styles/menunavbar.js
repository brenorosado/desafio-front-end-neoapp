import styled from "styled-components";

export const NavBar = styled.nav`
    position: fixed;
    width: 100%;
    height: 80px;
    background-color: black;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    a {
        text-decoration: none;
        color: white;
        font-size: 20px;
        padding: 0px 20px;
    }
`;