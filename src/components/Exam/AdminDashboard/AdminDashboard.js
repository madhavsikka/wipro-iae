import React from "react";
import styled from "styled-components";
import { Link, useRouteMatch } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import mixins from "../../../styles/mixins";
import theme from "../../../styles/theme";
import Examnav from "../Examnav";
import NewButton from "./NewButton";
const { colors } = theme;

const StyledContainer = styled.div`
	${mixins.fullFlexCenter};
	align-items: stretch;
`;

const StyledFlex = styled.div`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	justify-content: center;
	align-items: center;
	margin: 1rem;
	background: ${colors.cultured};
	border-radius: 5px;
`;

const AdminDashboard = () => {
	const { url } = useRouteMatch();
	return (
		<CSSTransition in timeout={600} classNames="fade" appear>
			<StyledContainer>
				<Examnav name="Admin Dashboard" />
				<StyledFlex>
					<Link to={`${url}/new-exam`} style={{ textDecoration: "none" }}>
						<NewButton>Create New Exam</NewButton>
					</Link>
				</StyledFlex>
			</StyledContainer>
		</CSSTransition>
	);
};

export default AdminDashboard;
