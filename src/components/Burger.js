import React from "react";
import styled from "styled-components";
import theme from "../styles/theme";
import media from "../styles/media.js";
const { colors } = theme;

const StyledBurger = styled.button`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	width: 2rem;
	height: 1.5rem;
	background: transparent;
	border: none;
	cursor: pointer;
	padding: 0;
	position: absolute;
	top: 27px;
	${media.phablet`top: 23px`};
	right: 0;
	right: 20px;
	z-index: 100;


	&:focus {
		outline: none;
	}

	div {
		width: 2rem;
		height: 0.25rem;
		background: ${colors.blue};
		border-radius: 2px;
		transition: all 0.1s linear;

		:first-child {
			transform: ${({ open }) =>
				open ? "translateY(8px) rotate(135deg)" : "translateY(0) rotate(0)"};
		}

		:nth-child(2) {
			opacity: ${({ open }) => (open ? "0" : "1")};
		}

		:nth-child(3) {
			transform: ${({ open }) =>
				open
					? "translateY(-8px) rotate(-135deg)"
					: "translateY(0) rotate(0)"};
		}
	}
`;

const Burger = ({ open, clicked }) => {
	return (
		<StyledBurger open={open} onClick={clicked}>
			<div />
			<div />
			<div />
		</StyledBurger>
	);
};

export default Burger;
