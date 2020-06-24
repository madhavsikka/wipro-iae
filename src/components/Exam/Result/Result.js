import React, { useState, useEffect } from "react";
import Examnav from "../Examnav";
import mixins from "../../../styles/mixins";
import styled from "styled-components";
import { useParams, Redirect } from "react-router-dom";
import Bargraph from "./Bargraph";
import Pichart from "./Pichart";
import Table from "./Table";
import theme from "../../../styles/theme";
import axios from "axios";
import { CSSTransition } from "react-transition-group";
import config from "../../../config";
import Loader from "../../Loader";
const { colors, fontSizes } = theme;

const StyledContainer = styled.div`
	${mixins.fullFlexCenter};
	align-items: stretch;
`;

const StyledGrid = styled.div`
	display: grid;
	place-content: stretch;
	grid-template-areas:
		"score bar"
		"key	 bar"
		"key   pie";
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 150px 125px calc(100% - 275px - 4rem);
	grid-gap: 2rem;
	padding: 1rem;
	flex-grow: 1;
	margin: 0;
`;

const StyledScore = styled.div`
	grid-area: ${(props) => (props.area ? props.area : "")};
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
	border-radius: 7px;
	margin: 0;
	background: ${colors.blueMunsellTransparent};
	font-size: ${fontSizes.lg};
	font-weight: 500;
	color: white;
	padding: 1rem;
	div {
		:first-child {
			font-size: ${fontSizes.xl};
			font-weight: bold;
		}
		:nth-child(n + 2) {
			span {
				:first-child {
					font-weight: bold;
					margin-right: 5px;
				}
			}
		}
	}
`;

const StyledWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0;
	padding: 0;
`;

const Result = ({ uid, displayName, userResponseId }) => {
	const { examId } = useParams();
	const [answerKey, setAnswerKey] = useState({});
	const [responses, setResponses] = useState({});
	const [score, setScore] = useState({});
	const [marking, setMarking] = useState({});
	let marks = [];
	let totalMarks = 0;

	Object.keys(score).forEach((sec) => {
		marks.push(
			score[sec]["correct"] * marking[sec]["positive"] +
				score[sec]["wrong"] * marking[sec]["negative"]
		);
		totalMarks = marks.reduce((a, b) => a + b, 0);
	});

	const SortToString = (arr) => {
		if (arr.length === 0) {
			return "";
		} else {
			return JSON.stringify(arr.sort());
		}
	};

	if (
		responses &&
		Object.keys(answerKey).length !== 0 &&
		Object.keys(responses).length !== 0 &&
		Object.keys(score).length === 0
	) {
		let scoreObject = {};
		Object.keys(answerKey).forEach((sec, secIndex) => {
			scoreObject[sec] = { correct: 0, wrong: 0, unattempted: 0 };
			answerKey[sec].forEach((_, ansArrIndex) => {
				if (responses && responses[sec] && responses[sec][ansArrIndex]) {
					if (
						SortToString(answerKey[sec][ansArrIndex]) ===
						SortToString(responses[sec][ansArrIndex])
					) {
						scoreObject[sec]["correct"]++;
					} else {
						if()
						scoreObject[sec]["wrong"]++;
					}
				}
			});
		});
		setScore({ ...scoreObject });
		console.log("Score", JSON.stringify(scoreObject));
	}

	useEffect(() => {
		if (userResponseId) {
			axios
				.get(`${config.firebase.databaseURL}/answerKeys.json`)
				.then((res) => {
					let ansKeyObj = Object.values(res.data).filter(
						(val) => val["examId"] === examId
					);
					console.log(ansKeyObj);
					setMarking(ansKeyObj[0]["marking"]);
					setAnswerKey(ansKeyObj[0]["answerKey"]);
				})
				.catch((err) => {
					console.log(err);
				});
			axios
				.get(`${config.firebase.databaseURL}/userResponses.json`)
				.then((res) => {
					console.log(res.data[userResponseId]["response"]);
					setResponses(res.data[userResponseId]["response"]);
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}, [examId, userResponseId]);

	return (
		<>
			{!userResponseId ? (
				<Redirect to="/" />
			) : (
				<>
					{responses &&
					(Object.keys(answerKey).length === 0 ||
						Object.keys(responses).length === 0 ||
						Object.keys(score).length === 0 ||
						Object.keys(marking).length === 0) ? (
						<Loader />
					) : (
						<CSSTransition in timeout={300} classNames="page" appear>
							<StyledContainer>
								<Examnav name="Result" />
								<StyledGrid>
									<StyledScore area="score">
										<div>Score Card</div>
										<div>
											<span>Name:</span>
											<span>{displayName}</span>
										</div>
										<div>
											<span>{`Marks Scored:`}</span>
											<span>{totalMarks}</span>
										</div>
									</StyledScore>
									<StyledWrapper style={{ gridArea: "bar" }}>
										<Bargraph
											area="bar"
											height="275px"
											score={score}
											marking={marking}
										/>
									</StyledWrapper>
									<StyledWrapper style={{ gridArea: "pie" }}>
										<Pichart
											area="pie"
											width="320px"
											height="320px"
											score={score}
											marking={marking}
										/>
									</StyledWrapper>
									<div style={{ gridArea: "key" }}>
										<Table answerKey={answerKey} responses={responses} />
									</div>
								</StyledGrid>
							</StyledContainer>
						</CSSTransition>
					)}
				</>
			)}
		</>
	);
};

export default Result;
