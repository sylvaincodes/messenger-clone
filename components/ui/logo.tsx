import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Logo = () => {
    return (
        <div>
            <Link
                href="/">
                <Image src="/svg/messenger.svg" width="40" height="40" alt='logo' />
            </Link>
        </div>
    )
}
