import React from "react";
import styled from "styled-components";
import theme from "../../../styles/theme";
const { colors, fontSizes, fonts } = theme;

const StyleContainer = styled.div`
	grid-area: ${(props) => (props.area ? props.area : "")};
	display: flex;
	padding: 0;
	margin: 0;
`;

const StyledTable = styled.table`
	table-layout: fixed;
	border-collapse: collapse;
	width: 100%;
  height: 100%;

  thead {
    background: ${colors.blueMunsell};
    color: white;
  }

  tr td:first-child, th:first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  tr td:last-child, th:last-child {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }

	th,
	td {
    padding: 12px;
  }
  
  tbody td {
    text-align: center;
  }
`;

const Table = (props) => {
	return (
		<StyleContainer>
			<StyledTable>
				<thead>
					<tr>
						<th>Question No.</th>
						<th>Correct Answer</th>
						<th>My Answer</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>B</td>
						<td>C</td>
					</tr>
				</tbody>
			</StyledTable>
		</StyleContainer>
	);
};

export default Table;
