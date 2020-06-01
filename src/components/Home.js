import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styled from "styled-components";
import theme from "../styles/theme";
import media from "../styles/media";
import { CSSTransition } from "react-transition-group";
const { colors, fonts, fontSizes } = theme;

const StyledContainer = styled.div`
	position: fixed;
	top: 35%;
	left: 50%;
	transform: translate(-50%, -50%);
	-webkit-transform: translate(-50%, -50%);
	-moz-transform: translate(-50%, -50%);
	-o-transform: translate(-50%, -50%);
	-ms-transform: translate(-50%, -50%);
	display: flex;
	align-items: center;
	z-index: 1;

	${media.tablet`flex-direction: column; top: 45%;`};
	${media.landscape`top: 50%;`};
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
	${media.landscape`font-size: ${fontSizes.h3};`};
`;

const StyledName = styled.div`
	border-left: 3px solid ${colors.green};
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	font-family: ${fonts.Montserrat};
	font-weight: 500;
	font-display: optional;
	color: ${colors.green};
	padding: 0 0 0 5px;
	p {
		margin: 0 0 0 15px;
		padding: 0;
		font-size: ${fontSizes.xxxl};
		font-display: optional;
		${media.tablet`margin: 0;`};
		${media.phablet`font-size: ${fontSizes.xxl}`};
		${media.landscape`font-size: ${fontSizes.xxl};`};
	}

	${media.tablet`border: none; align-items: center; font-size: ${fontSizes.xxl};`};
`;

const Home = () => {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => setIsMounted(true), 1000);
		return () => clearTimeout(timer);
	}, []);

	return (
		<>
			<>
				<CSSTransition in={isMounted} timeout={1000} classNames="fade" mountOnEnter>
					<Navbar />
				</CSSTransition>

				<CSSTransition in={isMounted} timeout={1000} classNames="fade" mountOnEnter>
					<StyledContainer>
						<StyledHead>WIPRO</StyledHead>
						<StyledName>
							<p>INDEPENDENT</p>
							<p>ASSESSMENT</p>
							<p>ENGINE</p>
						</StyledName>
					</StyledContainer>
				</CSSTransition>

				<CSSTransition in={isMounted} timeout={1000} classNames="fade" mountOnEnter>
					<Footer />
				</CSSTransition>
			</>
		</>
	);
};

export default Home;
