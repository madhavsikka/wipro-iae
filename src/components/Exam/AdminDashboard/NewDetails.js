import React, { useState } from "react";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";
import Button from "../../../styles/Button";
import InputBox from "../../../styles/Input";
import mixins from "../../../styles/mixins";
import theme from "../../../styles/theme";
const { colors, fontSizes } = theme;

const StyledFormFlex = styled.div`
	${mixins.styledFormFlex};
	:before {
		content: "Add Section";
	}
`;

const StyledForm = styled.div`
	${mixins.styledForm};
	align-items: center;
`;

const StyledBar = styled.div`
	${mixins.flexBar};
	justify-content: flex-start;
	flex-wrap: no-wrap;
	height: 50px;
	transition: all 100ms;
`;

const StyledSectionBar = styled.div`
	${mixins.flexBar};
	flex-grow: 1;
	max-height: 8rem;
	max-width: 27rem;
	overflow-y: auto;
	height: 50px;
	transition: all 100ms;
	flex-wrap: wrap;
`;

const StyledButton = styled(Button)`
	padding: 0.25rem;
	margin: 0 20px 10px 0;
	background: ${(props) => (props.active ? colors.blueMunsell : "transparent")};
`;

const ButtonBox = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
`;

const StyledPlus = styled.div`
	border: 2.5px solid ${colors.blueMunsell};
	border-radius: 50%;
	width: 28px;
	height: 28px;
	margin-left: 10px;
	padding: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: ${fontSizes.xxl};
	font-weight: bolder;
	color: ${colors.blueMunsell};
	transition: all 100ms;
	cursor: pointer;
	user-select: none;
	:hover {
		background: ${colors.blueMunsell};
		color: white;
	}
`;

const StyledUpDown = styled.div`
	display: flex;
	width: 28px;
	height: 28px;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-left: 10px;
	font-size: ${fontSizes.md};
	font-weight: bolder;
	color: ${colors.blueMunsell};
	user-select: none;
	padding: 0;
	div {
		cursor: pointer;
	}
`;

const NewDetails = ({
	setStep,
	sections,
	setSections,
	setQuestionAnswers,
	marking,
	setMarking,
}) => {
	const [inputState, setInputState] = useState("");
	const [positive, setPositive] = useState(0.25);
	const [negative, setNegative] = useState(-0.25);

	const onSectionClickHandler = (event) => {
		const value = event.target.innerText;
		setSections((prevState) => {
			return prevState.filter((section) => section !== value);
		});
	};

	const onAddHandler = (event) => {
		if ((!event || (event && event.key === "Enter")) && inputState !== "") {
			if (!sections.includes(inputState)) {
				setSections((prevState) => [...prevState, inputState]);
				setMarking((prevState) => {
					let newState = JSON.parse(JSON.stringify(prevState));
					newState[inputState] = { positive: positive, negative: negative };
					return newState;
				});
				setInputState("");
				setPositive(0.25);
				setNegative(-0.25);
			}
		}
	};

	const onClickNextHandler = () => {
		let newObject = {};
		sections.forEach((sec) => {
			newObject[sec] = {
				numOfQuestions: 0,
				questions: [],
				marking: {
					positive: marking[sec]["positive"],
					negative: marking[sec]["negative"],
				},
			};
		});
		console.log(JSON.stringify(newObject));
		setQuestionAnswers(newObject);
		setStep((prevState) => prevState + 1);
	};

	return (
		<CSSTransition in timeout={300} classNames="page" appear>
			<StyledFormFlex>
				<StyledForm>
					<StyledBar>
						<InputBox
							tag="New"
							place="Name of the Section"
							background={colors.blueMunsell}
							textColor="white"
							setMinWidth="25rem"
							inputState={inputState}
							setInputState={setInputState}
							onEnter={onAddHandler}
						/>
						<StyledPlus onClick={() => onAddHandler()}>+</StyledPlus>
					</StyledBar>
					<StyledBar>
						<InputBox
							tag="Positive"
							place="Positive Marks"
							background={colors.blueMunsell}
							textColor="white"
							setMinWidth="25rem"
							type="positive"
							arrowState={positive}
							setArrowState={setPositive}
						/>
						<StyledUpDown>
							<div onClick={() => setPositive((prevState) => prevState + 0.25)}>
								&#9650;
							</div>
							<div
								onClick={() =>
									setPositive((prevState) =>
										prevState > 0.25 ? prevState - 0.25 : prevState
									)
								}>
								&#9660;
							</div>
						</StyledUpDown>
					</StyledBar>
					<StyledBar>
						<InputBox
							tag="Negative"
							place="Negative Marks"
							background={colors.blueMunsell}
							textColor="white"
							setMinWidth="25rem"
							type="negative"
							arrowState={negative}
							setArrowState={setNegative}
						/>
						<StyledUpDown>
							<div
								onClick={() =>
									setNegative((prevState) =>
										prevState < -0.25 ? prevState + 0.25 : prevState
									)
								}>
								&#9650;
							</div>
							<div onClick={() => setNegative((prevState) => prevState - 0.25)}>
								&#9660;
							</div>
						</StyledUpDown>
					</StyledBar>
					<StyledSectionBar>
						{sections.map((section, i) => (
							<StyledButton
								key={i}
								textColor={colors.blueMunsell}
								fontSize={fontSizes.sm}
								borderColor={colors.blueMunsell}
								hoverColor={colors.blueMunsell}
								hoverText={colors.white}
								weight="600"
								onClick={(event) => onSectionClickHandler(event)}>
								{section}
							</StyledButton>
						))}
					</StyledSectionBar>
					<ButtonBox>
						<Button
							color={colors.buttonGreen}
							textColor={colors.white}
							fontSize={fontSizes.md}
							borderColor={colors.buttonGreen}
							hoverColor={colors.buttonGreenDark}
							hoverText={colors.white}
							weight="600"
							setWidth="9rem"
							onClick={() => {
								setStep((prevState) => prevState - 1);
							}}>
							BACK
						</Button>
						<Button
							color={colors.buttonGreen}
							textColor={colors.white}
							fontSize={fontSizes.md}
							borderColor={colors.buttonGreen}
							hoverColor={colors.buttonGreenDark}
							hoverText={colors.white}
							weight="600"
							setWidth="9rem"
							disable={sections.length === 0}
							onClick={() => onClickNextHandler()}>
							NEXT
						</Button>
					</ButtonBox>
				</StyledForm>
			</StyledFormFlex>
		</CSSTransition>
	);
};

export default NewDetails;
