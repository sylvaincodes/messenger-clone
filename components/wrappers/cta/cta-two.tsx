"use client"
import Image from "next/image";
import { motion } from 'framer-motion'

export const CtaTwo = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, type: "tween" }}
            className="pt-20">
            <div className="relative">
                <Image
                    className="object-cover w-full h-56 sm:h-96"
                    src="https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    alt="" width="1000" height="1000"
                />
                <div className="absolute inset-0 bg-gray-900 bg-opacity-50" />
            </div>
        </motion.section>
    );
};