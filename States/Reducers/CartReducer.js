const CartReducer = (state = {}, action) => {
	if (action.type === "send") {
		return (state = action.payload);
	} else {
		return state;
	}
};

export default CartReducer;
