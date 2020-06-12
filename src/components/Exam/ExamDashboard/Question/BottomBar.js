import React, { useEffect } from "react";
import styled from "styled-components";
import Button from "../../../../styles/Button";
import theme from "../../../../styles/theme";
import axios from "axios";
import config from "../../../../config";
import mixins from "../../../../styles/mixins";
const { colors, fontSizes } = theme;

const StyledBar = styled.div`
	${mixins.flexBar};
	grid-area: ${(props) => props.area};
	padding: 0;
`;

const StyledGroup = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 0;
	padding: 0;
`;

const BottomBar = ({
	setIsCleared,
	questionState,
	setQuestionState,
	selectedOptions,
	selectedQuestionIndex,
	setSelectedQuestionIndex,
	numOfQuestionsInSec,
	selectedSection,
	selectedSectionIndex,
	setSelectedSectionIndex,
	numOfSections,
}) => {
	const setQuestionStateHandler = (value) => {
		setQuestionState((prevState) => {
			let newState = JSON.parse(JSON.stringify(prevState));
			newState[selectedSection][selectedQuestionIndex] = value;
			console.log(JSON.stringify(newState));
			return newState;
		});
	};

	const onClickNextHandler = () => {
		setQuestionStateHandler(config.questionState.submit);

		let postData = [...selectedOptions.current];
		axios
			.post(`${config.jsonDb.responses}`, { postData })
			.then((res) => {
				console.log(res);
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
		if (selectedQuestionIndex + 1 < +numOfQuestionsInSec) {
			setSelectedQuestionIndex((prevState) => prevState + 1);
		} else if (selectedSectionIndex + 1 < +numOfSections) {
			setSelectedSectionIndex((prevState) => prevState + 1);
			setSelectedQuestionIndex(0);
		} else {
			console.log("All questions attempted");
		}
	};

	const onClickClearHandler = () => {
		setQuestionStateHandler(config.questionState.unvisited);
		setIsCleared(true);
		selectedOptions.current = [];
	};

	const onClickReviewHandler = () => {
		questionState[selectedSection][selectedQuestionIndex] ===
		config.questionState.review
			? setQuestionStateHandler(config.questionState.visited_unattempted)
			: setQuestionStateHandler(config.questionState.review);
	};

	return (
		<StyledBar>
			<StyledGroup>
				<Button
					textColor={colors.blueMunsell}
					fontSize={fontSizes.sm}
					borderColor={colors.blueMunsell}
					hoverColor={colors.blueMunsell}
					hoverText={colors.white}
					weight="600"
					onClick={() => onClickReviewHandler()}>
					{questionState[selectedSection][selectedQuestionIndex] ===
					config.questionState.review
						? "UNMARK"
						: "MARK FOR REVIEW"}
				</Button>
				<Button
					textColor={colors.blueMunsell}
					fontSize={fontSizes.sm}
					borderColor={colors.blueMunsell}
					hoverColor={colors.blueMunsell}
					hoverText={colors.white}
					weight="600"
					style={{ marginLeft: "20px" }}
					onClick={() => onClickClearHandler()}>
					CLEAR RESPONSE
				</Button>
			</StyledGroup>
			{console.log(selectedOptions.current)}
			<Button
				textColor={colors.white}
				color={colors.blueSapphire}
				fontSize={fontSizes.sm}
				borderColor={colors.blueSapphire}
				hoverColor={colors.indigo}
				hoverText={colors.white}
				weight="600"
				disabled={selectedOptions.current.length === 0 ? "disabled" : ""}
				onClick={() => onClickNextHandler()}>
				SAVE AND NEXT
			</Button>
		</StyledBar>
	);
};

export default BottomBar;
