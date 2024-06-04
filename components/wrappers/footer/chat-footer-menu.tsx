"use client"
import useConversation from '@/hooks/useConversations'
import useRoutes from '@/hooks/useRoutes'
import React from 'react'
import ChatFooterMenuItem from '@/components/ui/chat-footer-menu-item'

const ChatFooterMenu = () => {

    const routes = useRoutes()

    return (
        <div className='absolute w-full bottom-0 bg-white text-black p-4 border-t-[1px] lg:hidden flex items-center justify-center'>
            {
                routes.slice(0, 3).map((item, idx) => {
                    return <ChatFooterMenuItem key={idx} href={item.href} icon={item.icon} active={item.active} />
                })
            }
        </div>
    )
}

export default ChatFooterMenu