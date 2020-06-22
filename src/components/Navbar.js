import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as WiproLogo } from "../images/WiproLogo.svg";
import { NavLink } from "react-router-dom";
import theme from "../styles/theme";
import Burger from "./Burger";
import Menu from "./Menu";
import { ReactComponent as UserLogo } from "../images/User.svg";
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
	font-family: ${fonts.Montserrat};
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

const StyledUser = styled(UserLogo)`
	width: 40px;
	height: 40px;
	margin-left: 4px;
`;

const StyledBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-end;
	margin: 0 3px 0 3rem;
	padding-right: 5px;
	div {
		color: #6c757d;
		font-family: ${fonts.Montserrat};
		font-size: ${fontSizes.lg};
	}
	a {
		margin: 0;
		padding: 0;
		cursor: pointer;
		color: lightgrey;
		font-family: ${fonts.Montserrat};
		font-size: ${fontSizes.sm};
	}
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

const StyledAnchor = styled.a`
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

const Navbar = ({ user, auth, setUser, logOutHandler }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const { width } = useWindowSize();

	const menuClickHandler = () => {
		setIsMenuOpen((prevState) => !prevState);
	};

	const linkList = (
		<StyledList>
			{user ? (
				<>
					<StyledLink to="/admin-dashboard" activeClassName="navlink-active">
						Create Exam
					</StyledLink>
					<StyledLink to="/exams" activeClassName="navlink-active">
						View Exams
					</StyledLink>
					<StyledBox>
						<div>{auth().currentUser.displayName}</div>
						{/* <div>{localStorage.getItem("Wipro_Name")}</div> */}
						<StyledAnchor onClick={logOutHandler}>Logout</StyledAnchor>
					</StyledBox>
					<StyledUser />
				</>
			) : (
				<>
					<StyledLink to="/login" activeClassName="navlink-active">
						LOGIN
					</StyledLink>
					<StyledLink to="/register" activeClassName="navlink-active">
						REGISTER
					</StyledLink>
				</>
			)}
			{/* <StyledLink to="/contact" activeClassName="navlink-active">
				CONTACT
			</StyledLink>
			<StyledLink to="/about" activeClassName="navlink-active">
				ABOUT
			</StyledLink> */}
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
