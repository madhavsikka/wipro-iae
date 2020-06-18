import React, { useState } from "react";
import styled from "styled-components";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { IconContext } from "react-icons";
import { MdDone, MdAddCircleOutline, MdClear } from "react-icons/md";
import Button from "../../../styles/Button";
import mixins from "../../../styles/mixins";
import theme from "../../../styles/theme";
const { colors, fontSizes } = theme;

const StyledForm = styled.div`
	${mixins.styledForm};
	align-items: stretch;
`;

const StyledHeading = styled.div`
	color: ${colors.blueMunsell};
	font-weight: 500;
	font-size: ${fontSizes.xxl};
	margin: 0 0 10px 0;
`;

const StyledSectionBar = styled.div`
	${mixins.flexBar};
	justify-content: space-between;
	align-items: center;
  width: 100%;
  padding: 0;
  margin: 12px 0;
	max-height: 8rem;
	max-width: 480px;
	overflow-y: auto;
	height: 110px;
	transition: all 100ms;
	flex-wrap: wrap;
`;

const StyledButton = styled(Button)`
	padding: 0.25rem;
	margin-bottom: 10px;
	background: ${(props) => (props.active ? colors.blueMunsell : "transparent")};
	color: ${(props) => (props.active ? "white" : colors.blueMunsell)};
`;

const StyledAddButton = styled(Button)`
	margin: 0;
	min-width: auto;
	padding: 0.18rem 1rem;
	background: ${(props) => (props.active ? colors.blueMunsell : "transparent")};
	color: ${(props) => (props.disable ? "lightgray" : "white")};
	svg {
		color: ${(props) => (props.disable ? "lightgray !important" : "white")};
	}
`;

const StyledAddOptionButton = styled(StyledAddButton)`
	background: white;
	color: ${colors.blueMunsell};
	border: 2px solid white;
	margin-top: 1rem;
	margin-bottom: 1rem;
	padding: 0.25rem 1rem;
	box-shadow: 0 0 5px 4px rgba(0, 0, 0, 0.05);
	:hover {
		border: 2px solid ${colors.blueMunsell};
	}
`;

const StyledInputContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 0 1rem 0;
	padding: 0;
	box-shadow: 0 0 5px 4px rgba(0, 0, 0, 0.05);
	> div {
		padding: 0 8px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 40px;
		border-top-right-radius: 5px;
		border-top-left-radius: 5px;
		background: ${colors.blueMunsell};
		color: white;
		font-size: ${fontSizes.xl};
		font-weight: 500;
		span {
			display: flex;
			align-items: center;
			justify-content: flex-start;
		}
	}
	textarea {
		padding: 5px;
		width: 480px;
		height: 120px;
		border: 2px solid transparent;
		border-bottom-right-radius: 5px;
		border-bottom-left-radius: 5px;
		transition: all 100ms;
		font-size: ${fontSizes.md};
		font-family: inherit;
		font-weight: 500;
		overflow-y: auto;
		:focus {
			border: 2px solid ${colors.blueMunsell};
			outline: none;
		}
	}
`;

const DropdownWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-left: 8px;
	.Dropdown-control {
		border-radius: 3px;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 30px;
		background: ${colors.blueMunsellTransparent};
		outline: none;
		border: none;
		transition: all 100ms;
	}
	.Dropdown-placeholder {
		outline: none;
		border: none;
		background: ${colors.blueMunsellTransparent};
		color: white;
	}
	.Dropdown-option {
		transition: all 100ms;
		:hover {
			background: ${colors.cultured};
		}
	}
	.Dropdown-option.is-selected {
		background: ${colors.cultured};
	}
	.Dropdown-arrow {
		top: 12px;
		border-width: 5.5px 5.5px 0;
		border-color: #ffffff rgba(0, 0, 0, 0) rgba(0, 0, 0, 0);
	}
	.Dropdown-noresults {
		display: none;
	}
`;

const OptionBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: stretch;
	height: 270px;
	overflow-y: auto;
`;

const StyledBar = styled.div`
	${mixins.flexBar};
	justify-content: stretch;
	align-items: stretch;
	flex-wrap: no-wrap;
	height: 50px;
	padding: 0;
	margin: 0 0 1rem 0;
	transition: all 100ms;
	box-shadow: 0 0 5px 4px rgba(0, 0, 0, 0.05);
`;

const StyledTag = styled.div`
	display: flex;
	height: 50px;
	width: 2rem;
	padding: 1rem;
	align-items: center;
	justify-content: center;
	border-top-left-radius: 5px;
	border-bottom-left-radius: 5px;
	background: ${colors.blueMunsell};
	font-weight: 700;
	color: white;
	font-size: ${fontSizes.md};
`;

const StyledCross = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 50px;
	width: 40px;
	border-top-right-radius: 5px;
	border-bottom-right-radius: 5px;
	background: white;
	cursor: pointer;
	transition: all 100ms;
	svg {
		width: 20px;
    height: 20px;
    :hover {
      color: ${colors.blueMunsell} !important;
    }
	}
`;

const StyledInput = styled.input`
	width: 100%;
	text-indent: 8px;
	height: 50px;
	margin-bottom: 10px;
	border: 2px solid transparent;
	font-family: inherit;
	font-size: ${fontSizes.md};
	font-weight: 500;
	transition: all 100ms;
	:focus {
		border: 2px solid ${colors.blueMunsell};
		border-top-right-radius: 5px;
		border-bottom-right-radius: 5px;
		outline: none;
	}
`;

