import { css } from "styled-components";

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
};

export default mixins;
