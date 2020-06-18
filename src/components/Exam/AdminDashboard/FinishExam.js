import React from "react";
import styled from "styled-components";
// import { BsFileEarmarkCheck } from "react-icons/bs";
// import { IconContext } from "react-icons";
import mixins from "../../../styles/mixins";
// import theme from "../../../styles/theme";
// const { colors, fontSizes } = theme;

const StyledForm = styled.div`
	${mixins.styledForm};
	align-items: stretch;
`;
const FinishExam = ({ questionAnswers }) => {
	return (
		<StyledForm>
		</StyledForm>
	);
};

export default FinishExam;
