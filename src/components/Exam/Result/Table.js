import React from "react";
import styled from "styled-components";
import theme from "../../../styles/theme";
const { colors } = theme;

const StyleContainer = styled.div`
	display: flex;
	padding: 0;
	margin: 0;
`;

const StyledTable = styled.table`
	table-layout: fixed;
	border-collapse: collapse;
	overflow-y: auto;
	width: 100%;
	height: 100%;

	tr {
		background: ${colors.cultured};
	}

	thead tr {
		background: ${colors.blueMunsell} !important;
		color: white;
	}

	tr td:first-child,
	th:first-child {
		border-top-left-radius: 5px;
		border-bottom-left-radius: 5px;
	}
	tr td:last-child,
	th:last-child {
		border-top-right-radius: 5px;
		border-bottom-right-radius: 5px;
	}

	th,
	td {
		padding: 12px;
	}

	tbody td {
		font-weight: 500;
		text-align: center;
	}
`;

const StyledTableRow = styled.tr`
	background: white !important;
`;

const StyledTableSection = styled.td`
	font-weight: bold !important;
	color: ${colors.blueMunsell} !important;
`;

const Table = ({ answerKey, responses }) => {
	const sections = Object.keys(answerKey);

	const tableEntries = sections.map((sec) => (
		<>
			{!responses ? null : (
				<>
					<StyledTableRow>
						<StyledTableSection colSpan="3">{sec}</StyledTableSection>
					</StyledTableRow>
					{answerKey[sec].map((_, index) => (
						<tr>
							<td>{index + 1}</td>
							<td>{answerKey[sec][index].sort().join(" ")}</td>
							<td>
								{responses[sec] ? responses[sec][index].sort().join(" ") : "-"}
							</td>
						</tr>
					))}
				</>
			)}
		</>
	));

	return (
		<>
			{!responses ? null : (
				<StyleContainer>
					<StyledTable>
						<thead>
							<tr>
								<th>Question No.</th>
								<th>Correct Answer</th>
								<th>My Answer</th>
							</tr>
						</thead>
						<tbody>{tableEntries}</tbody>
					</StyledTable>
				</StyleContainer>
			)}
		</>
	);
};

export default Table;
