import React from "react";
import styled from "styled-components";
import QuestionBox from "./QuestionBox";

const StyledGrid = styled.div`
	display: grid;
	margin: 0;
	padding: 1rem;
	height: 100vh;
	grid-template-areas:
		"TopBar           TopBar"
		"SectionBar       Timer"
		"QuestionScheme   ProgressBox"
		"QuestionBox      ProgressBox"
		"BottomBar        ProgressBox";
	grid-template-columns: 2fr 1fr;
  grid-template-rows: 60px 60px 40px 1fr 40px;
  gap: 1rem 1rem;
`;

const WrapperDiv = styled.div`
	margin: 0;
	padding: 0;
	display: flex;
	justify-content: stretch;
	align-items: stretch;
	grid-area: ${(props) => props.area};
`;

const ExamDashboard = () => {
	return (
		<StyledGrid>
			<div style={{ gridArea: "ProgressBox", border: "2px solid black" }}>
				ProgressBox
			</div>
			<WrapperDiv area="QuestionBox">
				<QuestionBox />
			</WrapperDiv>
		</StyledGrid>
	);
};

export default ExamDashboard;
