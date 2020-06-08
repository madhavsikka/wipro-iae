import React from "react";
import styled from "styled-components";
import Button from "../../../../styles/Button";
import theme from "../../../../styles/theme";
import mixins from "../../../../styles/mixins";
const { colors, fontSizes } = theme;

const StyledBar = styled.div`
	${mixins.flexBar};
	grid-area: ${(props) => props.area};
	background: ${colors.cultured};
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

const SectionBar = ({ sections }) => {
	return (
		<StyledBar>
			<StyledGroup>
				<p
					style={{
						color: colors.blueMunsell,
						padding: "0",
						margin: "0 20px 0 0",
						fontWeight: "600",
					}}>
					Sections:
				</p>
				{sections.map((section, i) => (
					<StyledButton
						key={i}
						textColor={colors.blueMunsell}
						fontSize={fontSizes.sm}
						borderColor={colors.blueMunsell}
						hoverColor={colors.blueMunsell}
						hoverText={colors.white}
						weight="600"
						style={{ marginRight: "20px" }}>
						{section}
					</StyledButton>
				))}
			</StyledGroup>
		</StyledBar>
	);
};

export default React.memo(SectionBar);
