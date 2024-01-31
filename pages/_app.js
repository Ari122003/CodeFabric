import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import "@/styles/globals.css";
import { store, persistedstore } from "../States/Store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistedstore}>
				<Navbar />
				<Component {...pageProps} />
				<Footer />
			</PersistGate>
		</Provider>
	);
}
