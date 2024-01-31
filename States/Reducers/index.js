import { combineReducers } from "redux";
import CartReducer from "./CartReducer";

const reducers = combineReducers({
	Cart:CartReducer
});

export default reducers;
