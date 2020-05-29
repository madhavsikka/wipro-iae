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
`;

export default GlobalStyle;
