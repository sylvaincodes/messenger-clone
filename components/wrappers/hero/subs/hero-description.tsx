import React, { useState,useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from "next/link";
import TextTransition, { presets } from 'react-text-transition';
import {
    animateScroll as scroll,
} from "react-scroll";
import { Logo } from '@/components/ui/logo';

export const HeroDescription = () => {


     /* ------ Scroll onclick event ------ */
    const scrollTo = () => {
        scroll.scrollTo(700);
    };


     /* ------ TextTransition setup ------ */
    const TEXTS = ['Connect', 'Gather', 'Inform'];
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(
            () => setIndex((index) => index + 1),
            3000, // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);


    return (
        <motion.div
            className="lg:max-w-screen-xl flex flex-col items-center xl:items-start justify-center xl:justify-start my-8 gap-4 lg:gap-8 ">
            <Logo/>
            <motion.h2
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, type: "tween", delay: 1 }}
                className="text-3xl max-w-lg md:text-5xl font-bold tracking-tight text-white   
                                flex leading-none text-center">
                <span>We  &nbsp;</span>
                &nbsp;<TextTransition className="inline-flex text-primary " springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>

            </motion.h2>
            <motion.h2
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, type: "tween", delay: 1 }}

                className="text-3xl max-w-screen-xl mb-6 md:text-5xl font-bold tracking-tight text-white  text-center"

            >people from anywhere.</motion.h2>
            <motion.p
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, type: "tween", delay: 1 }}
                className="text-base lg:text-xl max-w-xl mb-4 text-gray-200 text-center lg:text-left  
                                ">
                Chat with your friends, send them Messages and video call them. Watch Stories and Spotlight content, all from your computer.
            </motion.p>
            <Link onClick={scrollTo}
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 px-4 py-2 text-white bg-primary hover:text-black hover:bg-white text-white "
            >
                Learn more
                <svg
                    className="inline-block w-3 ml-2"
                    fill="currentColor"
                    viewBox="0 0 12 12"
                >
                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
            </Link>
        </motion.div>
    )
}
