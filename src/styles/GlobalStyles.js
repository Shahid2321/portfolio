// src/styles/GlobalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 1rem;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyles;
