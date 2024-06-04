import { Menu, X } from 'lucide-react';
import React from 'react'

export const ButtonGroup = ({ menuOpen, setMenuOpen }: { menuOpen: boolean; setMenuOpen: (value: boolean) => void }) => {
    return (
        <div className='lg:hidden'>
            {
                menuOpen ?
                    <button onClick={() => setMenuOpen(false)} className='lg:hidden'>
                        < X className='text-gray-500' size={40} />
                    </button >
                    :
                    <button onClick={() => setMenuOpen(true)} className='lg:hidden ms-auto'>
                        <Menu className='text-gray-500 lg:hidden' size={40} />
                    </button>
            }
        </div>
    )
}
