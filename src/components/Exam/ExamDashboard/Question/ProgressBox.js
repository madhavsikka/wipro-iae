import React from "react";
import styled from "styled-components";

const StyledBox = styled.div`
	display: grid;
	background: #eff7f6;
	height: 100%;
`;

const ProgressBox = (props) => {
	return (
		<StyledBox>
			ProgressBox
		</StyledBox>
	);
};

export default React.memo(ProgressBox);
