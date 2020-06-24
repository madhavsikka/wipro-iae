import React, { useState } from "react";
import styled from "styled-components";
import mixins from "../../../styles/mixins";
import QuestionArea from "./Question/QuestionArea";
import Examnav from "../Examnav";
import Loader from "../../Loader";
import { timeDifference } from "../../../utils";
import { useLocation, Redirect, useParams } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

const StyledContainer = styled.div`
	${mixins.fullFlexCenter};
	align-items: stretch;
`;

const ExamDashboard = ({
	user,
	displayName,
	logOutHandler,
	uid,
	setUserResponseId,
}) => {
	const { data } = useLocation();
	const { examId } = useParams();
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSubmittedSuccessfully, setIsSubmittedSuccessfully] = useState(false);

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
			{!user ? (
				<Redirect to="/login" />
			) : (
				<>
					{isSubmittedSuccessfully ? (
						<Redirect
							to={{
								pathname: `/exams/${examId}/result`,
								data: data.currentExam.name,
							}}
						/>
					) : (
						<>
							{isSubmitting ? (
								<Loader />
							) : (
								<>
									{examData && examId ? (
										<CSSTransition in timeout={300} classNames="page" appear>
											<StyledContainer>
												<Examnav
													name={examData.name}
													displayName={displayName}
													logOutHandler={logOutHandler}
												/>
												<QuestionArea
													examId={examId}
													examData={examData}
													user={user}
													uid={uid}
													setUserResponseId={setUserResponseId}
													setIsSubmitting={setIsSubmitting}
													setIsSubmittedSuccessfully={
														setIsSubmittedSuccessfully
													}
												/>
											</StyledContainer>
										</CSSTransition>
									) : (
										<Redirect to="/exams" />
									)}
								</>
							)}
						</>
					)}
				</>
			)}
		</>
	);
};

export default ExamDashboard;
