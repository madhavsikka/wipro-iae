import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as WiproLogo } from "../images/WiproLogo.svg";
import { Link } from "react-router-dom";
import theme from "../styles/theme";
import Burger from "./Burger";
import Menu from "./Menu";
import media, { sizes } from "../styles/media";
import { useWindowSize } from "react-use";
const { colors, fonts, fontSizes } = theme;

const StyledContainer = styled.section`
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: fixed;
	z-index: 100;
	top: 0;
	padding: 0px 20px;
	background-color: ${colors.white};
	width: 100%;
	height: 100px;
`;

const StyledNav = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
	width: 100%;
	padding-top: 0px;
	color: ${colors.blue};
	font-family: ${fonts.Nexa};
	font-size: ${fontSizes.xl};
`;

const StyledLogo = styled.div`
	display: flex;
	a {
		display: block;
		width: 90px;
	}
	${media.tablet`width: 80px`};
	${media.phablet`width: 60px`};
`;

const StyledList = styled.ul`
	display: flex;
	justify-content: space-between;
	align-items: center;
	list-style: none;
	margin: 0;
	padding: 0;
`;

const StyledLink = styled(Link)`
	display: flex;
	align-items: center;
	margin: 0 0 0 50px;
	padding: 0;
	text-decoration: none;
	color: ${colors.blue};
`;

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const { width } = useWindowSize();

	const menuClickHandler = () => {
		setIsMenuOpen((prevState) => !prevState);
	};

	const linkList = (
		<StyledList>
			<StyledLink to="/login">LOGIN</StyledLink>
			<StyledLink to="/register">REGISTER</StyledLink>
			<StyledLink to="/contact">CONTACT</StyledLink>
			<StyledLink to="/about">ABOUT</StyledLink>
		</StyledList>
	);

	const navContent =
		width < sizes.tablet || isMenuOpen ? (
			<Burger clicked={() => menuClickHandler()} open={isMenuOpen} />
		) : (
			linkList
		);

	return (
		<>
			<Menu open={isMenuOpen} />
			<StyledContainer>
				<StyledNav>
					<StyledLogo>
						<Link to="/">
							<WiproLogo />
						</Link>
					</StyledLogo>
					{navContent}
				</StyledNav>
			</StyledContainer>
		</>
	);
};

export default Navbar;
