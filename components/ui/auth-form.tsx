"use client"
import React, { useCallback, useEffect, useState } from 'react'
import {
    FieldValues,
    useForm,
    SubmitHandler
} from 'react-hook-form'
import { Input } from './input'
import { Button } from './button'
import { BsGithub, BsGoogle } from 'react-icons/bs'
import { AuthSocialButtons } from './auth-social-buttons'
import { Skeleton } from '@radix-ui/themes'
import axios from 'axios'
import toast from 'react-hot-toast'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Loader, Loader2Icon } from 'lucide-react'
import { userSchema } from '@/types'
import { zodResolver } from "@hookform/resolvers/zod";

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
        },
        resolver: zodResolver(userSchema),
    })


    const router = useRouter();
    const session = useSession();

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true)
        // NextAuth 

        if (variant === 'REGISTER') {
            axios.post('/api/register', data).then(() => {
                signIn('credentials', data)
            }).catch(() => {
                toast.error('Error');
            }).finally(() => {
                setIsLoading(false);
            })
        }

        if (variant === 'LOGIN') {
            signIn('credentials', {
                ...data,
                redirect: false
            }).then((callback) => {
                if (callback?.error) {
                    toast.error('Invalid credentials');
                }
                if (callback?.ok && !callback?.error) {
                    toast.success('Logged In!');
                    router.push('/home')
                }
            }).finally(() => {
                setIsLoading(false);
            })
        }
    }

    const socialAction = (action: string) => {
        setIsLoading(true);
        // Next auth api signin 

        signIn(action, { redirect: false }).then((callback) => {
            if (callback?.error) {
                toast.error('Invalid credentials');
            }
            if (callback?.ok && callback?.error) {
                toast.success('Logged In!');
            }
        }).finally(() => {
            setIsLoading(false);
        })
    }

    return (


        <div className="w-full max-w-sm">

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
                            placeholder="Name"
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
                    placeholder="Email address"
                />

                <Input
                    register={register}
                    errors={errors}
                    label="Password"
                    type="password"
                    id="password"
                    required={true}
                    disabled={isLoading}
                    placeholder="Password"
                />

                <div className="mt-4 mb-2 sm:mb-4">
                    <Button

                        disabled={isLoading}
                        fullwidth
                        type='submit'
                    >
                        <span className='inline-flex items-center gap-4'>
                            {
                                isLoading &&
                                <Loader2Icon className="animate-spin" />
                            }
                            {variant === 'LOGIN' ? 'Sign in ' : 'Register'}
                        </span>

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
                <AuthSocialButtons isLoading={isLoading} icon={BsGithub} onClick={() => socialAction('github')} />
                {/* <AuthSocialButtons isLoading={isLoading} icon={BsGoogle} onClick={() => socialAction('google')} /> */}
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

    )
}
