import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import theme from "../../../../styles/theme";
import AnswerOption from "./AnswerOption";
import BottomBar from "./BottomBar";
const { fontSizes } = theme;

const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin: 0;
	padding: 0;
	height: 100%;
`;

const StyledBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	box-shadow: 0 0 12px lightgray;
	border-radius: 5px;
	padding: 12px;
	margin-bottom: 1rem;
	flex: 1;
	height: 100%;
	width: 100%;
	overflow-y: scroll;
`;

const StyledQuestion = styled.div`
	font-size: ${fontSizes.lg};
	font-weight: bold;
	margin: 12px;
	text-align: left;
`;

const StyledOptionBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
	margin: 12px;
`;

const StyledOption = styled.div`
	padding: 0;
	margin: 0;
`;

const QuestionBox = ({
	questions,
	selectedQuestionIndex,
	setSelectedQuestionIndex,
	numOfQuestionsInSec,
	selectedSection,
	selectedSectionIndex,
	setSelectedSectionIndex,
	numOfSections,
}) => {
	const [currentQuestion, setCurrentQuestion] = useState("");
	const [isMounted, setIsMounted] = useState(false);
	const [isCleared, setIsCleared] = useState(false);
	const selectedOptions = useRef([]);

	const onClickOptionHandler = (alphabet) => {
		if (selectedOptions.current.includes(alphabet)) {
			selectedOptions.current = selectedOptions.current.filter(
				(i) => i !== alphabet
			);
		} else {
			selectedOptions.current.push(alphabet);
		}
		console.log(selectedOptions.current);
		console.log(alphabet);
	};

	useEffect(() => {
		setCurrentQuestion(questions[selectedSection][selectedQuestionIndex]);
		setIsMounted(true);
		return () => {
			selectedOptions.current = [];
			console.log("cleared");
			console.log(selectedOptions.current);
		};
	}, [questions, selectedSection, selectedQuestionIndex]);

	const getAlphabet = (index) => String.fromCharCode(65 + index);

	return (
		<StyledContainer>
			<StyledBox>
				{!isMounted ? null : (
					<>
						<StyledQuestion>{`${currentQuestion.question} --- ${selectedSection} --- ${selectedQuestionIndex}`}</StyledQuestion>

						<StyledOptionBox>
							{currentQuestion.options.map((option, index) => {
								const alphabet = getAlphabet(index);
								return (
									<StyledOption
										key={`${selectedSection}${selectedQuestionIndex}${index}`}
										onClick={() => onClickOptionHandler(alphabet)}>
										<AnswerOption isCleared={isCleared} alphabet={alphabet} option={option} />
									</StyledOption>
								);
							})}
						</StyledOptionBox>
					</>
				)}
			</StyledBox>
			<BottomBar
				setIsCleared={setIsCleared}
				selectedOptions={selectedOptions}
				selectedQuestionIndex={selectedQuestionIndex}
				setSelectedQuestionIndex={setSelectedQuestionIndex}
				numOfQuestionsInSec={numOfQuestionsInSec}
				selectedSectionIndex={selectedSectionIndex}
				setSelectedSectionIndex={setSelectedSectionIndex}
				numOfSections={numOfSections}
			/>
		</StyledContainer>
	);
};
export default React.memo(QuestionBox);
