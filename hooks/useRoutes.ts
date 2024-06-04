"use client"
import { usePathname } from 'next/navigation'
import { useMemo } from 'react'
import useConversation from './useConversations'
import { HiChat, HiUsers, HiArrowLeft, HiArchive } from 'react-icons/hi'
import { IoChatbubble } from 'react-icons/io5'
import { AiFillPhone } from "react-icons/ai";

const useRoutes = () => {
    const pathname = usePathname()
    const { conversationId } = useConversation()

    const routes = useMemo(() => [
        {
            label: 'Chat',
            href: '/conversations',
            icon: IoChatbubble,
            active: pathname === '/conversations' || !!conversationId
        }, {
            label: 'Contacts',
            href: '/home',
            icon: HiUsers,
            active: pathname === '/home'
        }, {
            label: 'Call',
            href: '/calls',
            icon: AiFillPhone,
            active: pathname === '/calls'
        }
    ], [pathname, conversationId])

    return routes;
}

export default useRoutes;