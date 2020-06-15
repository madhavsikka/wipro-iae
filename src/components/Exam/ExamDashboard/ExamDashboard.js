import React from "react";
import styled from "styled-components";
import mixins from "../../../styles/mixins";
import QuestionArea from "./Question/QuestionArea";
import Examnav from "../Examnav";
import { useLocation, Redirect } from "react-router-dom";

const StyledContainer = styled.div`
	${mixins.fullFlexCenter};
	align-items: stretch;
`;

const ExamDashboard = () => {
	const { data } = useLocation();

	return (
		<>
			{data ? (
				<StyledContainer>
					<Examnav name={data.examData.name} />
					<QuestionArea examData={data.examData} />
				</StyledContainer>
			) : (
				<Redirect to="/exams" />
			)}
		</>
	);
};

export default ExamDashboard;
