/* eslint-disable */
import React,{useState} from "react";
import styled from "styled-components";
import { Link, Redirect} from "react-router-dom";
import media from "../styles/media";
import Navbar from "../components/Navbar";
import Button from "../styles/Button";
import { ReactComponent as User } from "../images/User.svg";
import { CSSTransition } from "react-transition-group";
import theme from "../styles/theme";
import mixins from "../styles/mixins";
import { IconContext } from "react-icons";
import { MdMail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { Component } from 'react';
import axios from 'axios';
import config from "../config";
import {useAuth} from "../context/auth"
//import validate from './ValidateLogin';
//import { Formik } from "formik";
//import * as EmailValidator from "email-validator";
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
	color: red;
	font-size: 15px;

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

const StyledInputContainer = styled.div`
	display: flex;
	align-items: center;
	padding: 1rem;
	width: 100%;
`;

const StyledInput = styled.input`
	font-family: ${fonts.Montserrat};
	font-size: ${fontSizes.xl};
	display: block;
	outline: none;
	border: 1px solid lightgray;
	border-radius: 5px;
	padding: 6px 7px;
	text-indent: 20px;
	margin-right: 10px;
`;

const UserIDRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

class Login extends Component {


	constructor(props) {
		super(props);
		
		this.state = {
		  formValid: false,
		  errorCount: null,
		  isLoggedIn: false,
		  isError: false,
		  userName: "",
		  password: "",

		  errors: {
			username: '',
			password: '',
		  }
		};
	}
//-----------------!!!---------------


/*

{ setAuthTokens } =useAuth();

 referer = props.location.state.referer || '/';
 
 postLogin() =(event)=>{
    axios.post("https://www.somePlace.com/auth/login", {
      userName,
      password
    }).then(result => {
      if (result.status === 200) {
        setAuthTokens(result.data);
        setLoggedIn(true);
      } else {
        setIsError(true);
      }
    }).catch(e => {
      setIsError(true);
    });
  }

  if (isLoggedIn) {
    return <Redirect to={referer} />;
  }
*/
//---------------------!!!-----------

	handleChange = (event) => {
		event.preventDefault();
		const { name, value } = event.target;
		let errors = this.state.errors;

		switch (name) {
		  case 'username': 
			errors.username = 
			  UserIDRegex.test(value) 
				? ''
				: value.length<1?'UserID cannot be empty':'Invalid UserID';
			break;
		  case 'password': 
			errors.password = 
			  value.length < 1
				? 'Password field cannot be empty'
				: value.length < 6?'Short Password':'';
			break;
			
		}

		this.setState({errors, [name]: value});
	}

	handleSubmit = (event) => {
		event.preventDefault();
		const {username,password}=this.state
		
	};

	render() {

		const {errors} = this.state;
		return (
		<StyledFlex>
			<Navbar />
			<StyledInFlex>
				<CSSTransition in timeout={600} classNames="fade" appear>
					<StyledBanner>
						<p>Log in to your account.</p>
						<p>Wipro</p>
						<p>
							<div>Independent</div>
							<div>Assessment</div>
							<div>Engine</div>
						</p>
						<p>
							Don't have an account?
							<Button
								color="transparent"
								hoverColor="white"
								hoverText={colors.blue}
								style={{
									border: "1px solid white",
									marginLeft: "1rem",
									padding: "0.25rem 0.75rem",
								}}>
								<Link to="/register">Register</Link>
							</Button>
						</p>
					</StyledBanner>
				</CSSTransition>

				<CSSTransition in timeout={600} classNames="fade" appear>
					<StyledContainer>
						<div>
							<StyledText>LOGIN</StyledText>
							<StyledImage>
								<User />
							</StyledImage>

							<StyledForm autoComplete="off" onSubmit={this.handleSubmit} noValidate>
								<StyledInputContainer>
									<IconContext.Provider
										value={{
											size: "18px",
											style: {
												position: "relative",
												left: "22px",
												color: "#AAAAAA",
											},
										}}>
										<MdMail />
									</IconContext.Provider>
									<StyledInput
										type="username"
										name="username"
										placeholder="UserID"
										
										onChange={this.handleChange}
										noValidate
									/>
									


								</StyledInputContainer>
								{errors.username.length > 0 &&  <span className='error' >{errors.username}</span>}
								<StyledInputContainer>
									<IconContext.Provider
										value={{
											size: "18px",
											style: {
												position: "relative",
												left: "22px",
												color: "#AAAAAA",
											},
										}}>
										<FaLock />
									</IconContext.Provider>
									<StyledInput
										type="password"
										name="password"
										placeholder="Password"
										
										onChange={this.handleChange}
										noValidate
									/>


								</StyledInputContainer>
								{errors.password.length > 0 && <span className='error'>{errors.password}</span>}
								
							</StyledForm>

							<Button
								color={colors.buttonGreen}
								hoverColor={colors.buttonGreenDark}
								onClick={this.handleSubmit}
								style={{ marginTop: "2rem", width: "10rem" }}>
								LOGIN
							</Button>
						</div>
					</StyledContainer>
				</CSSTransition>
			</StyledInFlex>
		</StyledFlex>
	);
									}
								}
									

							;export default Login;
