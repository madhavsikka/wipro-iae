import React, { useState, useEffect } from "react";
import styled from "styled-components";
import config from "../../config";
import axios from "axios";
import theme from "../../styles/theme";
const { colors, fontSizes } = theme;

const StyledBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
	box-shadow: 0 0 12px lightgray;
	border-radius: 5px;
	padding: 12px;
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
	align-items: stretch;
	margin: 12px;
`;

const StyledOption = styled.div`
	display: flex;
	align-items: stretch;
	justify-content: center;
	font-size: ${fontSizes.md};
	margin: 0;
	padding: 0;

	> div {
		padding: 12px 0;
		margin: 12px 12px 12px 0;
		border-radius: 5px;

		:last-child {
			min-width: 12rem;
			font-weight: 500;
			text-align: left;
			padding: 12px;
			margin: 12px 0;
			background: ${colors.skyBlue};
			border: 2px solid transparent;
			transition: border 0.1s linear;
		}
	}
	:hover {
		cursor: pointer;
	}
	:hover div:last-child {
		cursor: pointer;
		border: 2px solid ${colors.royalBlue};
	}
`;

const QuestionBox = () => {
	const [isMounted, setIsMounted] = useState(false);
	const [questions, setQuestions] = useState([]);
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [isMultiChoice, setIsMultiChoice] = useState
	const [selectedOption, setSelectedOption] = useState("");

	const onClickOption = (index) => {
		setSelectedOption(getAlphabet(index));
	};

	const getAlphabet = (index) => {
		switch (index) {
			case 0:
				return "A";
			case 1:
				return "B";
			case 2:
				return "C";
			case 3:
				return "D";
			default:
				return;
		}
	};

	useEffect(() => {
		axios
			.get(config.jsonDb.questionSet)
			.then((res) => {
				setQuestions(res.data);
				setIsMounted(true);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<>
			{isMounted && (
				<StyledBox>
					<StyledQuestion>
						{questions[currentQuestionIndex].question}
					</StyledQuestion>

					<StyledOptionBox>
						{questions[currentQuestionIndex].options.map((option, index) => {
							return (
								<StyledOption onClick={() => onClickOption(index)}>
									<div>{`${getAlphabet(index)})`}</div>
									<div>{option}</div>
								</StyledOption>
							);
						})}
					</StyledOptionBox>
				</StyledBox>
			)}
		</>
	);
};

export default QuestionBox;
