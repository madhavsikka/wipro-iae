import styled from "styled-components";
import theme from "./theme";
const { colors, fonts, fontSizes } = theme;

const StyledButton = styled.button`
	color: ${colors.white};
	background: ${(props) => props.color};
	font-family: ${fonts.Nexa};
	font-weight: bold;
	font-size: ${fontSizes.xl};
	text-decoration: none;
	outline: none;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	min-width: 7rem;
	padding: 0.5rem 0.75rem;
	&:hover,
	&:focus {
		background: ${(props) => props.hoverColor};
		a {
			color: ${(props) => props.hoverText} !important;
		}
		transition: background 200ms;
	}

	&:active {
		font-weight: bold;
		background-color: ${colors.blue};
		color: ${colors.white};
	}
`;

export default StyledButton;
