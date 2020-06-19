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
	max-width: 350px;
	background: ${colors.blueMunsell};
	border: 2px solid ${colors.blueMunsell};
	color: white;
	border-radius: 5px;
	padding: 0.5rem;
	transition: all 100ms;
	cursor: pointer;
	div {
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: ${fontSizes.xl};
		font-weight: 500;
	}
	:hover {
		background: ${colors.blueMunsellTransparent2};
		border: 2px solid ${colors.blueMunsellTransparent2};
	}
`;

const NewButton = (props) => {
	return (
		<StyledButton>
			<div>
				<IconContext.Provider
					value={{
						size: "21px",
						style: {
							color: "white",
							marginRight: "0.8rem",
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
