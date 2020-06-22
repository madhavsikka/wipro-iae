import React from "react";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";

const StyledFlex = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
`;

const MiniLoader = () => {
	return (
		<CSSTransition in timeout={600} classNames="fade" appear unmountOnExit>
			<StyledFlex>
				<div className="cssload-container">
					<div className="cssload-zenith"></div>
				</div>
			</StyledFlex>
		</CSSTransition>
	);
};

export default MiniLoader;
