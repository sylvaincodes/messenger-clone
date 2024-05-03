"use client"
import { Container } from '@/components/ui/container'
import { Logo } from '@/components/ui/logo'
import { Row } from '@/components/ui/row'
import React from 'react'
import { motion } from 'framer-motion'

export const HeaderOne = () => {
    return (
        <motion.header

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, type: "tween" }}

            className='absolute top-4 bg-transparent h-[72px] h-auto w-full text-white z-50'>
            <Container>
                <Row className='justify-start ms-16'>
                    <Logo />
                </Row>
            </Container>
        </motion.header>
    )
}
