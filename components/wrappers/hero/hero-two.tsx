import { AuthForm } from '@/components/ui/auth-form'
import { Container } from '@/components/ui/container'
import Image from 'next/image'
import React from 'react'

export const HeroTwo = () => {
    return (
        <section className='py-8'>
            <Container>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                    <div className='flex flex-col gap-8 items-center lg:items-start justify-center order-last lg:order-1'>
                        <h1 className='flex-1 h-40 bg-gradient-to-r from-indigo-500 via-purple-500 to-red-500 text-transparent  bg-clip-text text-3xl lg:text-5xl max-w-xs tracking-wide text-center lg:text-left'>Together,
                            anywhere anytime
                        </h1>
                        <p className='text-base max-w-lg text-gray-500 text-center lg:text-left'>Thanks to Messenger, keeping in touch with your loved ones has never been so easy and fun.</p>

                        <AuthForm />
                    </div>
                    <div className=' lg:order-2'>
                        <Image src="/images/hero-illustration.jpg" alt='illustration' width="1000" height="1000" />
                    </div>
                </div>

            </Container>
        </section>
    )
}
