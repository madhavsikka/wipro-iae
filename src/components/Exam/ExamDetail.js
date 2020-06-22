import React from "react";
import {
	Link,
	useParams,
	useRouteMatch,
	useLocation,
	Redirect,
} from "react-router-dom";
import Examnav from "./Examnav";
import mixins from "../../styles/mixins";
import styled from "styled-components";
// import config from "../../config";
// import axios from "axios";

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

const ExamDetail = ({ user, displayName, logOutHandler }) => {
	const { examId } = useParams();
	const { url } = useRouteMatch();
	let { data } = useLocation();
	let currentExam = null;
	if (data) {
		currentExam = data["examData"][examId];
	}
	// const [isMounted, setIsMounted] = useState(false);
	// const [examData, setExamData] = useState({});

	// useEffect(() => {
	// 	axios
	// 		.get(`${config.jsonDb.base}/${examId}`)
	// 		.then((res) => {
	// 			console.log(res.data);
	// 			setExamData(res.data);
	// 			setIsMounted(true);
	// 		})
	// 		.catch((err) => {
	// 			console.log(err);
	// 		});
	// }, [examId]);

	return (
		<>
			{!user ? (
				<Redirect to="/login" />
			) : (
				<StyledContainer>
					<Examnav
						name={`Details For Exam ${examId}`}
						displayName={displayName}
						logOutHandler={logOutHandler}
					/>
					{console.log(data)}
					{!currentExam ? (
						<Redirect to="/exams" />
					) : (
						<StyledBox>
							<div>ExamDetail for {examId}</div>
							<div>Details for {currentExam.name}</div>
							<Link
								to={{
									pathname: `${url}/exam-dashboard`,
									data: { currentExam, examId },
								}}>
								Start Exam
							</Link>
						</StyledBox>
					)}
				</StyledContainer>
			)}
		</>
	);
};

export default ExamDetail;
