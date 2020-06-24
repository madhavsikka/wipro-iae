import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";
import { Redirect } from "react-router-dom";
import { ProgressBox, QuestionBox, Timer, SectionBar } from "./index";

const StyledGrid = styled.div`
	display: grid;
	place-content: stretch;
	margin: 0;
	padding: 1rem;
	flex-grow: 1;
	grid-template-areas:
		"SectionBar       Timer"
		"QuestionBox	    ProgressBox"
		"QuestionBox      ProgressBox"
		"QuestionBox      ProgressBox";
	grid-template-columns: 2.5fr 0.8fr;
	grid-template-rows: 50px 50px calc(100% - 150px - 3rem) 50px;
	gap: 1rem 1rem;
`;

const WrapperDiv = styled.div`
	margin: 0;
	padding: 0;
	grid-area: ${(props) => props.area};
`;

const QuestionArea = ({
	examId,
	examData,
	user,
	uid,
	setUserResponseId,
	setIsSubmitting,
	setIsSubmittedSuccessfully,
}) => {
	const [autoSubmit, setAutoSubmit] = useState(false);
	const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(0);
	const [selectedSectionIndex, setSelectedSectionIndex] = useState(0);
	const [isMounted, setIsMounted] = useState(false);
	const [isReviewed, setIsReviewed] = useState(false);
	const [selectedOptions, setSelectedOptions] = useState({});
	const numOfQuestionsInSec = useRef([]);
	const questionState = useRef({});

	console.log("selectedOptions", selectedOptions);

	if (Object.keys(questionState.current).length === 0 && examData) {
		examData.sections.forEach((sec) => {
			let sectionArray;
			(sectionArray = []).length = examData.numQuestions[sec];
			sectionArray.fill(0);
			questionState.current[sec] = [...sectionArray];
		});
	}

	if (Object.keys(numOfQuestionsInSec.current).length === 0 && examData) {
		Object.values(examData.numQuestions).forEach((num) => {
			numOfQuestionsInSec.current.push(+num);
		});
	}

	if (Object.keys(selectedOptions).length === 0 && examData) {
		let optionsObject = {};
		examData.sections.forEach((sec) => {
			let sectionArray;
			(sectionArray = []).length = examData.numQuestions[sec];
			sectionArray.fill([]);
			optionsObject[sec] = sectionArray;
			console.log(JSON.stringify(optionsObject));
		});
		setSelectedOptions(optionsObject);
	}

	useEffect(() => {
		setIsMounted(true);
	}, [setIsMounted]);

	return (
		<>
			{!examData ? (
				<Redirect to="/exams" />
			) : (
				<>
					{!isMounted ? null : (
						<CSSTransition
							in
							timeout={600}
							classNames="fade"
							appear
							unmountOnExit>
							<StyledGrid>
								<WrapperDiv area="ProgressBox">
									<ProgressBox
										examId={examId}
										user={user}
										uid={uid}
										setIsSubmitting={setIsSubmitting}
										setIsSubmittedSuccessfully={setIsSubmittedSuccessfully}
										setUserResponseId={setUserResponseId}
										isReviewed={isReviewed}
										setIsReviewed={setIsReviewed}
										questionState={questionState.current}
										selectedOptions={selectedOptions}
										setSelectedOptions={setSelectedOptions}
										selectedSectionName={
											examData.sections[selectedSectionIndex]
										}
										selectedSectionIndex={selectedSectionIndex}
										selectedQuestionIndex={selectedQuestionIndex}
										setSelectedQuestionIndex={setSelectedQuestionIndex}
										numOfQuestionsInSec={numOfQuestionsInSec.current}
										autoSubmit={autoSubmit}
									/>
								</WrapperDiv>
								<WrapperDiv area="Timer">
									<Timer
										duration={examData.duration}
										setAutoSubmit={setAutoSubmit}
									/>
								</WrapperDiv>
								<WrapperDiv area="QuestionBox">
									{console.log(examData)}
									<QuestionBox
										questions={examData.questions}
										questionState={questionState.current}
										selectedOptions={selectedOptions}
										setSelectedOptions={setSelectedOptions}
										selectedSectionName={
											examData.sections[selectedSectionIndex]
										}
										selectedQuestionIndex={selectedQuestionIndex}
										setSelectedQuestionIndex={setSelectedQuestionIndex}
										numOfQuestionsInSec={numOfQuestionsInSec.current}
										selectedSectionIndex={selectedSectionIndex}
										setSelectedSectionIndex={setSelectedSectionIndex}
										numOfSections={examData.sections.length}
										marking={examData.marking}
										isReviewed={isReviewed}
										setIsReviewed={setIsReviewed}
									/>
								</WrapperDiv>

								<WrapperDiv area="SectionBar">
									<SectionBar
										sections={examData.sections}
										setSelectedOptions={setSelectedOptions}
										selectedSectionIndex={selectedSectionIndex}
										setSelectedSectionIndex={setSelectedSectionIndex}
										setSelectedQuestionIndex={setSelectedQuestionIndex}
									/>
								</WrapperDiv>
							</StyledGrid>
						</CSSTransition>
					)}
				</>
			)}
		</>
	);
};

export default React.memo(QuestionArea);
