"use client"
import { Container } from '@/components/ui/container'
import { Logo } from '@/components/ui/logo'
import { Twitter, Youtube } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

export const FooterOne = () => {
    return (

        <motion.footer
            initial={{
                opacity: 0
            }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, type: "tween" }}

            className="bg-white dark:bg-gray-900 border dark:border-0 py-10">
            <Container className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Logo />
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">

                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <Link href="https://www.youtube.com/channel/UCmPmOdDw941pdi8YmIPjyEA" className="hover:underline ">Youtube</Link>
                                </li>
                                <li>
                                    <Link href="https://discord.gg/d8e85tAD" className="hover:underline">Discord</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <Link href="#" className="hover:underline">Mentions</Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:underline">Terms &amp; Conditions</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <Link href="https://flowbite.com/" className="hover:underline">Messenger</Link>. All right reserved.
                    </span>
                    <div className="flex mt-4 sm:justify-center sm:mt-0">

                        <Link href="https://www.youtube.com/channel/UCmPmOdDw941pdi8YmIPjyEA" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                            <Youtube />
                        </Link>


                        <Link href="https://twitter.com/sylvaincodes" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                            <Twitter />
                        </Link>


                    </div>
                </div>
            </Container>
        </motion.footer>

    )
}
