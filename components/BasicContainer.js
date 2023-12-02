/**
 * 기본 페이지 컨테이너
 * @param { paramComponent } props 
 * @returns 
 */

import { motion } from "framer-motion";
const BasicContainer = (props) =>{
    const { children } = props;
    return (
        <div
            key={'b_c'}
            className="min-h-screen w-full bg-primary"
        >
            <div className="px-2">
                {children}
            </div>
        </div>
    );
}

export default BasicContainer;