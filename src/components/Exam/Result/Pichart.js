import React, { createRef, useEffect } from "react";
import Chart from "chart.js";
import styled from "styled-components";

const GraphContainer = styled.div`
	display: flex;
	grid-area: ${(props) => (props.area ? props.area : "")};
`;

const Pichart = ({ area, width, height, score, marking }) => {
	const chartRef = createRef();

	let marks = [];
	let totalMarks = 0;

	Object.keys(score).forEach((sec) => {
		marks.push(
			score[sec]["correct"] * marking[sec]["positive"] +
				score[sec]["wrong"] * marking[sec]["negative"]
		);
		totalMarks = marks.reduce((a, b) => a + b, 0);
	});

	useEffect(() => {
		const myChartRef = chartRef.current.getContext("2d");

		new Chart(myChartRef, {
			type: "pie",
			data: {
				labels: Object.keys(score),
				datasets: [
					{
						label: "Contribution %",
						data: marks.map((mark) => (mark * 100) / totalMarks),
						backgroundColor: [
							"rgba(255, 99, 132, 0.3)",
							"rgba(54, 162, 235, 0.3)",
							"rgba(255, 206, 86, 0.3)",
							"rgba(75, 192, 192, 0.3)",
							"rgba(153, 102, 255, 0.3)",
							"rgba(255, 159, 64, 0.3)",
						],
						borderColor: [
							"rgba(255, 99, 132, 1)",
							"rgba(54, 162, 235, 1)",
							"rgba(255, 206, 86, 1)",
							"rgba(75, 192, 192, 1)",
							"rgba(153, 102, 255, 1)",
							"rgba(255, 159, 64, 1)",
						],
						borderWidth: 1,
					},
				],
			},
			options: {
				title: {
					display: true,
					text: "Contribution in Total Marks",
				},
			},
		});
	}, [chartRef, marks, score, totalMarks]);
	return (
		<GraphContainer area={area}>
			<canvas width={width} height={height} ref={chartRef}></canvas>
		</GraphContainer>
	);
};

export default Pichart;
