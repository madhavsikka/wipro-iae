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

  .fadeup-appear {
    opacity: 0;
  }

  .fadeup-appear-active {
    opacity: 1;

    -webkit-transition: opacity 1000ms;
    -moz-transition: opacity 1000ms;
    -o-transition: opacity 1000ms;
    -ms-transition: opacity 1000ms;
    transition: opacity 1000ms;

  }

  .fadeup-name-appear {
    opacity: 0;

    -webkit-transform: translate(-50%, -20%);
    -moz-transform: translate(-50%, -20%);
    -o-transform: translate(-50%, -20%);
    -ms-transform: translate(-50%, -20%);
    transform: translate(-50%, -20%);

  }

  .fadeup-name-appear-active {
    opacity: 1;

    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    
    -webkit-transition: opacity 1000ms, transform 500ms;
    -moz-transition: opacity 1000ms, transform 500ms;
    -o-transition: opacity 1000ms, transform 500ms;
    -ms-transition: opacity 1000ms, transform 500ms;
    transition: opacity 1000ms, transform 500ms;

  }
`;

export default GlobalStyle;
