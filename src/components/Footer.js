import React from "react";
import styled from "styled-components";
import { ReactComponent as BottomDesign } from "../images/BottomDesign.svg";

const StyledFooter = styled.div`
	display: flex;
	position: fixed;
	bottom: 0;
	left: 0;
	flex-shrink: 0;
	width: 100%;
	svg {
    height: 100%;
	}
`;

const Footer = () => {
	return (
		<StyledFooter>
			<BottomDesign />
		</StyledFooter>
	);
};

export default Footer;
