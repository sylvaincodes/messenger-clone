import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Logo = () => {
    return (
        <Link href="/" className='flex items-center gap-4'>
            <Image src="/svg/messenger.svg" width="40" height="40" alt='logo' />
            <span className='text-gray-900 tracking-wide font-bold text-2xl'>messenger</span>
        </Link>
    )
}
