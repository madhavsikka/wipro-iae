import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link, useRouteMatch } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { timeFormat12, dateStringWithMonthName } from "../../../utils";
import mixins from "../../../styles/mixins";
import theme from "../../../styles/theme";
import Examnav from "../Examnav";
import config from "../../../config";
import Loader from "../../Loader";
import NewButton from "./NewButton";
const { colors, fontSizes } = theme;

const StyledContainer = styled.div`
	${mixins.fullFlexCenter};
	align-items: center;
`;

const StyledFlex = styled.div`
	${mixins.styledFormFlex};
	justify-content: space-between;
	align-items: center;
	padding: 0 0 1rem 0;
	min-width: 600px;
	:before {
		width: 100%;
		padding: 0.25rem;
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
		background: ${colors.blueMunsell};
		content: "Dashboard";
		color: white;
		font-weight: 500;
		font-size: ${fontSizes.xxl};
	}
`;

const StyledHeadingContainer = styled.div`
	display: flex;
	flex-grow: 1;
	flex-direction: column;
	justify-content: flex-start;
	align-items: stretch;
	width: 100%;
	>div:first-child {
		margin: 1rem 0 0.1rem 1.25rem;
		text-align: left;
		color: ${colors.blueMunsell};
		font-weight: 500;
		font-size: ${fontSizes.lg};
	}
`;

const StyledExamList = styled.div`
	display: grid;
	margin: 1rem;
	width: 100%;
	place-content: center;
	grid-template-columns: repeat(auto-fill, 11rem);
	grid-gap: 1rem;
	margin: 1rem 0;
	max-height: 450px;
	overflow-y: auto;
	padding: 0.1rem 0;
`;

const StyledCard = styled.div`
	display: flex;
	flex-grow: 1;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
	padding: 0.5rem;
	width: 11rem;
	max-width: 11rem;
	height: 8rem;
	max-height: 8rem;
	overflow-y: auto;
	border: 2px solid transparent;
	border-radius: 5px;
	box-shadow: 0 0 5px 4px rgba(0, 0, 0, 0.05);
	transition: all 100ms;
	background: white;
	cursor: pointer;
	div {
		:first-child {
			text-align: left;
			color: ${colors.blueMunsell};
			font-weight: bold;
			font-size: ${fontSizes.md};
			margin-bottom: 10px;
		}
		:last-child {
			display: flex;
			flex-direction: column;
			justify-items: flex-start;
			align-items: flex-start;
			height: 40px;
			color: #adb5bd;
			font-weight: 500;
			font-size: ${fontSizes.sm};
			p {
				padding: 0;
				margin: 0;
			}
		}
	}
	:hover {
		border: 2px solid ${colors.blueMunsell};
	}
`;

const AdminDashboard = () => {
	const { url } = useRouteMatch();
	const [examData, setExamData] = useState(null);

	useEffect(() => {
		axios
			.get(`${config.firebase.databaseURL}/exams.json`)
			.then((res) => {
				console.log(res.data);
				setExamData(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<CSSTransition in timeout={600} classNames="fade" appear>
			<StyledContainer>
				<Examnav name="Wipro IAE" />
				{!examData ? (
					<Loader />
				) : (
					<StyledFlex>
						<CSSTransition in timeout={600} classNames="fade" appear>
							<StyledHeadingContainer>
								<div>All Exams</div>
								<StyledExamList>
									{Object.keys(examData).map((examId) => (
										<StyledCard>
											<div>{examData[examId].name}</div>
											<div>
												<p>{timeFormat12(examData[examId].startTime)}</p>
												<p>{dateStringWithMonthName(examData[examId].date)}</p>
											</div>
										</StyledCard>
									))}
								</StyledExamList>
							</StyledHeadingContainer>
						</CSSTransition>
						<Link to={`${url}/new-exam`} style={{ textDecoration: "none" }}>
							<NewButton>Create New Exam</NewButton>
						</Link>
					</StyledFlex>
				)}
			</StyledContainer>
		</CSSTransition>
	);
};

export default AdminDashboard;
