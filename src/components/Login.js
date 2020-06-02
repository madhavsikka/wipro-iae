import React, { useState } from "react";
import styled from "styled-components";
import media from "../styles/media";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../styles/Button";
import { ReactComponent as User } from "../images/User.svg";
import { CSSTransition } from "react-transition-group";
import theme from "../styles/theme";
import { IconContext } from "react-icons";
import { MdMail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
const { colors, fonts, fontSizes } = theme;

const StyledContainer = styled.div`
	position: fixed;
	top: 45%;
	left: 50%;
	transform: translate(-50%, -50%);
	-webkit-transform: translate(-50%, -50%);
	-moz-transform: translate(-50%, -50%);
	-o-transform: translate(-50%, -50%);
	-ms-transform: translate(-50%, -50%);
	display: flex;
	flex-direction: column;
	align-items: center;
	z-index: 9;
	border-radius: 5px;
	padding: 1.5rem 1rem;
	box-shadow: 0 0 10px lightgray;

	${media.tablet`padding: 1rem 0.2rem;`};
	${media.landscape`top: 50%;`};
`;

const StyledImage = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 1rem;

	svg {
		width: 80%;
		padding: 0;
		margin: 0;
	}
`;

const StyledInputContainer = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
`;

const StyledInput = styled.input`
	font-family: ${fonts.Montserrat};
	font-size: ${fontSizes.xl};
	display: block;
	outline: none;
	border: 1px solid lightgray;
	border-radius: 5px;
	margin: 0 0.8rem 2rem 0;
	padding: 6px 7px;
	width: 20rem;
	text-indent: 18px;

	${media.tablet`width: auto;`};
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
		<>
			<Navbar />

			<CSSTransition in timeout={1000} classNames="fade" appear>
				<StyledContainer>
					<StyledImage>
						<User />
					</StyledImage>

					<form autoComplete="off" onSubmit={(event) => handleSubmit(event)}>
						<StyledInputContainer>
							<IconContext.Provider
								value={{
									style: {
										position: "relative",
										left: "20px",
										bottom: "15px",
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
									style: {
										position: "relative",
										left: "20px",
										bottom: "17px",
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

						<Button color={colors.buttonGreen} type="submit">
							LOGIN
						</Button>
					</form>
				</StyledContainer>
			</CSSTransition>

			<Footer />
		</>
	);
};

export default Login;
