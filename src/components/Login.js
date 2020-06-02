import React from "react";
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
	${mixins.flexContainerCenter};
	flex-direction: row;
	align-items: flex-start;
	flex-grow: 0;
	border-radius: 5px;
	box-shadow: 0 0 10px lightgray;
	margin-top: 2rem;
	padding: 2rem;
	${media.tablet`flex-direction: column ; align-items: center; margin-top: 2rem;`}
	${media.phablet`box-shadow: none; padding: 0;`}
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
	width: auto;
	text-indent: 18px;

	${media.tablet`width: auto;`};
`;

const Login = (props) => {
	return (
		<StyledFlex>
			<Navbar />

			<CSSTransition in timeout={1000} classNames="fade" appear>
				<StyledContainer>
					<StyledImage>
						<User />
					</StyledImage>

					<form autoComplete="off">
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
							<StyledInput type="email" name="email" placeholder="Email" />
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
							/>
						</StyledInputContainer>

						<Button color={colors.buttonGreen}>LOGIN</Button>
					</form>
				</StyledContainer>
			</CSSTransition>

			<Footer />
		</StyledFlex>
	);
};

export default Login;
