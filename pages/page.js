import About from "../components/About";
import BasicContainer from "../components/BasicContainer";
import Header from "../components/Header";
import {isMobile} from "react-device-detect";
import Footer from "../components/Footer";
import {motion} from "framer-motion";
import {animationConfig} from "../components/contents/animationConfig";

const Home = () => {
    return (
        <motion.div
            initial={animationConfig.mainAnimation.initial}
            exit={animationConfig.mainAnimation.exit}
            animate={animationConfig.mainAnimation.animate}
            transition={animationConfig.mainAnimation.transition}
            key={'p_c'} // max-w-xl
        >
            <Header isMobile={isMobile} />
            <BasicContainer>
                <About />
            </BasicContainer>
            <Footer isMobile={isMobile} />
        </motion.div>
    )
}
export default Home;