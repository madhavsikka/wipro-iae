import React, { useState, useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import Loader from "../Loader";
import styled from "styled-components";
import Examnav from "./Examnav";
import axios from "axios";
import mixins from "../../styles/mixins";
import config from "../../config";

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

const Exams = () => {
	const [isMounted, setIsMounted] = useState(false);
	const [exams, setExams] = useState([]);

	let match = useRouteMatch();

	useEffect(() => {
		axios
			.get(config.jsonDb.exams)
			.then((res) => {
				setExams(res.data);
				setIsMounted(true);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<>
			<StyledContainer>
				<Examnav />
				<StyledBox>
					{!isMounted ? <Loader /> : null}
					{exams.map((exam, index) => (
						<div key={index}>
							<Link to={`${match.url}/${Object.keys(exam)[0]}`}>
								{Object.values(exam)[0]}
							</Link>
						</div>
					))}
				</StyledBox>
			</StyledContainer>
		</>
	);
};

export default Exams;
