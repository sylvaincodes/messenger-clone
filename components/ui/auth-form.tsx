"use client"
import React, { useCallback, useState } from 'react'
import {
    FieldValues,
    useForm,
    SubmitHandler
} from 'react-hook-form'
import { Input } from './input'
import { Button } from './button'
import { BsGithub, BsGoogle } from 'react-icons/bs'
import { AuthSocialButtons } from './auth-social-buttons'
import { motion } from 'framer-motion'
import { Skeleton } from '@radix-ui/themes'


export default function ImageLoader() {
    return <Skeleton width="48px" height="48px" />
}


type Variant = 'LOGIN' | 'REGISTER'
export const AuthForm = () => {

    const [variant, setVariant] = useState < Variant > ('LOGIN')
    const [isLoading, setIsLoading] = useState(false)

    const toggleVariant = useCallback(() => {
        if (variant === 'LOGIN') {
            setVariant('REGISTER')
        } else {
            setVariant('LOGIN')
        }
    }, [variant])


    const { register, handleSubmit, formState: { errors } } = useForm < FieldValues > ({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true)
        // NextAuth 
    }

    const socialAction = (action: string) => {
        setIsLoading(true);
        // Next auth api signin 
    }

    return (

        <motion.div

            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, type: "tween", delay: 1.5 }}
            className="absolute right-0 w-full max-w-md max-h-full">

            <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                    Log in
                </h3>

                {/* form login  */}
                <form onSubmit={handleSubmit(onSubmit)} autoComplete='off'>

                    {
                        variant === 'REGISTER' && (
                            <Input
                                register={register}
                                errors={errors}
                                label="Name"
                                type="text"
                                id="name"
                                required={true}
                                disabled={isLoading}
                            />
                        )}

                    <Input
                        register={register}
                        errors={errors}
                        label="Email"
                        type="email"
                        id="email"
                        required={true}
                        disabled={isLoading}
                    />

                    <Input
                        register={register}
                        errors={errors}
                        label="Password"
                        type="password"
                        id="password"
                        required={true}
                        disabled={isLoading}
                    />

                    <div className="mt-4 mb-2 sm:mb-4">
                        <Button
                            disabled={isLoading}
                            fullwidth
                            type='submit'
                        >
                            {variant === 'LOGIN' ? 'Sign in ' : 'Register'}
                        </Button>
                    </div>

                </form>

                {/* social buttons  */}
                <div className="my-4 border-b text-center">
                    <div
                        className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2"
                    >
                        Or sign up with an account
                    </div>
                </div>
                <div className='mt-6 flex w-full gap-4'>
                    <AuthSocialButtons icon={BsGithub} onClick={() => socialAction('github')} />
                    <AuthSocialButtons icon={BsGoogle} onClick={() => socialAction('google')} />
                </div>
                <div className='flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500'>
                    <div className='inline-flex gap-4'>
                        {variant === 'LOGIN' ? 'New to Messenger?' : 'Already a member'}
                        <div
                            onClick={toggleVariant}
                            className='underline cursor-pointer'
                        >
                            {variant === 'LOGIN' ? 'create an account' : "Login"}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
