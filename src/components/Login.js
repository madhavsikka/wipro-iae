import React, { useState } from "react";
import styled from "styled-components";
import media from "../styles/media";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
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

const StyledContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 2fr;
	grid-template-areas:
		"image input"
		"image input"
		"login login";
	justify-items: center;
	align-items: center;
	box-shadow: 0 0 10px lightgray;
	padding: 2rem;
	margin-top: 2rem;
	${media.tablet`margin-top: 0;`}
	${media.thone`
		grid-template-areas:
			"image"
			"input"
			"login";
		grid-template-columns: auto;
		padding: 0;
		margin-top: 0;
		box-shadow: none;
	`}
`;

const StyledForm = styled.form`
	grid-area: input;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const StyledImage = styled.div`
	display: flex;
	justify-content: center;
	grid-area: image;

	svg {
		width: 80%;
		margin: 0;
		${media.thone`width: 60%;`}
	}
`;

const StyledInputContainer = styled.div`
	display: flex;
	align-items: center;
	padding: 1rem;
	width: 100%;
	${media.thone`padding: 1rem 0;`}
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

			<CSSTransition in timeout={1000} classNames="fade" appear>
				<StyledContainer>
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
						style={{ gridArea: "login", marginTop: "2rem" }}>
						LOGIN
					</Button>
				</StyledContainer>
			</CSSTransition>

			<Footer />
		</StyledFlex>
	);
};

export default Login;
