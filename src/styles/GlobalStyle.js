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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
    font-family: ${fonts.Montserrat};
  }

  .fade-appear {
    opacity: 0;
  }

  .fade-appear-active {
    opacity: 1;
    transition: opacity 600ms;
  }

  .navlink-active {
    color: ${colors.white} !important;
    background: ${colors.blue};
    border-radius: 5px;
    font-weight: bold;
    padding: 2px 8px;
    transition: background 400ms;
  }

  .menulink-active {
    border: 1px solid ${colors.blue};
    border-radius: 5px;
    padding: 2px 8px
  }
`;

export default GlobalStyle;
