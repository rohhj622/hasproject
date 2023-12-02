/**
 * 기본 페이지 컨테이너
 * 높이가 화면 높이와 같지 않은 컨테이너
 * @param { paramComponent } props 
 * @returns 
 */
import { motion } from "framer-motion";
const BasicContainer = (props) =>{
    const { children } = props;
    return (
        <motion.div
            initial={{ x: 0, opacity: 0.5 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 0, opacity: 0.5 }}
            transition={{
                ease: "linear",
                duration: 2,
                x: { duration: 1 }
            }}
            key={'b_nfh_c'}
            className="flex flex-col w-full bg-primary px-2 items-center"
        >
            {children}
        </motion.div>
    );
}

export default BasicContainer;