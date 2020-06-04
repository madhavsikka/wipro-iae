import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
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
		background: white;
		border-radius: 8px;
		box-shadow: 0 0 10px lightgray;
		padding: 0 0 2rem;
		${media.thone`box-shadow: none;`}
	}
	${media.thone`padding: 0;`}
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

const Login = (props) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleUsernameChange = (event) => {
		setUsername(event.target.value);
	};

	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};

	const handleSubmit = (event) => {
		alert(`Username: ${username} and Password: ${password}`);
		event.preventDefault();
	};

	return (
		<StyledFlex>
			<Navbar />
			<StyledInFlex>
				<CSSTransition in timeout={1000} classNames="fade" appear>
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

				<CSSTransition in timeout={1000} classNames="fade" appear>
					<StyledContainer>
						<div>
							<StyledText>
								LOGIN
							</StyledText>
							<StyledImage>
								<User />
							</StyledImage>

							<StyledForm autoComplete="off">
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
										type="email"
										name="email"
										placeholder="Email"
										value={username}
										onChange={(event) => handleUsernameChange(event)}
									/>
								</StyledInputContainer>

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
										value={password}
										onChange={(event) => handlePasswordChange(event)}
									/>
								</StyledInputContainer>
							</StyledForm>

							<Button
								color={colors.buttonGreen}
								hoverColor={colors.buttonGreenDark}
								onClick={(event) => handleSubmit(event)}
								style={{ marginTop: "2rem", width: "10rem" }}>
								LOGIN
							</Button>
						</div>
					</StyledContainer>
				</CSSTransition>
			</StyledInFlex>
		</StyledFlex>
	);
};

export default Login;
