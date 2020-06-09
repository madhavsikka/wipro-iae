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
	setIsCleared,
	selectedOptions,
	selectedQuestionIndex,
	setSelectedQuestionIndex,
	numOfQuestionsInSec,
	selectedSectionIndex,
	setSelectedSectionIndex,
	numOfSections,
}) => {
	const onClickNextHandler = () => {
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
		console.log("BB");
	};

	const onClickClearHandler = () => {
		setIsCleared(true);
		selectedOptions.current = [];
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
					weight="600">
					MARK FOR REVIEW
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
			<Button
				textColor={colors.white}
				color={colors.blueSapphire}
				fontSize={fontSizes.sm}
				borderColor={colors.blueSapphire}
				hoverColor={colors.indigo}
				hoverText={colors.white}
				weight="600"
				onClick={() => onClickNextHandler()}>
				SAVE AND NEXT
			</Button>
		</StyledBar>
	);
};

export default BottomBar;
