import { AuthForm } from '@/components/ui/auth-form'
import { Container } from '@/components/ui/container'
import { Logo } from '@/components/ui/logo'
import React from 'react'

export default function Page() {
    return (
        <div className='min-h-full flex justify-center items-center py-12 bg-gray-100'>
            <Container>
                <div className='flex flex-col gap-8 '>

                    <div className="flex flex-col justify-center items-center">
                        <Logo />
                        <h2 className="mt-6 text-center text-3xl text-neutral-500 font-bold">
                            Se connecter à votre compte
                        </h2>
                    </div>

                    <AuthForm />
                </div>
            </Container>
        </div>
    )
}
