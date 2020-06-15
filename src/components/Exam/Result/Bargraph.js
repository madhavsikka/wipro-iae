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

const Bargraph = ({ area, width, height }) => {
	const chartRef = createRef();

	useEffect(() => {
		const myChartRef = chartRef.current.getContext("2d");

		new Chart(myChartRef, {
			type: "bar",
			data: {
				labels: ["Physics", "Chemistry", "Mathematics"],
				datasets: [
					{
						label: "Marks Secured",
						data: [30, 10, 25],
						backgroundColor: [
							"rgba(255, 99, 132, 0.3)",
							"rgba(54, 162, 235, 0.3)",
							"rgba(255, 206, 86, 0.3)",
						],
						borderColor: [
							"rgba(255, 99, 132, 1)",
							"rgba(54, 162, 235, 1)",
							"rgba(255, 206, 86, 1)",
						],
						borderWidth: 1,
					},
				],
			},
			options: {
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
	}, [chartRef]);
	return (
		<GraphContainer>
			<canvas height={height} width={width} ref={chartRef}></canvas>
		</GraphContainer>
	);
};

export default Bargraph;
