import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }

  body {
    box-sizing: inherit;
    background-color: ${({ theme }) => theme.colors.white};
    font-size: 1.8rem;
    font-family: 'Poppins', sans-serif;
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    overflow-x: hidden;
  }
`;

export default GlobalStyle;
