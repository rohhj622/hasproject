"use client";

import {useState} from "react";
import common from "../context/en/common.json";

const variants = {
    first: {
        y: 100,
    },
    animationEnd: {
        y: 0,
        // rotate: 270,
    },
};

const About = () => {
    const [text, setText] = useState(common.about_content);
    const [roadmap, setRoadmap]= useState(common.roadmap_content);

    return (
        <div
            className="container max-w-6xl mx-auto flex flex-col items-center gap-y-4"
        >
            <div className="flex justify-center items-center">
                <img src="https://ebbasic.s3.ap-northeast-2.amazonaws.com/about_background.png" alt="about_background"/>
            </div>
            <div className="flex flex-col gap-y-6 mt-4 text-gray-900">
                <h1 className="text-5xl text-semibold text-center uppercase">
                    Hardihooder<br/>Angel<br/>Society
                </h1>
                <h1 className="mt-50 text-md text-bold text-gray-900 text-center whitespace-pre-wrap">
                    {text}
                    {/* The power of culture is great.<br/>
            We want to create a trend with the power to create a new culture<br/>and improve the world through various projects. */}
                    {/* 문화의 힘은 대단합니다.
            <br/>우리는 다양한 프로젝트를 진행하여 새로운 문화를 만들고,<br/> 이를 통해 더 나은 세상을 만드는 힘을 가진 트렌드를 만들고자 합니다. */}
                </h1>
                {/*<h3 className="mt-50 text-md text-bold text-gray-900 text-center whitespace-pre-wrap">*/}
                {/*    {roadmap}*/}
                {/*</h3>*/}
            </div>
        </div>
        // </main>
    );
};


export default About;
