import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import "@/styles/globals.css";
import { store, persistedstore } from "../States/Store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { useState } from "react";

export default function App({ Component, pageProps }) {
	const [prod, setprod] = useState({});

	const now = (item) => {
		setprod(item);
	};

	return (
		<Provider store={store}>
			<PersistGate persistor={persistedstore}>
				<Navbar />
				<Component {...pageProps} directBuy={now} itemTobuynow={prod} />
				<Footer />
			</PersistGate>
		</Provider>
	);
}
