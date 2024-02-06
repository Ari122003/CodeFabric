import { createSlice } from "@reduxjs/toolkit";

const CartReducer = createSlice({
	name: "cart",
	initialState: {
		cart: [],
	},

	reducers: {
		addtoCart(state, action) {
			state.cart.push(action.payload);
		},

		remove(state, action) {
			const id = action.payload;

			state.cart = state.cart.filter((i) => {
				if (i.item.Slug !== id) {
					return i;
				}
			});
		},

		update(state, action) {
			const { qty, slug } = action.payload;

			state.cart.forEach((i) => {
				if (i.item.Slug === slug) {
					i.quantity = qty;
				}
			});
		},
	},
});

export const { addtoCart, remove, update } = CartReducer.actions;
export default CartReducer.reducer;
