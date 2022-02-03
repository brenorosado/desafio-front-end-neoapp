import styled from "styled-components";
import media from "./media";

export const SectionOrders = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    ${media.desktop`
        width: 50%;
    `}

    ${media.widescreen`
        width: 40%;
    `}

    h1 {
        margin-bottom: 10px;
    }

    table {
        border-collapse: collapse;
        width: 100%;

        tbody {

            tr {

                td {
                    padding: 10px;
                    border: 1px solid lightgray;
                    text-align: center;

                    strong {
                        color: green;
                        font-size: 17px;
                    }

                    ul {

                        li {
                            display: flex;
                            align-items: center;
                            height: 105px;

                            img {
                                height: 100px;
                            }

                            span {
                                margin-left: 5px;
                            }
                        }
                    }
                }
            }
        }
    }
`;