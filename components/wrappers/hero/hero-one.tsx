"use client"
import { easeInOut, motion } from 'framer-motion'
import { AuthForm } from "@/components/ui/auth-form";
import { HeroDescription } from "./subs/hero-description";

export const HeroOne = () => {

    return (
        <motion.section

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: easeInOut }}
            className="relative bg-hero-pattern bg-cover bg-left">


            {/* Hero Shape  */}
            <svg
                className="absolute -bottom-[15px] inset-x-0 bottom-0 text-white"
                viewBox="0 0 1160 163"
            >
                <path
                    fill="currentColor"
                    d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
                />
            </svg>


            {/* Hero content  */}
            <div className="relative">

                <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="flex flex-col items-center justify-between xl:flex-row">

                        {/* hero escription  */}
                        <HeroDescription />

                        {/* Hero form  */}
                        <AuthForm />

                    </div>
                </div>
            </div>

        </motion.section>
    );
};

