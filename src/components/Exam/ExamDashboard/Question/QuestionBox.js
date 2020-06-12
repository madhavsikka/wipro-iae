import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import theme from "../../../../styles/theme";
import config from "../../../../config";
import AnswerOption from "./AnswerOption";
import BottomBar from "./BottomBar";
const { colors, fontSizes } = theme;

const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin: 0;
	padding: 0 0 1rem 0;
	height: 100%;
`;

const StyledBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	box-shadow: 0 0 12px lightgray;
	border-radius: 5px;
	padding: 0 0 12px 0;
	margin-bottom: 1rem;
	flex: 1;
	height: 100%;
	width: 100%;
	overflow-y: auto;
`;

const StyledBar = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 40px;
	width: 100%;
	padding: 0;
	box-shadow: 0 8px 6px -7px lightgray;
	background: ${colors.blueMunsell};
	color: white;
`;

const StyledQNum = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: ${fontSizes.xl};
	font-weight: 500;
	padding: 0 1rem;
	user-select: none;
`;

const StyledQDetails = styled(StyledQNum)`
	justify-content: space-between;
`;

const StyledMarking = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 8px 0rem 8px 2rem;
	padding: 0;
	border-radius: 4px;
	background: white;
	color: ${colors.blueMunsell};
	p {
		width: 40px;
		padding: 2px 0;
		margin: 0;
		:first-child {
			border-right: 1.25px solid ${colors.blueMunsell};
		}
		:last-child {
			border-left: 1.25px solid ${colors.blueMunsell};
		}
	}
`;

const StyledQuestion = styled.div`
	font-size: ${fontSizes.lg};
	font-weight: bold;
	padding: 12px;
	text-align: left;
`;

const StyledOptionBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
	padding: 12px;
`;

const StyledOption = styled.div`
	padding: 0;
	margin: 0;
`;

const QuestionBox = ({
	questions,
	questionState,
	setQuestionState,
	selectedQuestionIndex,
	setSelectedQuestionIndex,
	numOfQuestionsInSec,
	selectedSection,
	selectedSectionIndex,
	setSelectedSectionIndex,
	numOfSections,
	marking,
}) => {
	const [currentQuestion, setCurrentQuestion] = useState("");
	const [isMounted, setIsMounted] = useState(false);
	const [isCleared, setIsCleared] = useState(false);
	const selectedOptions = useRef([]);
	const [hasSelected, setHasSelected] = useState(false);

	const onClickOptionHandler = (alphabet) => {
		if (selectedOptions.current.includes(alphabet)) {
			selectedOptions.current = selectedOptions.current.filter(
				(i) => i !== alphabet
			);
		} else {
			selectedOptions.current.push(alphabet);
		}
		if (!hasSelected) {
			console.log("HERE");
			setQuestionState((prevState) => {
				if (
					prevState[selectedSection][selectedQuestionIndex] ===
					config.questionState.unvisited
				) {
					let newState = JSON.parse(JSON.stringify(prevState));
					newState[selectedSection][selectedQuestionIndex] =
						config.questionState.visited_unattempted;
					setHasSelected(true);
					return newState;
				}
			});
		}
	};

	useEffect(() => {
		setCurrentQuestion(questions[selectedSection][selectedQuestionIndex]);
		setIsMounted(true);
		return () => {
			selectedOptions.current = [];
			setIsCleared(false);
		};
	}, [questions, selectedSection, selectedQuestionIndex]);

	const getAlphabet = (index) => String.fromCharCode(65 + index);

	return (
		<StyledContainer>
			<StyledBox>
				{!isMounted ? null : (
					<>
						<StyledBar>
							<StyledQNum>{`QUESTION ${selectedQuestionIndex + 1}`}</StyledQNum>
							<StyledQDetails>
								<p>{`${currentQuestion.type.toUpperCase()} CORRECT`}</p>
								<StyledMarking>
									<p>{`+${marking[currentQuestion.type]["positive"]}`}</p>
									<p>{`-${marking[currentQuestion.type]["negative"]}`}</p>
								</StyledMarking>
								{/* <StyledMarking>{`-${
									marking[currentQuestion.type]["negative"]
								}`}</StyledMarking> */}
							</StyledQDetails>
						</StyledBar>
						<StyledQuestion>{currentQuestion.question}</StyledQuestion>

						<StyledOptionBox>
							{currentQuestion.options.map((option, index) => {
								const alphabet = getAlphabet(index);
								return (
									<StyledOption
										key={`${selectedSection}${selectedQuestionIndex}${index}`}
										onClick={() => onClickOptionHandler(alphabet)}>
										<AnswerOption
											isCleared={isCleared}
											alphabet={alphabet}
											option={option}
										/>
									</StyledOption>
								);
							})}
						</StyledOptionBox>
					</>
				)}
			</StyledBox>
			<BottomBar
				setIsCleared={setIsCleared}
				questionState={questionState}
				setQuestionState={setQuestionState}
				selectedOptions={selectedOptions}
				selectedQuestionIndex={selectedQuestionIndex}
				setSelectedQuestionIndex={setSelectedQuestionIndex}
				numOfQuestionsInSec={numOfQuestionsInSec}
				selectedSection={selectedSection}
				selectedSectionIndex={selectedSectionIndex}
				setSelectedSectionIndex={setSelectedSectionIndex}
				numOfSections={numOfSections}
			/>
		</StyledContainer>
	);
};
export default React.memo(QuestionBox);
