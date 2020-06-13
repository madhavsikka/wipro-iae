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
	margin-top: 3px;
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
	font-size: ${fontSizes.xxl};
	font-weight: bolder;
	color: ${colors.blueMunsell};
	display: flex;
	justify-content: center;
	align-items: center;
	user-select: none;
`;

const Examnav = ({ examName }) => {
	return (
		<StyledContainer>
			<StyledNav>
				<StyledLogo>
					<NavLink to="/">
						<WiproLogo />
					</NavLink>
				</StyledLogo>
				<StyledHeader>{examName}</StyledHeader>
				<NavLink to="/user-dashboard">
					<StyledUser />
				</NavLink>
			</StyledNav>
		</StyledContainer>
	);
};

export default Examnav;
