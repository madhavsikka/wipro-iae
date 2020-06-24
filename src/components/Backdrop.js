import React from "react";
import styled from "styled-components";
import Button from "../styles/Button";
import theme from "../styles/theme";
const { colors, fontSizes } = theme;

const StyledFullScreen = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100vw;
	background: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
`;

const WindowMessage = styled.div`
	background: white;
	width: 450px;
	height: 200px;
	border-radius: 4px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	font-weight: 500;
	font-size: ${fontSizes.lg};
	padding: 1rem;
	div {
		:first-child {
			font-weight: bold;
			font-size: ${fontSizes.xl};
			color: ${colors.blueMunsell};
		}
	}
`;

const Backdrop = ({ setShowBackdrop }) => {
	return (
		<StyledFullScreen>
			<WindowMessage>
				<div>WARNING</div>
				<div>You are not allowed to leave this window</div>
				<Button
					onClick={() => setShowBackdrop(false)}
					textColor={colors.blueMunsell}
					fontSize={fontSizes.sm}
					borderColor={colors.blueMunsell}
					hoverColor={colors.blueMunsell}
					hoverText={colors.white}
					weight="600">
					Continue
				</Button>
			</WindowMessage>
		</StyledFullScreen>
	);
};

export default Backdrop;
