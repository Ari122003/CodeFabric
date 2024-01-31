export const sendProduct = (item) => {
	return (dispatch) => {
		dispatch({
			type: "send",
			payload: item,
		});
	};
};