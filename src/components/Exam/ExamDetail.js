import React, { useState, useEffect, useLayoutEffect } from "react";
import { Link, useParams, useRouteMatch } from "react-router-dom";
import Loader from "../Loader";
import config from "../../config";
import axios from "axios";

const ExamDetail = () => {
	const { examId } = useParams();
	const { url } = useRouteMatch();
	const [isMounted, setIsMounted] = useState(false);
	const [examData, setExamData] = useState({});

	useLayoutEffect(() => {
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
			<div>ExamDetail for {examId}</div>
			{!isMounted ? (
				<Loader />
			) : (
				<>
					<div>Details for {examData.name}</div>
					<Link to={{ pathname: `${url}/exam-dashboard`, data: { examData } }}>
						Start Exam
					</Link>
				</>
			)}
		</>
	);
};

export default ExamDetail;
