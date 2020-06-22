import React from "react";
import styled from "styled-components";
import { ReactComponent as WiproLogo } from "../../images/WiproLogo.svg";
import { ReactComponent as UserLogo } from "../../images/User.svg";
import { NavLink } from "react-router-dom";
import theme from "../../styles/theme";
import media from "../../styles/media";
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
	margin: 3px 70px 0 0;
	a {
		display: block;
		width: 50px;
	}
	${media.phablet`margin-top: 4px; width: 40px`};
`;

const StyledUser = styled(UserLogo)`
	width: 40px;
	height: 40px;
	margin-top: 3px;
`;

const StyledHeader = styled.div`
	justify-self: center;
	font-size: ${fontSizes.xxl};
	font-weight: bolder;
	color: ${colors.blueMunsell};
	display: flex;
	justify-content: center;
	align-items: center;
	user-select: none;
`;

const StyledUserNameContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0;
	padding: 0;
`;

const StyledBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-end;
	margin: 0 3px 0 0;
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

const Examnav = ({ name, displayName, logOutHandler }) => {
	return (
		<StyledContainer>
			<StyledNav>
				<StyledLogo>
					<NavLink to="/">
						<WiproLogo />
					</NavLink>
				</StyledLogo>
				<StyledHeader>{name}</StyledHeader>
				<StyledUserNameContainer>
					<StyledBox>
						<div>{displayName}</div>
						<StyledAnchor onClick={logOutHandler}>Logout</StyledAnchor>
					</StyledBox>
					<NavLink to="/user-dashboard">
						<StyledUser />
					</NavLink>
				</StyledUserNameContainer>
			</StyledNav>
		</StyledContainer>
	);
};

export default Examnav;
