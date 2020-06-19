import React, { useState } from "react";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";
import mixins from "../../../styles/mixins";
import Examnav from "../Examnav";
import NewForm from "./NewForm";
import NewDetails from "./NewDetails";
import QuestionInput from "./QuestionInput";

const StyledContainer = styled.div`
	${mixins.fullFlexCenter};
	align-items: center;
`;

const NewExam = () => {
	const [step, setStep] = useState(0);
	const [examDetails, setExamDetails] = useState({});
	const [sections, setSections] = useState([]);
	const [marking, setMarking] = useState({});
	const [questionAnswers, setQuestionAnswers] = useState({});
	const [examName, setExamName] = useState("");
	const [startDate, setStartDate] = useState(null);
	const [startTime, setStartTime] = useState(null);
	const [endTime, setEndTime] = useState(null);

	let currentForm = null;

	switch (step) {
		case 0:
			currentForm = (
				<NewForm
					setStep={setStep}
					examDetails={examDetails}
					setExamDetails={setExamDetails}
					examName={examName}
					setExamName={setExamName}
					startDate={startDate}
					setStartDate={setStartDate}
					startTime={startTime}
					setStartTime={setStartTime}
					endTime={endTime}
					setEndTime={setEndTime}
				/>
			);
			break;
		case 1:
			currentForm = (
				<NewDetails
					setStep={setStep}
					sections={sections}
					setSections={setSections}
					marking={marking}
					setMarking={setMarking}
					setQuestionAnswers={setQuestionAnswers}
				/>
			);
			break;
		case 2:
			currentForm = (
				<QuestionInput
					setStep={setStep}
					sections={sections}
					examDetails={examDetails}
					questionAnswers={questionAnswers}
					setQuestionAnswers={setQuestionAnswers}
				/>
			);
			break;
		default:
			break;
	}

	return (
		<CSSTransition in timeout={600} classNames="fade" appear>
			<StyledContainer>
				<Examnav name="Wipro IAE" />
				{currentForm}
			</StyledContainer>
		</CSSTransition>
	);
};

export default NewExam;