const ButtonBox = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
`;

const QuestionInput = ({
	setStep,
	sections,
	questionAnswers,
	setQuestionAnswers,
}) => {
	const [selectedSection, setSelectedSection] = useState(sections[0]);
	const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(0);
	const [questionBox, setQuestionBox] = useState("");
	const [optionBox, setOptionBox] = useState([]);
	let optionsListDropdown = [
		...Array(questionAnswers[selectedSection]["numOfQuestions"]).keys(),
	].map((x) => ++x);
	const getAlphabet = (index) => String.fromCharCode(65 + index);

	const onQuestionChangeHandler = (event) => {
		setQuestionBox(event.target.value);
	};

	const onOptionChangeHandler = (event, index) => {
		let value = event.target.value;
		setOptionBox((prevState) => {
			let newState = [...prevState];
			newState[index] = value;
			return newState;
		});
	};

	const onClickSectionHandler = (event) => {
		setSelectedSection(event.target.innerText);
		setSelectedQuestionIndex(0);
		const newQuestionIndex = +questionAnswers[event.target.innerText][
			"numOfQuestions"
		];
		setSelectedQuestionIndex(newQuestionIndex);
		setQuestionBox("");
		setOptionBox([]);
	};

	const onClickAddHandler = () => {
		if (questionBox !== "" && optionBox.length !== 0) {
			setQuestionAnswers((prevState) => {
				let newState = JSON.parse(JSON.stringify(prevState));
				if (
					typeof newState[selectedSection]["questions"][
						selectedQuestionIndex
					] == "undefined"
				) {
					newState[selectedSection]["numOfQuestions"]++;
				}
				newState[selectedSection]["questions"][selectedQuestionIndex] = {
					question: questionBox,
					options: optionBox,
				};
				return newState;
			});
			setQuestionBox("");
			setOptionBox([]);
			setSelectedQuestionIndex((prevState) => prevState + 1);
		}
	};

	const onClickAddOptionHandler = () => {
		setOptionBox((prevState) => [...prevState, ""]);
	};

	const onDropdownSelectHandler = (event) => {
		console.log(event.value); // or event.label
		setSelectedQuestionIndex(+event.value - 1);
		setQuestionBox(
			questionAnswers[selectedSection]["questions"][+event.value - 1][
				"question"
			]
		);
		setOptionBox(
			questionAnswers[selectedSection]["questions"][+event.value - 1]["options"]
		);
	};

	const onClickCrossHandler = (index) => {
		setOptionBox((prevState) => {
			let newState = [...prevState];
			newState.splice(index, 1);
			return newState;
		});
	};

	return (
		<StyledForm>
			<StyledHeading>Add Questions</StyledHeading>
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
						active={selectedSection === section}
						onClick={(event) => onClickSectionHandler(event)}>
						{section}
					</StyledButton>
				))}
			</StyledSectionBar>
			<StyledInputContainer>
				<div>
					<span>
						<div>Question</div>
						<DropdownWrapper>
							<Dropdown
								options={optionsListDropdown}
								placeholder="-"
								value={(selectedQuestionIndex + 1).toString()}
								onChange={(event) => onDropdownSelectHandler(event)}
							/>
						</DropdownWrapper>
					</span>
					<StyledAddButton
						textColor="white"
						fontSize={fontSizes.sm}
						borderColor="white"
						hoverColor="white"
						hoverText={colors.blueMunsell}
						weight="600"
						onClick={() => onClickAddHandler()}
						disable={questionBox === "" || optionBox.length === 0}>
						<IconContext.Provider
							value={{
								size: "19px",
								style: {
									color: "white",
									marginRight: "0.2rem",
									marginBottom: "2px",
									strokeWidth: "1.5px",
								},
							}}>
							<MdDone />
						</IconContext.Provider>
						Add
					</StyledAddButton>
				</div>
				<textarea
					placeholder="Enter Question Here"
					value={questionBox}
					onChange={(event) => onQuestionChangeHandler(event)}></textarea>
			</StyledInputContainer>
			<OptionBox>
				{optionBox.map((option, index) => {
					let alphabet = getAlphabet(index);
					return (
						<StyledBar key={index}>
							<StyledTag>{alphabet}</StyledTag>
							<StyledInput
								placeholder={`Option ${alphabet}`}
								value={optionBox[index]}
								onChange={(event) => onOptionChangeHandler(event, index)}
							/>
							<StyledCross onClick={() => onClickCrossHandler(index)}>
								<IconContext.Provider
									value={{
										size: "20px",
										style: {
											color: "lightgrey",
											marginRight: "0.2rem",
											marginBottom: "2px",
											strokeWidth: "1.5px",
										},
									}}>
									<MdClear />
								</IconContext.Provider>
							</StyledCross>
						</StyledBar>
					);
				})}
				<StyledAddOptionButton
					fontSize={fontSizes.md}
					weight="600"
					onClick={() => onClickAddOptionHandler()}>
					<IconContext.Provider
						value={{
							size: "22px",
							style: {
								color: colors.blueMunsell,
								marginRight: "0.3rem",
								marginBottom: "2px",
								strokeWidth: "1px",
							},
						}}>
						<MdAddCircleOutline />
					</IconContext.Provider>
					Add Option
				</StyledAddOptionButton>
			</OptionBox>
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
					onClick={() => {
						setStep((prevState) => prevState + 1);
					}}>
					FINISH
				</Button>
			</ButtonBox>
		</StyledForm>
	);
};

export default React.memo(QuestionInput);
