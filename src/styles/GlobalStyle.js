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

  .fade-exit {
    opacity: 1;
  }
  
  .fade-exit-active {
    opacity: 0;
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
  
  .cssload-container {
	width: 100%;
	height: 69px;
	text-align: center;
}

.cssload-zenith {
	width: 69px;
	height: 69px;
	margin: 0 auto;
	border-radius: 50%;
	border-top-color: transparent;
	border-left-color: transparent;
	border-right-color: transparent;
	box-shadow: 4px 4px 1px rgb(0,121,161);
	animation: cssload-spin 690ms infinite linear;
		-o-animation: cssload-spin 690ms infinite linear;
		-ms-animation: cssload-spin 690ms infinite linear;
		-webkit-animation: cssload-spin 690ms infinite linear;
		-moz-animation: cssload-spin 690ms infinite linear;
}



@keyframes cssload-spin {
	100%{ transform: rotate(360deg); transform: rotate(360deg); }
}

@-o-keyframes cssload-spin {
	100%{ -o-transform: rotate(360deg); transform: rotate(360deg); }
}

@-ms-keyframes cssload-spin {
	100%{ -ms-transform: rotate(360deg); transform: rotate(360deg); }
}

@-webkit-keyframes cssload-spin {
	100%{ -webkit-transform: rotate(360deg); transform: rotate(360deg); }
}

@-moz-keyframes cssload-spin {
	100%{ -moz-transform: rotate(360deg); transform: rotate(360deg); }
}



`;

export default GlobalStyle;
