import React, { createRef, useEffect } from "react";
import Chart from "chart.js";
import styled from "styled-components";

const GraphContainer = styled.div`
	display: flex;
	padding: 0 4rem;
	align-items: center;
	justify-content: center;
	grid-area: ${(props) => (props.area ? props.area : "")};
`;

const Bargraph = ({ area, width, height, score, marking }) => {
	const chartRef = createRef();

	useEffect(() => {
		const myChartRef = chartRef.current.getContext("2d");
		const marks = [];

		Object.keys(score).forEach((sec) => {
			marks.push(
				score[sec]["correct"] * marking[sec]["positive"] +
					score[sec]["wrong"] * marking[sec]["negative"]
			);
		});

		new Chart(myChartRef, {
			type: "bar",
			data: {
				labels: Object.keys(score),
				datasets: [
					{
						label: "Marks Scored",
						data: marks,
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
					text: "Marks Scored",
				},
				scales: {
					yAxes: [
						{
							ticks: {
								beginAtZero: true,
							},
						},
					],
				},
			},
		});
	}, [chartRef, score, marking]);
	return (
		<GraphContainer area={area}>
			<canvas height={height} width={width} ref={chartRef}></canvas>
		</GraphContainer>
	);
};

export default Bargraph;
