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
	background: ${colors.cultured};
	padding: 1rem 1rem 0;
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
	/* background: ${(props) =>
		props.selected ? colors.indigo : "transparent"}; */
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
		background: ${(props) => (props.selected ? colors.indigo : colors.blueMunsell)};
		border-color: ${(props) =>
			props.selected ? colors.indigo : colors.blueMunsell};
		color: ${colors.white};
	}
`;

const ButtonBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	> div {
		display: flex;
		justify-content: space-between;
		margin-bottom: 1rem;
	}
`;

const ProgressBox = ({
	questionState,
	setQuestionState,
	selectedSectionName,
	selectedSectionIndex,
	selectedQuestionIndex,
	setSelectedQuestionIndex,
	numOfQuestionsInSec,
}) => {
	const setQuestionStateHandler = (value) => {
		setQuestionState((prevState) => {
			let newState = JSON.parse(JSON.stringify(prevState));
			newState[selectedSectionName][selectedQuestionIndex] = value;
			console.log(JSON.stringify(newState));
			return newState;
		});
	};
	const onClickHandler = (event) => {
		setSelectedQuestionIndex(event.target.innerText - 1);
		if (
			questionState[selectedSectionName][selectedQuestionIndex] ===
			config.questionState.unvisited
		) {
			setQuestionStateHandler(config.questionState.visited_unattempted);
		}
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
							state={questionState[selectedSectionName][i]}
							onClick={(event) => onClickHandler(event)}>
							{i + 1}
						</StyledDiv>
					);
				})}
			</StyledBox>
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
