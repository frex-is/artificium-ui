import { createGlobalStyle } from "styled-components";

import JakartaFont from "../assets/font/PlusJakartaSans-SemiBold.ttf";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'jakarta';
    src: url(${JakartaFont}) format('truetype');
  }
`;
