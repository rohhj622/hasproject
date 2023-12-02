"use client";

import Head from "next/head";
import React, {useState, useEffect, Fragment} from "react";
import {useRouter} from "next/router";

import {getIsNeededHeader} from "../context/commonJs";

// import ChangeLanguage from "./ChangeLanguage";
import Menu from "./listComponent/Menu";
import LogoComponent from "./logoComponent/LogoComponent";

import AnimateHeight from 'react-animate-height';
import {motion} from "framer-motion";

// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import {faTwitter, faDiscord, faInstagram} from '@fortawesome/free-brands-svg-icons';

// import {connectWallet, getCurrentWalletConnected} from "@/utils/interact";
import {useStatus} from "../context/statusContext";
import Link from "next/link";
import {animationConfig} from "./contents/animationConfig";


const Header = (props) => {
    const router = useRouter();

    const {isMobile} = props;
    // const [isNeedHeader, setIsNeedHeader] = useState(getIsNeededHeader(router.pathname));
    const [mounted, setMounted] = useState(false);
    const [height, setHeight] = useState(0);

    const {setStatus} = useStatus();
    const [walletAddress, setWalletAddress] = useState("");

    const addWalletListener = () => {
        if (window.ethereum) {
            window.ethereum.on("accountsChanged", async (accounts) => {
                if (accounts.length > 0) {
                    setWalletAddress(accounts[0]);
                    setStatus("");
                } else {
                    setWalletAddress("");
                    setStatus("🦊 Connect to Metamask using Connect Wallet button.");
                }
            });
        }
    };

    useEffect(() => {
        setMounted(true);

        // const prepare = async () => {
        //     const walletResponse = await getCurrentWalletConnected();
        //
        //     setWalletAddress(walletResponse.address);
        //     setStatus(walletResponse.status);
        //
        //     addWalletListener();
        // };

        // prepare();
    }, []);

    return (
        <motion.div
            initial={animationConfig.headerAnimation.initial}
            animate={animationConfig.headerAnimation.animate}
            exit={animationConfig.headerAnimation.exit}
            transition={animationConfig.transition}
        >
            <Head>
                <title>Hardihooder Angel Society</title>
                <link rel="icon" href="/favicon.ico"/>
                <meta name='description' content='Hardihooder Angel Society'/>
                <meta name='viewport' content='initial-scale=1.0, width=device-width'/>
            </Head>
            {
                !mounted &&
                (
                    <header className=" inset-x-0 top-0 z-10 min-w-full text-white bg-primary mb-2 pt-2">
                        {
                            (!isMobile) ?
                                (<motion.div
                                    className="flex items-center container mx-auto max-w-7xl justify-between h-full text-lg px-20 ">
                                    <LogoComponent
                                        imageLink="/images/has_logo_full.png"
                                        className={"w-20 h-20 inline-block"}
                                    />
                                    {/* Links */}
                                    <div aria-label="Contact Menu">
                                        <ul className="flex items-center gap-x-2">
                                            <li>
                                                <div
                                                    className="text-gray-900 cursor-pointer hover:text-gray-700 ml-3"
                                                >
                                                    -
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </motion.div>)
                                : (
                                    <div className="container px-7 gap-y-4">
                                        <div
                                            className="container flex flex-column justify-between items-center mx-auto max-w-7xl h-full text-lg">
                                            {/* 로고 */}
                                            <LogoComponent
                                                imageLink="/images/has_logo_full.png"
                                                className={"w-20 h-20 inline-block"}
                                            />
                                            {/* 햄버거 메뉴 */}
                                            <div>
                                                <img src="/images/menubar.png" alt="logo" className="w-5 h-5 inline-block"
                                                     onClick={() => setHeight(height === 0 ? 'auto' : 0)}
                                                />
                                            </div>
                                        </div>
                                        {/* 햄버거메뉴 */}
                                        <AnimateHeight
                                            id="example-panel"
                                            duration={200}
                                            height={height} // see props documentation below
                                        >
                                            <div
                                                id="hamburger"
                                                className="flex flex-col w-full items-end gap-y-2 text-base text-gray-900"
                                            >
                                                <Menu setHeight={setHeight}/>
                                            </div>
                                        </AnimateHeight>
                                    </div>
                                )}
                    </header>
                )
            }
            {
                mounted &&
                (
                    <header className=" inset-x-0 top-0 z-10 min-w-full text-white bg-primary mb-2 pt-2">
                    {
                        (!isMobile) ?
                            (<motion.div
                                className="flex items-center container mx-auto max-w-7xl justify-between h-full text-lg px-20 ">
                                <LogoComponent
                                    imageLink="/images/has_logo_full.png"
                                    className={"w-20 h-20 inline-block"}
                                />
                                {/* Links */}
                                <div aria-label="Contact Menu">
                                    <ul className="flex items-center gap-x-2">
                                        {/*<li>*/}
                                        {/*    /!* eslint-disable-next-line @next/next/link-passhref *!/*/}
                                        {/*    <Link href={"/hasartifact"}>*/}
                                        {/*        <p className={"text-black"}>NFT</p>*/}
                                        {/*    </Link>*/}
                                        {/*</li>*/}
                                        {/*<li>*/}
                                        {/*    <ConnectWallet*/}
                                        {/*        walletAddress={walletAddress}*/}
                                        {/*        setWalletAddress={setWalletAddress}*/}
                                        {/*        setStatus={setStatus}*/}

                                        {/*    />*/}
                                        {/*</li>*/}
                                    </ul>
                                </div>
                            </motion.div>)
                            : (
                                <div className="container px-7 gap-y-4">
                                    <div
                                        className="container flex flex-column justify-between items-center mx-auto max-w-7xl h-full text-lg">
                                        {/* 로고 */}
                                        <LogoComponent
                                            imageLink="/images/has_logo_full.png"
                                            className={"w-20 h-20 inline-block"}
                                        />
                                        {/* 햄버거 메뉴 */}
                                        <div>
                                            <img src="/images/menubar.png" alt="logo" className="w-5 h-5 inline-block"
                                                 onClick={() => setHeight(height === 0 ? 'auto' : 0)}
                                            />
                                        </div>
                                    </div>
                                    {/* 햄버거메뉴 */}
                                    <AnimateHeight
                                        id="example-panel"
                                        duration={200}
                                        height={height} // see props documentation below
                                    >
                                        <div
                                            id="hamburger"
                                            className="flex flex-col w-full items-end gap-y-2 text-base text-gray-900"
                                        >
                                            {/*<ChangeLanguage setHeight={setHeight}/>*/}
                                            <Menu setHeight={setHeight}/>
                                        </div>
                                    </AnimateHeight>
                                </div>
                            )
                    }
                    </header>
                )
            }
        </motion.div>
    );

};

export default Header;
