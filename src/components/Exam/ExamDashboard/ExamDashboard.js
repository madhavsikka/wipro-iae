import React from "react";
import styled from "styled-components";
import mixins from "../../../styles/mixins";
import Question from "./Question/Question";
import TopBar from "./TopBar";
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
					<TopBar />
					<Question examData={data.examData} />
				</StyledContainer>
			) : (
				<Redirect to="/exams" />
			)}
		</>
	);
};

export default ExamDashboard;
