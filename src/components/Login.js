import React, { useState } from "react";
import styled from "styled-components";
import { Link, Redirect } from "react-router-dom";
import media from "../styles/media";
import Navbar from "../components/Navbar";
import Button from "../styles/Button";
import MiniLoader from "./MiniLoader";
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
		border-radius: 8px;
		box-shadow: 0 0 10px lightgray;
		padding: 0 0 2rem;
		min-width: 350px;
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

const Login = ({ user, setUser, auth, setDisplayName, setUid }) => {
	const [username, setUsername] = useState(null);
	const [password, setPassword] = useState(null);
	const [isLoggingIn, setIsLoggingIn] = useState(false);

	const onChangeUsername = (event) => {
		setUsername(event.target.value);
	};

	const onChangePassword = (event) => {
		setPassword(event.target.value);
	};

	const handleSubmit = () => {
		setIsLoggingIn(true);
		auth()
			.signInWithEmailAndPassword(username, password)
			.then((res) => {
				setUser(res.user);
				localStorage.setItem("Wipro_UID", auth().currentUser.uid);
				localStorage.setItem("Wipro_Name", auth().currentUser.displayName);
				setDisplayName(auth().currentUser.displayName);
				setUid(auth().currentUser.uid);
				console.log("logged in");
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<>
			{user ? (
				<Redirect to="/exams" />
			) : (
				<StyledFlex>
					<Navbar user={user} auth={auth} />
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
								{isLoggingIn ? (
									<MiniLoader />
								) : (
									<div>
										<StyledText>LOGIN</StyledText>
										<StyledImage>
											<User />
										</StyledImage>

										<StyledForm autoComplete="off" noValidate>
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
													autoComplete="off"
													type="email"
													name="email"
													placeholder="Email ID"
													value={username}
													onChange={(event) => onChangeUsername(event)}
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
													onChange={(event) => onChangePassword(event)}
													noValidate
												/>
											</StyledInputContainer>
										</StyledForm>

										<Button
											color={colors.buttonGreen}
											hoverColor={colors.buttonGreenDark}
											onClick={() => handleSubmit()}
											style={{ marginTop: "2rem", width: "10rem" }}>
											LOGIN
										</Button>
									</div>
								)}
							</StyledContainer>
						</CSSTransition>
					</StyledInFlex>
				</StyledFlex>
			)}
		</>
	);
};

export default Login;
