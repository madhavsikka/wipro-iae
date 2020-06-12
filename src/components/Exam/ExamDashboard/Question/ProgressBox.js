import React from "react";
import styled from "styled-components";
import Button from "../../../../styles/Button";
import config from "../../../../config";
import theme from "../../../../styles/theme";
const { colors, fontSizes } = theme;

const StyledProgressBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100%;
	border-radius: 5px;
	background: ${colors.cultured};
	padding: 0;
`;

const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 0;
	margin: 0;
`;

const StyledText = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	background: ${colors.blueMunsell};
	color: white;
	height: 40px;
	border-top-left-radius: 5px;
	border-top-right-radius: 5px;
	font-size: ${fontSizes.xl};
	font-weight: 500;
	box-shadow: 0 8px 4px -7px lightgray;
	user-select: none;
`;

const StyledBox = styled.div`
	display: grid;
	padding: 2rem 1rem;
	grid-gap: 1rem;
	grid-template-columns: repeat(auto-fill, minmax(3rem, 1fr));
`;

const StyledDiv = styled.div`
	display: flex;
	user-select: none;
	cursor: pointer;
	font-weight: 700;
	font-size: ${fontSizes.xl};
	justify-content: center;
	align-items: center;
	width: 50px;
	height: 50px;
	border-radius: 50%;
	transition: border, background 100ms linear;
	border: ${(props) =>
		props.selected
			? `2px solid ${colors.blueSapphire}`
			: `2px solid ${colors.blueMunsell}`};
	background: ${(props) => {
		if (props.selected) {
			return colors.indigo;
		}
		switch (props.state) {
			case config.questionState.unvisited:
				return "transparent";
			case config.questionState.visited_unattempted:
				return colors.unattempted;
			case config.questionState.review:
				return colors.review;
			case config.questionState.submit:
				return colors.submit;
			default:
				return "transparent";
		}
	}};
	color: ${(props) => (props.selected ? "white" : colors.blueMunsell)};

	:hover {
		background: ${(props) =>
			props.selected ? colors.indigo : colors.blueMunsell};
		border-color: ${(props) =>
			props.selected ? colors.indigo : colors.blueMunsell};
		color: ${colors.white};
	}
`;

const ButtonBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 1rem;

	> div {
		display: flex;
		justify-content: space-between;
		margin-bottom: 1rem;
	}
`;

const ProgressBox = ({
	questionState,
	selectedSectionName,
	selectedSectionIndex,
	selectedQuestionIndex,
	setSelectedQuestionIndex,
	numOfQuestionsInSec,
}) => {
	const setQuestionStateHandler = (value) => {
		questionState[selectedSectionName][selectedQuestionIndex] = value;
	};

	const onClickHandler = (event) => {
		if (selectedQuestionIndex !== +event.target.innerText - 1) {
			setSelectedQuestionIndex(+event.target.innerText - 1);
			if (
				questionState[selectedSectionName][selectedQuestionIndex] ===
				config.questionState.unvisited
			) {
				setQuestionStateHandler(config.questionState.visited_unattempted);
			}
		}
	};

	return (
		<StyledProgressBox>
			<StyledContainer>
				<StyledText>Question Panel</StyledText>
				<StyledBox>
					{[...Array(numOfQuestionsInSec[selectedSectionIndex])].map((_, i) => {
						return (
							<StyledDiv
								key={`${selectedSectionIndex}${i}`}
								selected={selectedQuestionIndex === i}
								state={questionState[selectedSectionName][i]}
								onClick={(event) => onClickHandler(event)}>
								{i + 1}
							</StyledDiv>
						);
					})}
				</StyledBox>
			</StyledContainer>

			<ButtonBox>
				<div>
					<Button
						color={colors.darkRoyalBlue}
						textColor={colors.white}
						fontSize={fontSizes.sm}
						borderColor={colors.darkRoyalBlue}
						hoverColor={colors.royalBlue}
						weight="600"
						style={{ flexGrow: "1", marginRight: "4px" }}>
						INSTRUCTIONS
					</Button>
					<Button
						color={colors.darkRoyalBlue}
						textColor={colors.white}
						fontSize={fontSizes.sm}
						borderColor={colors.darkRoyalBlue}
						hoverColor={colors.royalBlue}
						weight="600"
						style={{ flexGrow: "1", marginLeft: "4px" }}>
						ASK A DOUBT
					</Button>
				</div>
				<Button
					color={colors.buttonGreen}
					textColor={colors.white}
					fontSize={fontSizes.md}
					borderColor={colors.buttonGreen}
					hoverColor={colors.buttonGreenDark}
					hoverText={colors.white}
					weight="600">
					SUBMIT
				</Button>
			</ButtonBox>
		</StyledProgressBox>
	);
};

export default React.memo(ProgressBox);
