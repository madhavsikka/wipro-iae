import React from "react";
import styled from "styled-components";
import Button from "../../../../styles/Button";
import theme from "../../../../styles/theme";
import mixins from "../../../../styles/mixins";
const { colors, fontSizes } = theme;

const StyledBar = styled.div`
	${mixins.flexBar};
	grid-area: ${(props) => props.area};
	background: transparent;
`;

const StyledGroup = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0;
	padding: 0;
`;

const StyledButton = styled(Button)`
	padding: 0.25rem;
`;

const QuestionScheme = (props) => {
	return (
		<StyledBar>
			<StyledGroup>
				<p
					style={{
						color: colors.royalBlue,
						padding: "0",
						margin: "0 20px 0 0",
						fontWeight: "500",
					}}>
					Question Scheme:
				</p>
				<StyledButton
					textColor={colors.springGreen}
					fontSize={fontSizes.sm}
					borderColor={colors.royalBlue}
					hoverColor={colors.royalBlue}
					hoverText={colors.skyBlue}>
					Single Correct
				</StyledButton>
				<StyledButton
					textColor={colors.royalBlue}
					fontSize={fontSizes.sm}
					borderColor={colors.royalBlue}
					hoverColor={colors.royalBlue}
					hoverText={colors.skyBlue}
					style={{ marginLeft: "20px" }}>
					+1 -0.25
				</StyledButton>
				<StyledButton
					textColor={colors.royalBlue}
					fontSize={fontSizes.sm}
					borderColor={colors.royalBlue}
					hoverColor={colors.royalBlue}
					hoverText={colors.skyBlue}
					style={{ marginLeft: "20px" }}>
					Mathematics
				</StyledButton>
			</StyledGroup>
		</StyledBar>
	);
};

export default QuestionScheme;
