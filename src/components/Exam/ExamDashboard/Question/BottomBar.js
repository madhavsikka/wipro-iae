import React from "react";
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

const StyledButton = styled(Button)`
	pointer-events: ${(props) => (props.disable ? "none" : "default")};
`;

const BottomBar = ({
	setIsCleared,
	questionState,
	selectedOptions,
	selectedQuestionIndex,
	setSelectedQuestionIndex,
	numOfQuestionsInSec,
	selectedSectionName,
	selectedSectionIndex,
	setSelectedSectionIndex,
	numOfSections,
}) => {
	const setQuestionStateHandler = (value) => {
		questionState[selectedSectionName][selectedQuestionIndex] = value;
		console.log(JSON.stringify(questionState));
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
		if (selectedQuestionIndex + 1 < numOfQuestionsInSec[selectedSectionIndex]) {
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
		questionState[selectedSectionName][selectedQuestionIndex] ===
		config.questionState.review
			? setQuestionStateHandler(config.questionState.visited_unattempted)
			: setQuestionStateHandler(config.questionState.review);
	};

	return (
		<StyledBar>
			{console.log(questionState)}
			<StyledGroup>
				<Button
					textColor={colors.blueMunsell}
					fontSize={fontSizes.sm}
					borderColor={colors.blueMunsell}
					hoverColor={colors.blueMunsell}
					hoverText={colors.white}
					weight="600"
					onClick={() => onClickReviewHandler()}>
					{questionState[selectedSectionName][selectedQuestionIndex] ===
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
				disable={selectedOptions.current.length === 0}
				onClick={() => onClickNextHandler()}>
				SAVE AND NEXT
			</Button>
		</StyledBar>
	);
};

export default BottomBar;
