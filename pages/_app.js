import { GlobalStyle } from "../src/styles/global";
import { ThemeProvider } from "styled-components";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};
