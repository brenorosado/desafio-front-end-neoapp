import styled from "styled-components";

export const NavBar = styled.nav`
    position: fixed;
    z-index: 1;
    width: 100%;
    height: 80px;
    background-color: black;

    ul {
        height: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        img {
            height: 60px;
        }
        
        a {
            text-decoration: none;
            color: white;
            font-size: 20px;
            padding: 0px 20px;

            :hover {
                color: #4BA6FF;
                transition: 0.3s;
            }
        }

        span {
            color: white;
        }
    }
`;
