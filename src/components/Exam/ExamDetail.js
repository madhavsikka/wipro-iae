import React from "react";
import {
	Link,
	useParams,
	useRouteMatch,
	useLocation,
	Redirect,
} from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import Examnav from "./Examnav";
import mixins from "../../styles/mixins";
import styled from "styled-components";
import Button from "../../styles/Button";
import theme from "../../styles/theme";
const { colors, fontSizes } = theme;

const StyledContainer = styled.div`
	${mixins.fullFlexCenter};
	align-items: stretch;
`;

const StyledBox = styled.div`
	display: flex;
	flex-grow: 1;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: white;
	margin-top: 5px;
`;

const StyledList = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	flex-grow: 1;
	box-shadow: 0 0 4px lightgrey;
	border-radius: 5px;
	background: ${colors.cultured};
	padding: 1rem;
	margin: 2rem;
	align-items: center;
	padding: 1rem;
	font-size: ${fontSizes.lg};
	font-weight: 500;
	div {
		font-weight: bold;
		color: ${colors.blueMunsell};
		font-size: ${fontSizes.xxl};
		margin-bottom: 2rem;
	}
	ul {
		flex-grow: 1;
	}
	li {
		text-align: left;
		list-style-position: outside;
		margin-bottom: 2rem;
	}
`;

const ExamDetail = ({ user, displayName, logOutHandler }) => {
	const { examId } = useParams();
	const { url } = useRouteMatch();
	let { data } = useLocation();
	let currentExam = null;
	if (data) {
		currentExam = data["examData"][examId];
	}

	return (
		<>
			{!user ? (
				<Redirect to="/login" />
			) : (
				<CSSTransition in timeout={300} classNames="page" appear>
					<StyledContainer>
						<Examnav
							name={`${currentExam.name}`}
							displayName={displayName}
							logOutHandler={logOutHandler}
						/>
						{console.log(data)}
						{!currentExam ? (
							<Redirect to="/exams" />
						) : (
							<StyledBox>
								<StyledList>
									<div>Instructions</div>
									<ul>
										<li>
											Students should verify their names and IDs. In case of any
											discrepancy, report it to the instructor.
										</li>
										<li>
											Do not bring any unauthorised material (e.g. written
											notes, notes in dictionaries, paper, and sticky tape
											eraser). Pencil cases and glasses cases must not be taken
											to your desks. These will be checked and confiscated.
										</li>
										<li>
											Unless specifically indicated in instructions from the
											module convenor either on the examination paper itself or
											in a separate note from the module convenor, no extra
											pages of any sort will be provided for rough work. You
											should normally be required to do any rough work in the
											exam answer books provided and to draw a line through any
											such work not considered part of your answer
										</li>
										<li>
											Students must not stop the session and then return to it.
											This is especially important in the online environment
											where the system will "time-out" and not allow the student
											or you to reenter the exam site.
										</li>
										<li>
											If your online exam is interrupted, click the "Continue"
											button on your web browser to see if you can return to the
											exam. If not, follow the instructions below to resume
											taking the exam.
										</li>
									</ul>
									<Link
										style={{ textDecoration: "none" }}
										to={{
											pathname: `${url}/exam-dashboard`,
											data: { currentExam },
										}}>
										<Button
											color={colors.buttonGreen}
											textColor={colors.white}
											fontSize={fontSizes.md}
											borderColor={colors.buttonGreen}
											hoverColor={colors.buttonGreenDark}
											hoverText={colors.white}
											weight="600">
											Start Exam
										</Button>
									</Link>
								</StyledList>
								{/* <div>ExamDetail for {examId}</div>
							<div>Details for {currentExam.name}</div> */}
							</StyledBox>
						)}
					</StyledContainer>
				</CSSTransition>
			)}
		</>
	);
};

export default ExamDetail;
