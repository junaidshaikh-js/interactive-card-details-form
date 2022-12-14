import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0
  }

  body {
    font-family: 'Space Grotesk', sans-serif;
  }

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;
