import { createGlobalStyle } from "styled-components";
import FontFaces from "./fonts";
import theme from "./theme";
// eslint-disable-next-line
const { colors, fonts, fontSizes } = theme;
const GlobalStyle = createGlobalStyle`
  ${FontFaces};

  html{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    height: 100%;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    font-family: ${fonts.Montserrat};
  }

  .fadeup-enter {
    opacity: 0;
    font-family: ${fonts.Montserrat};
  }

  .fadeup-enter-active {
    opacity: 1;
    transition: opacity 1000ms;
  }

  .fadeup-name-enter {
    opacity: 0;
    font-family: ${fonts.Montserrat};
    transform: translate(-50%, -20%);
  }

  .fadeup-name-enter-active {
    opacity: 1;
    transform: translate(-50%, -50%);
    transition: opacity 1000ms, transform 500ms;
  }
`;

export default GlobalStyle;
