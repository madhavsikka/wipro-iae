import React from "react";
import styled from "styled-components";
import theme from "../../../styles/theme";
import { IconContext } from "react-icons";
import { BsPencil } from "react-icons/bs";
const { colors, fontSizes } = theme;

const StyledButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
	background: ${colors.buttonGreen};
	border-radius: 7px;
	padding: 2rem;
	transition: all 100ms;
	div {
    display: flex;
    justify-content: center;
    align-items: center;
		font-size: ${fontSizes.xxl};
		color: white;
    font-weight: 500;
	}
	:hover {
		background: ${colors.buttonGreenDark};
	}
`;

const NewButton = (props) => {
	return (
		<StyledButton>
			<div>
				<IconContext.Provider
					value={{
						size: "30px",
						style: {
							color: "white",
							marginRight: "1rem",
						},
					}}>
					<BsPencil />
				</IconContext.Provider>
			</div>
			<div>{props.children}</div>
		</StyledButton>
	);
};

export default NewButton;
