import React from 'react'
import { BsChat } from 'react-icons/bs'

const EmptyChat = () => {
    return (
        <div className="flex justify-center items-center w-full h-full bg-[url('/images/bg-home.jpg')] ">
            <div className='flex flex-col items-center justify-center gap-4'>
                <BsChat className='text-gray-600 h-12 w-12' />
                <h1 className='text-2xl text-gray-600 font-bold tracking-wide text-center'>Click on any user to start a conversation </h1>
            </div>
        </div>
    )
}

export default EmptyChat