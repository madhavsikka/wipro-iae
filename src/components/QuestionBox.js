import React, { useState, useEffect } from "react";
import config from "../config";
import axios from "axios";

const QuestionBox = () => {
	const [questions, setQuestions] = useState([]);

	useEffect(() => {
		axios
			.get(config.jsonDb.questionSet)
			.then((res) => {
				setQuestions(res.data);
			})
			.catch((err) => {
				console.log(err);
			});

		const newQuestion = {
			id: 3,
			question: "xyz",
			options: ["1", "2", "3", "4"],
		};

		// this will not change the data in fake json server, but will give you the fake response as if data was posted in an actual DB
		axios
			.post(config.jsonDb.questionSet, newQuestion)
			.then((res) => {
				console.log("*** Post ***");
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div>
			Dashboard
			{questions.map((question) => {
				return <p>{question.question}</p>;
			})}
		</div>
	);
};

export default QuestionBox;
