"use client"
import Image from "next/image";
import { easeInOut, motion } from 'framer-motion'
import Link from "next/link";
import TextTransition, { presets } from 'react-text-transition';
import { useEffect, useState } from "react";
import {
    animateScroll as scroll,
} from "react-scroll";
import { AuthForm } from "@/components/ui/auth-form";

const TEXTS = ['Connect', 'Gather', 'Inform'];
export const HeroOne = () => {

    const [index, setIndex] = useState(0);
    const scrollTo = () => {
        scroll.scrollTo(700); // Scrolling to 100px from the top of the page.
    };
    useEffect(() => {
        const intervalId = setInterval(
            () => setIndex((index) => index + 1),
            3000, // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);

    return (
        <motion.section

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: easeInOut }}

            className="relative">


            <Image
                src="https://images.pexels.com/photos/3774903/pexels-photo-3774903.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                className="absolute inset-x-0 object-cover w-full h-full "
                alt="IMAGE" width="1260" height="750"
            />
            <div className="relative bg-opacity-75  bg-deep-purple-accent-700">
                <svg
                    className="absolute -bottom-[10px] inset-x-0 bottom-0 text-white"
                    viewBox="0 0 1160 163"
                >
                    <path
                        fill="currentColor"
                        d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
                    />
                </svg>
                <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="flex flex-col items-center justify-between xl:flex-row">
                        <motion.div
                            className="lg:max-w-screen-xl flex flex-col items-center xl:items-start justify-center xl:justify-start my-8 gap-4 lg:gap-8 ">
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
                        <motion.div

                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, type: "tween", delay: 1.5 }}
                            className="w-full max-w-xl xl:px-8 xl:w-5/12">

                            <AuthForm />
                        </motion.div>
                    </div>
                </div>
            </div>

        </motion.section>
    );
};