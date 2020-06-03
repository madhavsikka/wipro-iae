import React, { useState } from "react";
import styled from "styled-components";
import media from "../styles/media";
import Navbar from "../components/Navbar";
import Button from "../styles/Button";
import { ReactComponent as User } from "../images/User.svg";
import LoginDesign from "../images/LoginDesign.svg";
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
	flex-direction: column;
	flex-grow: 1;
	justify-content: center;
	align-items: center;
	width: 100%;
	background: url(${LoginDesign}) no-repeat center center fixed;
	background-size: cover;
`;

const StyledContainer = styled.div`
	flex-grow: 0;
	background-color: white;
	display: flex;
	flex-direction: column;
	box-shadow: 0 0 10px lightgray;
	padding: 0rem 2rem 2rem;
	align-items: center;
	${media.thone`box-shadow: none; background-color: transparent; padding: 0;`}
`;

const StyledText = styled.p`
	font-family: ${fonts.Montserrat};
	font-size: ${fontSizes.xxl};
	width: 100%;
	padding-bottom: 12px;
	margin-bottom: 0.4rem;
	border-bottom: 1px solid lightgray;
`;

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const StyledImage = styled.div`
	display: flex;
	justify-content: center;
	margin-bottom: 1rem;

	svg {
		width: 80%;
		margin: 0;
		/* ${media.thone`width: 60%;`} */
	}
`;

const StyledInputContainer = styled.div`
	display: flex;
	align-items: center;
	padding: 1rem;
	width: 100%;
	/* ${media.thone`padding: 1rem 0;`} */
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
					<StyledContainer>
						<StyledText>LOGIN</StyledText>
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
							onClick={(event) => handleSubmit(event)}
							style={{ marginTop: "2rem" }}>
							LOGIN
						</Button>
					</StyledContainer>
				</CSSTransition>
			</StyledInFlex>
		</StyledFlex>
	);
};

export default Login;
