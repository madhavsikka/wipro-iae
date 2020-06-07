import React, { useState } from "react";
import { Component } from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import media from "../styles/media";
import Navbar from "../components/Navbar";
import Button from "../styles/Button";
import { ReactComponent as User } from "../images/User.svg";
import { CSSTransition } from "react-transition-group";
import theme from "../styles/theme";
import mixins from "../styles/mixins";
const { colors, fonts, fontSizes } = theme;

const StyledFlex = styled.div`
	${mixins.fullFlexCenter};
`;

const StyledInFlex = styled.div`
	display: flex;
	justify-items: stretch;
	align-items: stretch;
	width: 100%;
	flex-grow: 1;
`;

const StyledBanner = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	padding: 2rem;
	background: ${colors.blue};
	flex: 1 0 50%;
	font-family: ${fonts.Montserrat};
	font-size: ${fontSizes.h3};
	color: white;
	${media.desktop`display: none;`}
	p {
		margin: 0;
		:first-child {
			font-size: ${fontSizes.xxl};
			font-weight: lighter;
			margin-bottom: 4rem;
		}
		:nth-child(2) {
			font-size: ${fontSizes.h1};
			font-weight: bolder;
		}
		:nth-child(3) {
			font-size: ${fontSizes.h5};
			font-weight: lighter;
			display: flex;
			flex-direction: column;
			align-items: flex-start;
		}
		:nth-child(4) {
			font-size: ${fontSizes.xl};
			font-weight: lighter;
			margin-top: auto;
			a {
				text-decoration: none;
				color: white;
			}
		}
	}
`;

const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	flex: 1 1 50%;
	box-shadow: inset 0 0 12px lightgray;
	& > div {
		display: flex;
		flex-direction: column;
		align-items: center;
		border-radius: 8px;
		box-shadow: 0 0 10px lightgray;
		padding: 0 0 2rem;
		width: 55%;
		${media.desktop`width: auto;`}
		${media.thone`box-shadow: none;`}
	}
	${media.thone`padding: 0; margin-top: 8px; box-shadow: none;`}
`;

const StyledText = styled.div`
	font-size: ${fontSizes.xxl};
	font-weight: normal;
	align-self: stretch;
	background: ${colors.blue};
	color: white;
	padding: 0.5rem 0;
	margin-bottom: 1rem;
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
	box-shadow: 0 0 10px lightgray;
	${media.thone`display: none;`}
`;

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: stretch;
`;

const StyledImage = styled.div`
	display: flex;
	justify-content: center;
	margin-bottom: 1rem;
	svg {
		width: 80%;
		margin: 0;
	}
`;

const StyledInput = styled.input`
	font-family: ${fonts.Montserrat};
	font-size: ${fontSizes.lg};
	display: block;
	outline: none;
	border: 1px solid lightgray;
	border-radius: 5px;
	padding: 6px 7px;
	margin-bottom: 1rem;
`;
const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const validateForm = (errors) => {
	let valid = true;
	Object.values(errors).forEach(
	  (val) => val.length > 0 && (valid = false)
	);
	return valid;
  }
  
  const countErrors = (errors) => {
	let count = 0;
	Object.values(errors).forEach(
	  (val) => val.length > 0 && (count = count+1)
	);
	return count;
  }

class Register extends Component {

	constructor(props) {
		super(props);
		this.state = {
		  formValid: false,
		  errorCount: null,
		  errors: {
			fullName: '',
			email: '',
			password: '',
		  }
		};
	}
	
	handleChange = (event) => {
		event.preventDefault();
		const { name, value } = event.target;
		let errors = this.state.errors;
	
		switch (name) {
		  case 'fullName': 
			errors.fullName = 
			  value.length < 5
				? 'Full Name must be 5 characters long!'
				: '';
			break;
		  case 'email': 
			errors.email = 
			  validEmailRegex.test(value)
				? ''
				: 'Email is not valid!';
			break;
		  case 'password': 
			errors.password = 
			  value.length < 8
				? 'Password must be 8 characters long!'
				: '';
			break;
		  default:
			break;
		}
	
		this.setState({errors, [name]: value});
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.setState({formValid: validateForm(this.state.errors)});
		this.setState({errorCount: countErrors(this.state.errors)});
	}
	  
	render() {
		const {errors} = this.state;
		return (
			<StyledFlex>
				<Navbar />
				<StyledInFlex>
					<CSSTransition in timeout={600} classNames="fade" appear>
						<StyledBanner>
							<p>Sign up for a new account.</p>
							<p>Wipro</p>
							<p>
								<div>Independent</div>
								<div>Assessment</div>
								<div>Engine</div>
							</p>
							<p>
								Already have an account?
								<Button
									color="transparent"
									hoverColor="white"
									hoverText={colors.blue}
									style={{
										border: "1px solid white",
										marginLeft: "1rem",
										padding: "0.25rem 0.75rem",
									}}>
									<Link to="/login">Log in</Link>
								</Button>
							</p>
						</StyledBanner>
					</CSSTransition>

					<CSSTransition in timeout={600} classNames="fade" appear>
						<StyledContainer>
							<div>
								<StyledText>REGISTER</StyledText>
								<StyledImage>
									<User />
								</StyledImage>

								<StyledForm autoComplete="off" onSubmit={this.handleSubmit} noValidate>
									<StyledInput
										type="text"
										name="fullName"
										placeholder="Full Name"
										htmlFor="fullName"
										onChange={this.handleChange} 
										noValidate
									/>
									{errors.fullName.length > 0 && <span className='error'>{errors.fullName}</span>}

									<StyledInput
										type="email"
										name="email"
										placeholder="Email ID"
										htmlFor="email"
										onChange={this.handleChange} 
										noValidate
									/>
									{errors.email.length > 0 &&  <span className='error'>{errors.email}</span>}

									<StyledInput
										type="password"
										name="password"
										placeholder="Create Password"
										htmlFor="password"
										onChange={this.handleChange} 
										noValidate
									/>
									{errors.password.length > 0 && <span className='error'>{errors.password}</span>}

								</StyledForm>

								<Button
									color={colors.buttonGreen}
									hoverColor={colors.buttonGreenDark}
									style={{ marginTop: "2rem", width: "10rem" }}>
									REGISTER
								</Button>
							</div>
						</StyledContainer>
					</CSSTransition>
				</StyledInFlex>
			</StyledFlex>
		);
	}
}

export default Register;