import React, { createRef, useEffect } from "react";
import Chart from "chart.js";
import styled from "styled-components";

const GraphContainer = styled.div`
	display: flex;
	grid-area: ${(props) => (props.area ? props.area : "")};
`;

const Pichart = ({ area, width, height }) => {
	const chartRef = createRef();

	useEffect(() => {
		const myChartRef = chartRef.current.getContext("2d");

		new Chart(myChartRef, {
			type: "pie",
			data: {
				labels: ["Attempted", "Unattempted"],
				datasets: [
					{
						label: "Question Status",
						data: [60, 40],
						backgroundColor: [
							"rgba(255, 99, 132, 0.3)",
							"rgba(54, 162, 235, 0.3)",
						],
						borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
						borderWidth: 1,
					},
				],
			},
		});
	}, [chartRef]);
	return (
		<GraphContainer>
			<canvas width={width} height={height} ref={chartRef}></canvas>
		</GraphContainer>
	);
};

export default Pichart;
