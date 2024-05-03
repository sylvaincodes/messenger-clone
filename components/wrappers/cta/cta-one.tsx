
"use client"
import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import {
    motion,
} from "framer-motion";
import { Container } from '@/components/ui/container';

export const CtaOne = () => {

    return (
        <section className='relative'>
            <Container>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, type: "tween" }}

                    className="flex flex-col justify-between max-w-xl px-4 mx-auto lg:pt-16 lg:flex-row md:px-8 lg:max-w-screen-xl">
                    <motion.div
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, type: "tween" }}

                        className="pt-16 mb-16 lg:mb-0 lg:pt-32 lg:max-w-lg lg:pr-5">

                        <div className="max-w-xl mb-6">

                            <motion.h2

                                initial={{ x: -100 }}
                                whileInView={{ x: 0 }}
                                transition={{
                                    duration: 0.3,
                                    type: "tween"
                                }}

                                className="max-w-lg mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:leading-none">
                                Download mobile app for
                                <br className="hidden md:block" />
                                <motion.span
                                    initial={{ x: -100 }}
                                    whileInView={{ x: 0 }}
                                    transition={{
                                        duration: 0.4,
                                        type: "tween"
                                    }}

                                    className="inline-block text-primary">
                                    Messenger.
                                </motion.span>
                            </motion.h2>

                            <motion.p

                                initial={{ x: -100 }}
                                whileInView={{ x: 0 }}
                                transition={{
                                    duration: 0.5,
                                    type: "tween"
                                }}
                                className="text-base text-gray-700 md:text-lg">
                                The mobile app Messenger is available from the PlayStore and Apple Store.
                            </motion.p>
                        </div>
                        <div className="flex items-center">
                            <Link
                                href="https://play.google.com/store/apps?hl=fr&gl=US"
                                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-primary hover:text-white focus:shadow-outline focus:outline-none"
                            >
                                Android
                            </Link>

                            <Link
                                href="https://play.google.com/store/apps?hl=fr&gl=US"
                                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-primary hover:text-white focus:shadow-outline focus:outline-none"
                            >
                                Ios
                            </Link>

                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ x: 100 }}
                        whileInView={{ x: 0 }}
                        transition={{
                            duration: 0.4,
                            type: "tween"
                        }}
                        className='group'
                    >
                        <Image
                            src="https://images.pexels.com/photos/3612707/pexels-photo-3612707.jpeg?auto=compress&cs=tinysrgb&w=600"
                            className="rounded-full shadow-sm object-cover object-top w-full h-64 mx-auto lg:h-auto xl:mr-24 md:max-w-sm shadow-lg shadow-black"
                            alt="cta" width="1000" height="1000"
                        />
                    </motion.div>
                </motion.div>
            </Container>
        </section>
    )
}
