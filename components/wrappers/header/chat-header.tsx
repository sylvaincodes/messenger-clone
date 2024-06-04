import React from 'react'
import { EllipsisVertical } from 'lucide-react';
import { Logo } from '@/components/ui/logo';

const ChatHeader = () => {
    return (
        <div className='fixed top-0 right-0 w-full bg-white p-4 lg:hidden'>
            <div className='flex justify-between items-center'>

                <div className='flex gap-4 items-center'>
                    <Logo/>
                    <h1 className='text-gray-500 font-bold'>Messenger</h1>
                </div>

                <div>
                    <button>
                        <EllipsisVertical />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ChatHeader
