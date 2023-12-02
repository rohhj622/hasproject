import "../styles/globals.css";

import { isMobile } from 'react-device-detect';
import { motion, AnimatePresence } from "framer-motion";

import { StatusProvider } from "../context/statusContext";
// import { appWithTranslation } from 'next-i18next';

import Header from "../components/Header";
import Footer from "../components/Footer";

const MyApp = ({ Component, pageProps }) => {
	return (
		<StatusProvider>
			<div>
				<Component {...pageProps} />
			</div>
		</StatusProvider>
	);
}

export default (MyApp);
// export default appWithTranslation(MyApp);
