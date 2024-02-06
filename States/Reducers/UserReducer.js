import { createSlice } from "@reduxjs/toolkit";

const userReducer = createSlice({
	name: "User",
	initialState: {
		token: "",
	},

	reducers: {
		addUser(state, action) {
			state.token = action.payload;
		},
	},
});

export const { addUser } = userReducer.actions;
export default userReducer.reducer;
