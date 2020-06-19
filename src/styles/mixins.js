import { css } from "styled-components";
import theme from "./theme";
const { colors, fontSizes } = theme;

const mixins = {
	fullFlexCenter: css`
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		min-height: 100vh;
	`,
	flexContainerCenter: css`
		display: flex;
		align-items: center;
		justify-content: center;
		flex: 1 0 auto;
	`,
	flexBar: css`
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-radius: 5px;
		padding: 10px;
		margin: 0;
	`,
	styledForm: css`
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		flex: 1 0 0;
		padding: 0 2rem;
		margin: 1rem;
	`,
	styledFormFlex: css`
		display: flex;
		flex-direction: column;
		flex-grow: 1;
		justify-content: center;
		align-items: center;
		margin: 2rem;
		background: ${colors.cultured};
		border-radius: 5px;
		min-width: 500px;
		:before {
			width: 100%;
			padding: 0.25rem;
			border-top-left-radius: 5px;
			border-top-right-radius: 5px;
			background: ${colors.blueMunsell};
			color: white;
			font-weight: 500;
			font-size: ${fontSizes.xxl};
		}
	`,
};

export default mixins;
