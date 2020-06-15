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

const BottomBar = ({
	questionState,
	selectedOptions,
	setSelectedOptions,
	selectedQuestionIndex,
	setSelectedQuestionIndex,
	numOfQuestionsInSec,
	selectedSectionName,
	selectedSectionIndex,
	setSelectedSectionIndex,
	numOfSections,
	isReviewed,
	setIsReviewed,
}) => {
	const setQuestionStateHandler = (value) => {
		questionState[selectedSectionName][selectedQuestionIndex] = value;
		console.log(JSON.stringify(questionState));
	};

	const onClickNextHandler = (type) => {
		if (!isReviewed) {
			setQuestionStateHandler(config.questionState.visited_unattempted);
		}
		if (type === "submit") {
			setQuestionStateHandler(config.questionState.submit);
			let postData = [...selectedOptions];
			// axios
			// 	.post(`${config.jsonDb.responses}`, { postData })
			// 	.then((res) => {
			// 		console.log(res);
			// 		console.log(res.data);
			// 	})
			// 	.catch((err) => {
			// 		console.log(err);
			// 	});
			axios
				.post(
					`${config.firebase.databaseURL}/e1/responses/${selectedSectionName}/${selectedQuestionIndex}.json`,
					{ postData }
				)
				.then((res) => {
					console.log(res);
					console.log(res.data);
				})
				.catch((err) => {
					console.log(err);
				});
		}
		if (selectedQuestionIndex + 1 < numOfQuestionsInSec[selectedSectionIndex]) {
			setSelectedQuestionIndex((prevState) => prevState + 1);
		} else if (selectedSectionIndex + 1 < +numOfSections) {
			setSelectedSectionIndex((prevState) => prevState + 1);
			setSelectedQuestionIndex(0);
		} else {
			console.log("All questions attempted");
		}
		setIsReviewed(false);
		setSelectedOptions([]);
	};

	const onClickClearHandler = () => {
		setQuestionStateHandler(config.questionState.unvisited);
		setSelectedOptions([]);
	};

	const onClickReviewHandler = () => {
		questionState[selectedSectionName][selectedQuestionIndex] ===
		config.questionState.review
			? setQuestionStateHandler(config.questionState.visited_unattempted)
			: setQuestionStateHandler(config.questionState.review);
		setIsReviewed((prevState) => !prevState);
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
			{console.log(`Selected: ${selectedOptions}`)}
			<StyledGroup>
				<Button
					color={colors.darkRoyalBlue}
					textColor={colors.white}
					fontSize={fontSizes.sm}
					borderColor={colors.darkRoyalBlue}
					hoverColor={colors.royalBlue}
					hoverText={colors.white}
					weight="600"
					onClick={() => onClickNextHandler("next")}>
					NEXT
				</Button>
				<Button
					color={colors.darkRoyalBlue}
					textColor={colors.white}
					fontSize={fontSizes.sm}
					borderColor={colors.darkRoyalBlue}
					hoverColor={colors.royalBlue}
					hoverText={colors.white}
					weight="600"
					style={{ marginLeft: "20px" }}
					disable={selectedOptions.length === 0}
					onClick={() => onClickNextHandler("submit")}>
					SUBMIT AND NEXT
				</Button>
			</StyledGroup>
		</StyledBar>
	);
};

export default React.memo(BottomBar);
