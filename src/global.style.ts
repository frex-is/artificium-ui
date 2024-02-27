import { createGlobalStyle } from "styled-components";

import JakartaSemiBoldFont from "../assets/font/PlusJakartaSans-SemiBold.ttf";
import JakartaMediumFont from "../assets/font/PlusJakartaSans-Medium.ttf";
import JakartaBoldFont from "../assets/font/PlusJakartaSans-Bold.ttf";
import JakartaRegularFont from "../assets/font/PlusJakartaSans-Regular.ttf";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'jakarta-semi-bold';
    src: url(${JakartaSemiBoldFont}) format('truetype');
  }

  @font-face {
    font-family: 'jakarta-bold';
    src: url(${JakartaBoldFont}) format('truetype');
  }

  @font-face {
    font-family: 'jakarta-medium';
    src: url(${JakartaMediumFont}) format('truetype');
  }

  @font-face {
    font-family: 'jakarta-regular';
    src: url(${JakartaRegularFont}) format('truetype');
  }
`;
