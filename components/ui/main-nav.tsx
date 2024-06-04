import Link from 'next/link'
import React from 'react'
import { menus } from '@/constantes/index'

export const MainNav = () => {
    return (
        <nav>
            <ul className='hidden lg:flex gap-8 items-center '>
                {
                    menus?.map((item, idx) => {
                        return <li key={idx}>
                            <Link href={item.link} className='text-neutral-600  text-md font-bold border-b border-b-white border-b-[3px] hover:border-b-primary'>
                                {item.label}
                            </Link>
                        </li>
                    })
                }
            </ul>
        </nav>
    )
}
