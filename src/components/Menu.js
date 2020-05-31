import React from "react";
import styled from "styled-components";
import theme from "../styles/theme";
import { Link } from "react-router-dom";
const { colors, fonts, fontSizes } = theme;

const StyledMenu = styled.nav`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: ${colors.white};
	height: 100vh;
	min-height: 400px;
	width: 100%;
	margin: 0;
	padding: 2rem;
	position: absolute;
	z-index: 10;
	transition: transform 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
	transform: translateY(-100%);
	transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-100%)")};

	a {
		font-size: ${fontSizes.xxl};
		font-family: ${fonts.Nexa};
		margin: 2rem 0;
		color: ${colors.blue};
		text-decoration: none;
	}
`;

const Menu = ({ open }) => {
	return (
		<StyledMenu open={open}>
			<Link to="/login">LOGIN</Link>
			<Link to="/register">REGISTER</Link>
			<Link to="/contact">CONTACT</Link>
			<Link to="/about">ABOUT</Link>
		</StyledMenu>
	);
};

export default Menu;
