import { css } from "styled-components";

import Montserrat_300_WOFF from "../fonts/Montserrat/montserrat-v14-latin-300.woff";
import Montserrat_300_WOFF2 from "../fonts/Montserrat/montserrat-v14-latin-300.woff2";
import Montserrat_300_italic_WOFF from "../fonts/Montserrat/montserrat-v14-latin-300italic.woff";
import Montserrat_300_italic_WOFF2 from "../fonts/Montserrat/montserrat-v14-latin-300italic.woff2";
import Montserrat_400_WOFF from "../fonts/Montserrat/montserrat-v14-latin-regular.woff";
import Montserrat_400_WOFF2 from "../fonts/Montserrat/montserrat-v14-latin-regular.woff2";
import Montserrat_400_italic_WOFF from "../fonts/Montserrat/montserrat-v14-latin-italic.woff";
import Montserrat_400_italic_WOFF2 from "../fonts/Montserrat/montserrat-v14-latin-italic.woff2";
import Montserrat_500_WOFF from "../fonts/Montserrat/montserrat-v14-latin-500.woff";
import Montserrat_500_WOFF2 from "../fonts/Montserrat/montserrat-v14-latin-500.woff2";
import Montserrat_700_WOFF from "../fonts/Montserrat/montserrat-v14-latin-700.woff";
import Montserrat_700_WOFF2 from "../fonts/Montserrat/montserrat-v14-latin-700.woff2";
import Nexa_Light_WOFF from "../fonts/Nexa/nexa-light-webfont.woff";
import Nexa_Light_WOFF2 from "../fonts/Nexa/nexa-light-webfont.woff2";

const FontFaces = css`
	@font-face {
		font-family: "Montserrat";
		src: url(${Montserrat_300_WOFF}) format("woff"),
			url(${Montserrat_300_WOFF2}) format("woff2");
		font-weight: 300;
		font-style: normal;
	}
	@font-face {
		font-family: Montserrat;
		src: url(${Montserrat_300_italic_WOFF}) format("woff"),
			url(${Montserrat_300_italic_WOFF2}), format("woff2");
		font-weight: 300;
		font-style: italic;
	}
	@font-face {
		font-family: "Montserrat";
		src: url(${Montserrat_400_WOFF}) format("woff"),
			url(${Montserrat_400_WOFF2}) format("woff2");
		font-weight: 400;
		font-style: normal;
	}
	@font-face {
		font-family: Montserrat;
		src: url(${Montserrat_400_italic_WOFF}) format("woff"),
			url(${Montserrat_400_italic_WOFF2}), format("woff2");
		font-weight: 400;
		font-style: italic;
	}
	@font-face {
		font-family: "Montserrat";
		src: url(${Montserrat_500_WOFF}) format("woff"),
			url(${Montserrat_500_WOFF2}) format("woff2");
		font-weight: 500;
		font-style: normal;
	}
	@font-face {
		font-family: "Montserrat";
		src: url(${Montserrat_700_WOFF}) format("woff"),
			url(${Montserrat_700_WOFF2}) format("woff2");
		font-weight: 700;
		font-style: normal;
	}
	@font-face {
		font-family: "Nexa";
		src: url(${Nexa_Light_WOFF}) format("woff"),
			url(${Nexa_Light_WOFF2}) format("woff2");
		font-weight: 400;
		font-style: normal;
	}
`;

export default FontFaces;
