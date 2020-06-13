import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styled from "styled-components";
import theme from "../styles/theme";
import media from "../styles/media";
import mixins from "../styles/mixins";
import { CSSTransition } from "react-transition-group";
const { colors, fonts, fontSizes } = theme;

const StyledFlex = styled.div`
	${mixins.fullFlexCenter};
`;

const StyledContainer = styled.div`
	${mixins.flexContainerCenter};
	${media.tablet`flex-direction: column;`};
`;

const StyledHead = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	font-family: ${fonts.Montserrat};
	font-weight: bold;
	font-size: ${fontSizes.h1};
	color: ${colors.blue};
	margin-right: 15px;

	${media.tablet`font-size: ${fontSizes.h2}; margin: 0;`};
	${media.phablet`font-size: ${fontSizes.h3};`};
	${media.phone`font-size: ${fontSizes.h4}`};
	${media.micro`font-size: ${fontSizes.h5}`};
`;

const StyledName = styled.div`
	border-left: 3px solid ${colors.green};
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	font-family: ${fonts.Montserrat};
	font-weight: 500;
	color: ${colors.green};
	padding: 0 0 0 5px;
	p {
		margin: 0 0 0 15px;
		padding: 0;
		font-size: ${fontSizes.xxxl};
		${media.tablet`margin: 0;`};
		${media.phablet`font-size: ${fontSizes.xxl}`};
		${media.phone`font-size: ${fontSizes.xl}`};
		${media.micro`font-size: ${fontSizes.lg}`};
	}

	${media.tablet`border: none; align-items: center; font-size: ${fontSizes.xxl};`};
`;

const About = (props) => {
	return (
		<StyledFlex>
			<CSSTransition in timeout={600} classNames="fade" appear>
				<Navbar />
			</CSSTransition>

			<CSSTransition in timeout={600} classNames="fade" appear>
				<StyledContainer>
					<StyledHead>WIPRO</StyledHead>
					<StyledName>
						<p>IAE Team</p>
					</StyledName>
				</StyledContainer>
			</CSSTransition>

			<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
		dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
		commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
		nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim 
		d est laborum.</div>

			<CSSTransition in timeout={600} classNames="fade" appear>
				<Footer />
			</CSSTransition>

		</StyledFlex>
	);
};

export default About;