"use client"
import React, { useCallback, useState } from 'react'
import {
    FieldValues,
    useForm,
    SubmitHandler
} from 'react-hook-form'
import { Input } from './input'

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


    const { register, handleSubmit, formState: { } } = useForm < FieldValues > ({
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

    return (
        <div className='flex justify-center'>
            <div className='bg-white px-4 py-8 shadow rounded-lg px-10 sm:max-w-md w-full'>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <Input />
                </form>

            </div>
        </div>
    )
}
