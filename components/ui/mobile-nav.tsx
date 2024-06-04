import Link from 'next/link'
import React from 'react'
import { menus } from '@/constantes/index'
import { cn } from '@/lib/utils'

export const MobileNav = ({ menuOpen }: { menuOpen: boolean; }) => {
    return (
        <nav className={cn('bg-white z-10 h-screen py-32 transition-all absolute top-0 right-0 w-full', menuOpen ? 'block' : 'hidden')}>
            <ul className='flex flex-col justify-center gap-8 items-start h-full w-full'>
                {
                    menus?.map((item, idx) => {
                        return <li key={idx} className='w-full bg-neutral-50 p-8'>
                            <Link href={item.link} className='text-[24px] text-neutral-500 font-extrabold border-b border-b-white border-b-[3px] hover:border-b-primary hover:text-black mx-8'>
                                {item.label}
                            </Link>
                        </li>
                    })
                }
            </ul>
        </nav>
    )
}
