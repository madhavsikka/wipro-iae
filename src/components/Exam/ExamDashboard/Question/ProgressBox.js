import React from "react";
import styled from "styled-components";
import theme from "../../../../styles/theme";
const { colors, fontSizes } = theme;

const StyledProgressBox = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	background: ${colors.cultured};
	padding: 1rem;
`;

const StyledBox = styled.div`
	display: grid;
	padding: 1rem 0;
	grid-gap: 1rem;
	grid-template-columns: repeat(auto-fill, minmax(2rem, 1fr));
`;

const StyledText = styled.div`
	display: flex;
	flex-direction: column;
	color: ${colors.blueMunsell};
	font-size: ${fontSizes.xl};
	font-weight: 700;
	padding-bottom: 8px;
	border-bottom: 1.5px solid ${colors.blueMunsell};
`;

const StyledDiv = styled.div`
	display: flex;
	cursor: pointer;
	font-weight: 700;
	font-size: ${fontSizes.xl};
	justify-content: center;
	align-items: center;
	border-radius: 5px;
	padding: 0.6rem 1.2rem;
	transition: border, background 100ms linear;
	border: ${(props) =>
		props.selected
			? `2px solid ${colors.blueSapphire}`
			: `2px solid ${colors.blueMunsell}`};
	background: ${(props) =>
		props.selected ? colors.blueSapphire : "transparent"};
	color: ${(props) => (props.selected ? "white" : colors.blueMunsell)};

	:hover {
		background: ${(props) =>
			props.selected ? colors.indigo : colors.blueMunsell};
		border-color: ${(props) =>
			props.selected ? colors.indigo : colors.blueMunsell};
		color: ${colors.white};
	}
`;

const ProgressBox = ({
	selectedSectionName,
	selectedSectionIndex,
	selectedQuestionIndex,
	setSelectedQuestionIndex,
	numOfQuestionsInSec,
}) => {
	const onClickHandler = (event) => {
		setSelectedQuestionIndex(event.target.innerText - 1);
	};

	return (
		<StyledProgressBox>
			<StyledText>
				<div>Question Panel</div>
				<div>{selectedSectionName}</div>
			</StyledText>
			<StyledBox>
				{[...Array(+numOfQuestionsInSec)].map((_, i) => {
					return (
						<StyledDiv
							key={`${selectedSectionIndex}${i}`}
							selected={selectedQuestionIndex === i}
							onClick={(event) => onClickHandler(event)}>
							{i + 1}
						</StyledDiv>
					);
				})}
			</StyledBox>
		</StyledProgressBox>
	);
};

export default React.memo(ProgressBox);
