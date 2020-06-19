import React from "react";
import styled from "styled-components";
import mixins from "../../../styles/mixins";
import QuestionArea from "./Question/QuestionArea";
import Examnav from "../Examnav";
import { timeDifference } from "../../../utils";
import { useLocation, Redirect } from "react-router-dom";

const StyledContainer = styled.div`
	${mixins.fullFlexCenter};
	align-items: stretch;
`;

const ExamDashboard = () => {
	const { data } = useLocation();
	let examData = null;

	if (data) {
		examData = {
			name: data.currentExam.name,
			date: data.currentExam.date,
			duration: timeDifference(
				data.currentExam.startTime,
				data.currentExam.endTime
			),
			marking: {
				single: {
					positive: "4",
					negative: "1",
				},
				multi: {
					positive: "4",
					negative: "2",
				},
			},
			sections: Object.keys(data.currentExam.questions),

			numQuestions: Object.keys(data.currentExam.questions).reduce(
				(acc, sec) => {
					acc[sec] = data.currentExam.questions[sec][
						"numOfQuestions"
					].toString();
					return acc;
				},
				{}
			),
			questions: data.currentExam.questions,
		};
	}

	return (
		<>
			{examData ? (
				<StyledContainer>
					<Examnav name={examData.name} />
					<QuestionArea examData={examData} />
				</StyledContainer>
			) : (
				<Redirect to="/exams" />
			)}
		</>
	);
};

export default ExamDashboard;
