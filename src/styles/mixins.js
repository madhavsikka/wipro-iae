import { css } from "styled-components";
// import theme from "./theme";
// import media from "./media";
// const { colors, fontSizes, fonts } = theme;

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
};

export default mixins;
