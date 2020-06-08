import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as WiproLogo } from "../images/WiproLogo.svg";
import { NavLink } from "react-router-dom";
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
	padding: 0px 20px;
	flex-shrink: 0;
	background-color: ${colors.white};
	width: 100%;
	box-shadow: 0 8px 6px -7px lightgray;
`;

const StyledNav = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
	width: 100%;
	padding-top: 0px;
	margin: 0;
	color: ${colors.blue};
	font-family: ${fonts.Nexa};
	font-size: ${fontSizes.xl};
`;

const StyledLogo = styled.div`
	display: flex;
	margin-top: 4px;
	a {
		display: block;
		width: 70px;
	}
	${media.phablet`margin-top: 4px; width: 60px`};
`;

const StyledList = styled.ul`
	display: flex;
	justify-content: space-between;
	align-items: center;
	list-style: none;
	margin: 0;
	padding: 0;
`;

const StyledLink = styled(NavLink)`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 0 0 50px;
	padding: 0 8px;
	text-decoration: none;
	color: ${colors.blue};

	&:hover {
		color: ${colors.green};
	}
`;

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const { width } = useWindowSize();

	const menuClickHandler = () => {
		setIsMenuOpen((prevState) => !prevState);
	};

	const linkList = (
		<StyledList>
			<StyledLink to="/login" activeClassName="navlink-active">
				LOGIN
			</StyledLink>
			<StyledLink to="/register" activeClassName="navlink-active">
				REGISTER
			</StyledLink>
			<StyledLink to="/contact" activeClassName="navlink-active">
				CONTACT
			</StyledLink>
			<StyledLink to="/about" activeClassName="navlink-active">
				ABOUT
			</StyledLink>
		</StyledList>
	);

	return (
		<>
			<StyledContainer>
				<StyledNav>
					<StyledLogo>
						<NavLink to="/">
							<WiproLogo />
						</NavLink>
					</StyledLogo>
					{width > sizes.tablet ? linkList : null}
				</StyledNav>
			</StyledContainer>
			<Menu open={isMenuOpen} />
			{width < sizes.tablet || isMenuOpen ? (
				<Burger clicked={() => menuClickHandler()} open={isMenuOpen} />
			) : null}
		</>
	);
};

export default Navbar;
