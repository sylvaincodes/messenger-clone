import { Link } from 'lucide-react';
import React from 'react'

const MobileFooterItem = ({ href, icon: Icon, active, onClick }:
    { href: string; icon: any; active: boolean; onClick?: () => void }) => {


    const handleclick = () => {
        if (onClick) {
            return onClick()
        }
    }
    return (
        <div onClick={onClick} className='group flex gap-4 text-sm leading-6 font-semibold w-full text-gray-500  justify-center p-4 text-red hover:text-black hover:bg-gray-100 cursor-pointer'>
            <Icon className="h-6 w-6" />
        </div>

    )
}

export default MobileFooterItem
