import { useState } from "react";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import { linkItems } from "./contents/basicData";

import LinkList from "./listComponent/LinkList";
import LogoComponent from "./logoComponent/LogoComponent";

import {motion} from "framer-motion";

import {animationConfig} from "./contents/animationConfig";

const Gates = () => {
    const { t } = useTranslation(); 
    return (
        <motion.div
            initial={animationConfig.gatesAnimation.initial}
            exit={animationConfig.gatesAnimation.exit}
            animate={animationConfig.gatesAnimation.animate}
            transition={animationConfig.gatesAnimation.transition}

            key={'g_c'} // max-w-xl
            className="container flex flex-col items-center w-full h-full justify-between text-xl"
        >
            {/* 로고 */}
            <div className="flex items-center w-full mx-20 mt-6 mb-6">
                <LogoComponent 
                    className={"w-20 h-20 inline-block"}
                    imageLink="/images/has_logo_full.png"
                    useLink={false}
                />
            </div>

            {/* 링크 리스트 */}
            <div className="flex flex-col w-full items-start border-gray-900 border-t-1">
                <LinkList 
                    itmes={linkItems}
                    divClassName={"flex flex-col w-full mb-20"}
                />
            </div>
        </motion.div>
    );
};


export default Gates;
