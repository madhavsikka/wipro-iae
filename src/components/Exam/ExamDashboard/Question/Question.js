import React, { useState, useEffect } from "react";
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

const Question = ({ examData }) => {
	const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(0);
	const [selectedSectionIndex, setSelectedSectionIndex] = useState(0);
	const [numOfQuestionsInSec, setNumOfQuestionsInSec] = useState(0);
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		if (examData) {
			setNumOfQuestionsInSec(
				examData.numQuestions[examData.sections[selectedSectionIndex]]
			);
			setSelectedQuestionIndex(0);
			setIsMounted(true);
			console.log(`Section No: ${selectedSectionIndex}`);
		}
	}, [examData, selectedSectionIndex]);

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
										selectedSectionName={examData.sections[selectedSectionIndex]}
										selectedSectionIndex={selectedSectionIndex}
										selectedQuestionIndex={selectedQuestionIndex}
										setSelectedQuestionIndex={setSelectedQuestionIndex}
										numOfQuestionsInSec={numOfQuestionsInSec}
									/>
								</WrapperDiv>
								<WrapperDiv area="Timer">
									<Timer />
								</WrapperDiv>
								<WrapperDiv area="QuestionBox">
									{console.log("Q")}
									<QuestionBox
										questions={examData.questions}
										selectedSection={examData.sections[selectedSectionIndex]}
										selectedQuestionIndex={selectedQuestionIndex}
										setSelectedQuestionIndex={setSelectedQuestionIndex}
										numOfQuestionsInSec={numOfQuestionsInSec}
										selectedSectionIndex={selectedSectionIndex}
										setSelectedSectionIndex={setSelectedSectionIndex}
										numOfSections={examData.sections.length}
									/>
								</WrapperDiv>

								<WrapperDiv area="SectionBar">
									<SectionBar
										sections={examData.sections}
										selectedSectionIndex={selectedSectionIndex}
										setSelectedSectionIndex={setSelectedSectionIndex}
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

export default React.memo(Question);
