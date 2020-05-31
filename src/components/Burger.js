import React from "react";
import styled from "styled-components";
import theme from "../styles/theme";
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
	position: fixed;
	top: auto;
	right: 20px;

	&:focus {
		outline: none;
	}

	div {
		width: 2rem;
		height: 0.25rem;
		background: ${colors.blue};
		border-radius: 2px;
		transition: all 0.1s linear;
		/* position: absolute; */

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
