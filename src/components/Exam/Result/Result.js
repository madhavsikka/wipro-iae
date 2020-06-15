import React from "react";
import Examnav from "../Examnav";
import mixins from "../../../styles/mixins";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Bargraph from "./Bargraph";
// import Pichart from "./Pichart";
import Table from "./Table";
import theme from "../../../styles/theme";
// import axios from "axios";
// import config from "../../config";
// import Loader from "../Loader";
const { colors, fontSizes } = theme;

const StyledContainer = styled.div`
	${mixins.fullFlexCenter};
	align-items: stretch;
`;

const StyledGrid = styled.div`
	display: grid;
	place-content: stretch;
	grid-template-areas:
		"score key"
		"graph key";
	grid-template-columns: 1fr 1fr;
	/* grid-template-rows: 100px repeat(2, calc(100% - 100px - 4rem)); */
	grid-template-rows: 150px calc(100% - 150px - 2rem);
	grid-gap: 2rem;
	padding: 1rem;
	flex-grow: 1;
	margin: 0;
`;

const StyledScore = styled.div`
	grid-area: ${(props) => (props.area ? props.area : "")};
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 7px;
	margin: 0;
	background: ${colors.blueMunsellTransparent};
	font-size: ${fontSizes.xxl};
	font-weight: 500;
	color: white;
`;

const Result = () => {
	const { examId } = useParams();

	// const [answerKey, setAnswerKey] = useState({});
	// const [responses, setResponses] = useState({});

	// useEffect(() => {
	// 	axios
	// 		.get(`${config.jsonDb.base}/${examId}`)
	// 		.then((res) => {
	// 			console.log(res.data.answerKey);
	// 			console.log(res.data.responses);
	// 			setAnswerKey(res.data.asnwerKey);
	// 			setResponses(res.data.responses);
	// 		})
	// 		.catch((err) => {
	// 			console.log(err);
	// 		});

	// 	console.log(`${config.firebase.databaseURL}/${examId}.json`);
	// 	axios
	// 		.get(`${config.firebase.databaseURL}/${examId}/answerKey.json`)
	// 		.then((res) => {
	// 			console.log(res.data);
	// 			setAnswerKey(res.data);
	// 		})
	// 		.catch((err) => {
	// 			console.log(err);
	// 		});
	// 	axios
	// 		.get(`${config.firebase.databaseURL}/${examId}/responses.json`)
	// 		.then((res) => {
	// 			console.log(res.data);
	// 			setResponses(res.data);
	// 		})
	// 		.catch((err) => {
	// 			console.log(err);
	// 		});
	// }, [examId]);

	return (
		<StyledContainer>
			<Examnav name={`Results For Exam ${examId}`} />
			<StyledGrid>
				<StyledScore area="score">SCORE</StyledScore>
				<Bargraph area="graph" height="250px" />
				{/* <Pichart area="pi" width="300" height="300" /> */}
				<div style={{ gridArea: "key" }}>
					<Table />
				</div>
			</StyledGrid>
		</StyledContainer>
	);
};

export default Result;
