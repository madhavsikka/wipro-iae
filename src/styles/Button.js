import styled from "styled-components";
import theme from "./theme";
const { colors, fonts, fontSizes } = theme;

const StyledButton = styled.button`
	color: ${colors.blue};
	background-color: transparent;
	font-family: ${fonts.Nexa};
	font-weight: normal;
	font-size: ${fontSizes.xxl};
	text-decoration: none;
	outline: none;
	cursor: pointer;
	border: none;
	border-radius: 5px;
	padding: 0.25rem 0.75rem;

	&:hover,
	&:focus {
		border: 1px solid ${colors.blue};
	}

	&:active {
		font-weight: bold;
		background-color: ${colors.blue};
		color: ${colors.white};
	}
`;

export default StyledButton;
