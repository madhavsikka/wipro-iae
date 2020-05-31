import React from "react";
import styled from "styled-components";
import { ReactComponent as BottomDesign } from "../images/BottomDesign.svg";
import { ReactComponent as BottomDesignMobile } from "../images/BottomDesignMobile.svg";
import { useWindowSize } from "react-use";
import { sizes } from "../styles/media";

const StyledFooter = styled.div`
	display: flex;
	position: fixed;
	bottom: 0;
	left: 0;
	z-index: 0;
	flex-shrink: 0;
	width: 100%;
	svg {
		height: 100%;
		width: 100%;
	}
`;

const Footer = () => {
	const { width, height } = useWindowSize();
	return (
		<StyledFooter>
			{height < sizes.landscape && width > sizes.phablet ? (
				<BottomDesign />
			) : width > sizes.tablet ? (
				<BottomDesign />
			) : (
				<BottomDesignMobile />
			)}
		</StyledFooter>
	);
};

export default Footer;
