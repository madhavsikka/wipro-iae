import React from "react";
import styled, { css } from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import theme from "./theme";
const { colors, fontSizes } = theme;

const StyledBox = styled.div`
	display: flex;
	height: 40px;
	min-width: ${(props) => (props.setMinWidth ? props.setMinWidth : "0")};
	justify-content: stretch;
	align-items: stretch;
	margin-bottom: ${(props) => (props.setMargin ? props.setMargin : "0")};
	user-select: none;
	box-shadow: 0 0 7px 4px rgba(0, 0, 0, 0.05);
`;

const StyledTag = styled.div`
	display: flex;
	flex-grow: 1;
	width: 25%;
	padding: 1rem;
	align-items: center;
	justify-content: center;
	border-top-left-radius: 5px;
	border-bottom-left-radius: 5px;
	background: ${(props) =>
		props.background ? props.background : "transparent"};
	color: ${(props) => (props.textColor ? props.textColor : "transparent")};
	font-weight: 500;
	font-size: ${fontSizes.md};
`;

const StyledInputCSS = css`
	text-indent: 15px;
	width: 75%;
	border: 2px solid transparent;
	border-top-right-radius: 5px;
	border-bottom-right-radius: 5px;
	transition: all 100ms;
	font-size: ${fontSizes.md};
	font-family: inherit;
	font-weight: 500;
	:focus {
		border: ${(props) => (props.border ? `2px solid ${props.border}` : "")};
		outline: none;
	}
`;

const StyledInput = styled.input`
	${StyledInputCSS};
`;

const DateTimeWrapper = styled.div`
	display: flex;
	justify-content: stretch;
	align-items: stretch;
	padding: 0;
	margin: 0%;
	width: 75%;
	flex-grow: 1;
	.react-datepicker-wrapper {
		display: flex;
		flex-grow: 1;
		justify-content: stretch;
		align-items: stretch;
	}
	.react-datepicker__input-container {
		display: flex;
		flex-grow: 1;
		justify-content: stretch;
		align-items: stretch;
		input {
			${StyledInputCSS};
			width: 100%;
			letter-spacing: 0.5px;
			:focus {
				border: 2px solid ${colors.blueMunsell};
				outline: none;
			}
		}
	}

	.react-datepicker__day--keyboard-selected,
	.react-datepicker__day--selected,
	.react-datepicker__time-list-item--selected {
		background-color: ${colors.blueMunsell} !important;
	}
`;

const Input = (props) => {
	const onChangeHandler = (event) => {
		props.setInputState(event.target.value);
	};
	const onArrowPressHandler = (event) => {
		if (
			(+event.target.value > 0 && props.type === "positive") ||
			(+event.target.value < 0 && props.type === "negative")
		) {
			props.setArrowState(+event.target.value);
		}
	};
	return (
		<StyledBox setMargin={props.setMargin} setMinWidth={props.setMinWidth}>
			<StyledTag background={props.background} textColor={props.textColor}>
				{props.tag}
			</StyledTag>
			<StyledInput
				border={props.background}
				placeholder={props.place}
				onKeyDown={props.onEnter ? (event) => props.onEnter(event) : null}
				onChange={
					props.setInputState
						? (event) => onChangeHandler(event)
						: props.setArrowState
						? (event) => onArrowPressHandler(event)
						: null
				}
				value={
					props.inputState || props.inputState === ""
						? props.inputState
						: props.arrowState
						? props.arrowState
						: null
				}
			/>
		</StyledBox>
	);
};

export const StyledDateTime = (props) => {
	return (
		<StyledBox setMargin={props.setMargin} setMinWidth={props.setMinWidth}>
			<StyledTag background={props.background} textColor={props.textColor}>
				{props.tag}
			</StyledTag>
			<DateTimeWrapper>
				<DatePicker
					dateFormat="dd MMMM yyyy"
					border={props.background}
					placeholderText={props.place}
					showPopperArrow={false}
					selected={props.selected}
					onChange={props.onChange}
				/>
			</DateTimeWrapper>
		</StyledBox>
	);
};

export const StyledTime = (props) => {
	return (
		<StyledBox setMargin={props.setMargin} setMinWidth={props.setMinWidth}>
			<StyledTag background={props.background} textColor={props.textColor}>
				{props.tag}
			</StyledTag>
			<DateTimeWrapper>
				<DatePicker
					showPopperArrow={false}
					border={props.background}
					placeholderText={props.place}
					showTimeSelect
					showTimeSelectOnly
					timeIntervals={15}
					timeCaption="Time"
					dateFormat="h:mm aa"
					selected={props.selected}
					onChange={props.onChange}
				/>
			</DateTimeWrapper>
		</StyledBox>
	);
};

export default Input;
