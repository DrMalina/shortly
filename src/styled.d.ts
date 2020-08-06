import styled from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      primaryLight: string;
      background: string;
      error: string;
      gray: string;
      gray100: string;
      gray200: string;
      gray300: string;
      gray400: string;
      black: string;
      white: string;
    };
    fontWeight: {
      regular: number;
      bold: number;
    };
  }
}
