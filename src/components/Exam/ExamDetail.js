import React, { useState, useEffect } from "react";
import { Link, useParams, useRouteMatch } from "react-router-dom";
import Examnav from "./Examnav";
import mixins from "../../styles/mixins";
import styled from "styled-components";
import Loader from "../Loader";
import config from "../../config";
import axios from "axios";

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
`;

const ExamDetail = () => {
	const { examId } = useParams();
	const { url } = useRouteMatch();
	const [isMounted, setIsMounted] = useState(false);
	const [examData, setExamData] = useState({});

	useEffect(() => {
		axios
			.get(`${config.jsonDb.base}/${examId}`)
			.then((res) => {
				console.log(res.data);
				setExamData(res.data);
				setIsMounted(true);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [examId]);

	return (
		<>
			<StyledContainer>
				<Examnav name={`Details For Exam ${examId}`} />
				{!isMounted ? (
					<Loader />
				) : (
					<StyledBox>
						<div>ExamDetail for {examId}</div>
						<div>Details for {examData.name}</div>
						<Link
							to={{ pathname: `${url}/exam-dashboard`, data: { examData } }}>
							Start Exam
						</Link>
					</StyledBox>
				)}
			</StyledContainer>
		</>
	);
};

export default ExamDetail;
