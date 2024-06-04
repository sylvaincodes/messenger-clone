"use client"
import React from 'react'
import { User } from '@prisma/client'
import Image from 'next/image'

const Avatar = ({ user }: { user?: User }) => {
    return (
        <div className='relative'>
            {/* <span className='h-3 w-3 absolute right-[1px] bg-green-500 rounded-full top-0'></span> */}
            {
                user?.image ?
                    <Image src={user.image} alt="image" width="100" height="100" className='rounded-full h-10 w-10 ' /> :
                    <Image src="/avatars/avatar.png" alt="image" width="100" height="100" className='rounded-full h-10 w-10 ' />
            }
        </div>
    )
}

export default Avatar
