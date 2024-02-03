import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import "@/styles/globals.css";
import { store, persistedstore } from "../States/Store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Actions } from "@/States/Global";
import { bindActionCreators } from "redux";

export default function App({ Component, pageProps }) {
	const cart = [];

	const addTocart = (item) => {
		if (cart.length === 0) {
			cart.push(item);
		} else {
			cart.push( item);
		}

		return cart;
	};

	return (
		<Provider store={store}>
			<PersistGate persistor={persistedstore}>
				<Navbar />
				<Component {...pageProps} addTocart={addTocart} />
				<Footer />
			</PersistGate>
		</Provider>
	);
}
