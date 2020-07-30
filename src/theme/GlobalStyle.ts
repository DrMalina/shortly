import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { theme } from './mainTheme';

const GlobalStyle = createGlobalStyle`
  ${reset}

  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }

  body {
    background-color: ${theme.colors.white};
    font-size: ${theme.fontSize.s};
    font-family: 'Poppins', sans-serif;
    font-weight: ${theme.fontWeight.regular};
    min-height: 100vh;
    overflow-x: hidden;
  }
`;

export default GlobalStyle;
