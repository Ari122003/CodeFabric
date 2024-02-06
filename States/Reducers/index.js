import { combineReducers } from "redux";
import CartReducer from "./CartReducer";
import userReducer from "./UserReducer";

const reducers = combineReducers({
	Cart: CartReducer,
	User: userReducer,
});

export default reducers;
