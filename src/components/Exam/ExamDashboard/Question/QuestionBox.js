import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import theme from "../../../../styles/theme";
import BottomBar from "./BottomBar";
const { colors, fontSizes } = theme;

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
	/* flex-grow: 1; */
	align-items: flex-start;
	margin: 12px;
`;

const StyledOption = styled.div`
	display: flex;
	width: 100%;
	justify-content: stretch;
	font-size: ${fontSizes.md};
	margin: 0;
	padding: 0;

	> div {
		padding: 12px 0;
		margin: 12px 12px 12px 0;
		border-radius: 5px;
		flex-grow: 0;

		:last-child {
			flex: 1 0 12rem;
			font-weight: 500;
			text-align: left;
			padding: 12px;
			margin: 12px 0;
			background: ${colors.cultured};
			border: 2px solid transparent;
			/* background: ${(props) =>
				props.isSelected ? colors.blueMunsell : colors.cultured};
			color: ${(props) => (props.isSelected ? "white" : "black")};
			border: ${(props) =>
				props.isSelected
					? `2px solid ${colors.blueMunsell}`
					: "2px solid transparent"}; */
			transition: border 0.1s linear;
			transition: background 0.1s linear;
		}
	}
	:hover {
		cursor: pointer;
	}
	:hover div:last-child {
		cursor: pointer;
		border: 2px solid ${colors.blueMunsell};
	}
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
	// let selectedOptions = [];

	const selectedOptions = useRef([]);

	// const [selectedOptions, setSelectedOptions] = useState([]);
	// const [selectedOptionsState, setSelectedOptionsState] = useState([]);

	const toggleClass = (arr) => {
		arr.forEach((el) => {
			
		})
	}

	const onClickOption = (e, alphabet) => {
		if (selectedOptions.current.includes(alphabet)) {
			selectedOptions.current = selectedOptions.current.filter(
				(i) => i !== alphabet
			);
			e.target.style.background = colors.cultured;
			e.target.style.color = "black";
			e.target.style.border = "2px solid transparent";
		} else {
			selectedOptions.current.push(alphabet);
			e.target.style.background = colors.blueMunsell;
			e.target.style.color = "white";
			e.target.style.border = `2px solid ${colors.blueMunsell}`;
		}
		console.log(selectedOptions.current);
		console.log(alphabet);
	};

	// const onClickOption = (e, alphabet) => {
	// 	if (selectedOptions.includes(alphabet)) {
	// 		selectedOptions = selectedOptions.filter((i) => i !== alphabet);
	// 		e.target.style.background = colors.cultured;
	// 		e.target.style.color = "black";
	// 		e.target.style.border = "2px solid transparent";
	// 	} else {
	// 		selectedOptions.push(alphabet);
	// 		e.target.style.background = colors.blueMunsell;
	// 		e.target.style.color = "white";
	// 		e.target.style.border = `2px solid ${colors.blueMunsell}`;
	// 	}
	// 	console.log(selectedOptions);
	// 	console.log(alphabet);
	// };
	// const onClickOption = (alphabet) => {
	// 	setSelectedOptions((prevState) => {
	// 		const arr = prevState.includes(alphabet)
	// 			? prevState.filter((i) => i !== alphabet)
	// 			: [...prevState, alphabet];
	// 		return arr;
	// 	});
	// 	console.log(selectedOptions);
	// 	console.log(alphabet);
	// };

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
										key={index}
										isSelected={selectedOptions.current.includes(alphabet)}
										onClick={(e) => onClickOption(e, alphabet)}>
										<div>{alphabet}</div>
										<div>{option}</div>
										{console.log("QB")}
									</StyledOption>
								);
							})}
						</StyledOptionBox>
					</>
				)}
			</StyledBox>
			<BottomBar
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
