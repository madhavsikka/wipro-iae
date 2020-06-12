import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { fromS } from "hh-mm-ss";
import theme from "../../../../styles/theme";
const { colors, fontSizes } = theme;

const StyledTimer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background: ${colors.cultured};
	color: ${colors.blueMunsell};
	border-radius: 5px;
	height: 100%;
	font-size: ${fontSizes.xxxl};
	font-weight: 500;
	padding: 0;

	div {
		width: 6rem;
		transform: translate(-1.65rem, 0);
		user-select: none;
	}
`;

const Timer = ({ duration }) => {
	const [timeLeft, setTimeLeft] = useState(duration * 60);

	useEffect(() => {
		const interval = setInterval(() => {
			if (timeLeft > 0) {
				setTimeLeft((time) => time - 1);
			} else {
				console.log("Time Up");
			}
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	return (
		<StyledTimer>
			<div>{fromS(timeLeft, "hh:mm:ss")}</div>
		</StyledTimer>
	);
};

export default Timer;
