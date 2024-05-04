import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

export const Logo = () => {
    return (

        <motion.div
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.4 }}
        >
            <Link
                href="/">
                <Image src="/svg/messenger.svg" width="40" height="40" alt='logo' />
            </Link>
        </motion.div>
    )
}
