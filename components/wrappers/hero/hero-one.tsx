"use client"
import Image from "next/image";
import { motion } from 'framer-motion'
import Link from "next/link";
import TextTransition, { presets } from 'react-text-transition';
import { useEffect, useState } from "react";
import {
    animateScroll as scroll,
} from "react-scroll";

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

            initial={{ height: 0 }}
            animate={{ height: '100%' }}
            transition={{ duration: 0.5, type: "tween" }}

            className="relative">


            <Image
                src="https://images.pexels.com/photos/3774903/pexels-photo-3774903.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                className="absolute inset-x-0 object-cover w-full h-full "
                alt="IMAGE" width="1260" height="750"
            />
            <div className="relative bg-opacity-75  bg-deep-purple-accent-700">
                <svg
                    className="absolute -bottom-[5px] inset-x-0 bottom-0 text-white"
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
                            className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                            <motion.h2
                                initial={{ opacity: 0, x: -100 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, type: "tween", delay: 1 }}
                                className="max-w-lg mb-6 lg:text-5xl font-bold tracking-tight text-white sm:text-3xl sm:leading-none">
                                We  &nbsp;
                                <TextTransition className=" text-primary" springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>

                                people <br className="hidden md:block" />
                                from anywhere.
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, x: -100 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, type: "tween", delay: 1 }}
                                className="max-w-xl mb-4 text-base text-gray-200 md:text-lg 
                                
                                ">
                                Chat with your friends, send them Messages and video call them. Watch Stories and Spotlight content, all from your computer.
                            </motion.p>
                            <Link onClick={scrollTo}
                                href="/"
                                aria-label=""
                                className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 px-4 py-2 hover:text-white hover:bg-primary text-white "
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
                            <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                                <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                                    Log in
                                </h3>
                                <form>

                                    <div className="mb-1 sm:mb-2">
                                        <label
                                            htmlFor="lastName"
                                            className="inline-block mb-1 font-medium"
                                        >
                                            Email
                                        </label>
                                        <input
                                            placeholder="Doe"
                                            required
                                            type="text"
                                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                            id="lastName"
                                            name="lastName"
                                        />
                                    </div>
                                    <div className="mb-1 sm:mb-2">
                                        <label
                                            htmlFor="email"
                                            className="inline-block mb-1 font-medium"
                                        >
                                            Password
                                        </label>
                                        <input
                                            placeholder="john.doe@example.org"
                                            required
                                            type="text"
                                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                            id="email"
                                            name="email"
                                        />
                                    </div>

                                    <div className="mt-4 mb-2 sm:mb-4">
                                        <button
                                            type="submit"
                                            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-gray-900 transition duration-200 rounded shadow-md bg-primary
                                            text-white
                                            hover:bg-white focus:shadow-outline focus:outline-none"
                                        >
                                            Continue
                                        </button>
                                    </div>


                                    <div className="mt-4 mb-2 sm:mb-4">
                                        <button
                                            type="submit"
                                            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-gray-900 transition duration-200 rounded shadow-md bg-white
                                            text-gray-900
                                            hover:bg-white focus:shadow-outline focus:outline-none"
                                        >
                                            Social Buttons
                                        </button>
                                    </div>
                                    <p className="text-xs text-gray-600 sm:text-sm">
                                        We respect your privacy. Unsubscribe at any time.
                                    </p>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

        </motion.section>
    );
};