import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyAvi91WAD0TpgN-SyRd69JMVOya_Bv3vzI",
	authDomain: "bongwear-a1c5a.firebaseapp.com",
	projectId: "bongwear-a1c5a",
	storageBucket: "bongwear-a1c5a.appspot.com",
	messagingSenderId: "72986236050",
	appId: "1:72986236050:web:19bfae0dabcae03da1424b",
	measurementId: "G-WRTP8VGPM9",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export default auth;
