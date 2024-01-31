import { applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import reducers from "./Reducers/index";

const config = {
	key: "Bongwear",
	storage,
};

const persistedReducer = persistReducer(config, reducers);

export const store = configureStore(
	{ reducer: persistedReducer },
	applyMiddleware(thunk)
);

export const persistedstore = persistStore(store);
