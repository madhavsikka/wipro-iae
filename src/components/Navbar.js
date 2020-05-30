import React from "react";
import styled from "styled-components";
import { ReactComponent as WiproLogo } from "../images/WiproLogo.svg";
import { Link } from "react-router-dom";
import theme from "../styles/theme";
import media from "../styles/media";
const { colors, fonts, fontSizes } = theme;

const StyledContainer = styled.section`
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: fixed;
	top: 0;
	padding: 0px 20px;
	background-color: ${colors.white};
	width: 100%;
	height: 100px;

	${media.desktop`padding: 0 10px;`};
	${media.tablet`padding: 0 5px;`};
`;

const StyledNav = styled.nav`
	display: flex;
	justify-content: space-between;
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
		width: 100px;
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
	margin: 0px 30px;
	padding: 0;
	text-decoration: none;

	${media.tablet`display: none;`};
`;

const Navbar = () => {
	return (
		<StyledContainer>
			<StyledNav>
				<StyledLogo>
					<Link to="/">
						<WiproLogo />
					</Link>
				</StyledLogo>
				<StyledList>
					<StyledLink>LOGIN</StyledLink>
					<StyledLink>REGISTER</StyledLink>
					<StyledLink>CONTACT</StyledLink>
					<StyledLink>ABOUT</StyledLink>
				</StyledList>
			</StyledNav>
		</StyledContainer>
	);
};

export default Navbar;
