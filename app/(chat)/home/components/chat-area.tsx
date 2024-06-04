import React, { ReactNode } from 'react'

const ChatArea = ({children}: {children:ReactNode}) => {
    return (
        <div className='col-span-3 lg:col-span-2  bg-gray-100 h-full'>
            {children}
        </div>
    )
}

export default ChatArea