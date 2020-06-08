import React, { useState, useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import Loader from "../Loader";
import axios from "axios";
import config from "../../config";

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
			{!isMounted ? <Loader /> : null}
			{exams.map((exam, index) => (
				<div key={index}>
					<Link to={`${match.url}/${Object.keys(exam)[0]}`}>
						{Object.values(exam)[0]}
					</Link>
				</div>
			))}
		</>
	);
};

export default Exams;
