import React from 'react'
import Sidebar from './components/sidebar'
import ChatArea from './components/chat-area'
import { mergeOpenGraph } from '@/lib/mergeOpenGraph';
import { Metadata } from 'next';
import EmptyChat from './components/empty-chat';


export default function Page() {
    return (
        <EmptyChat/>
    )
}
export const metadata: Metadata = {
    title: "Chat - Messenger",
    description: "Real time chat and call platform",
    icons: {
        icon: "/logo/messenger-16.png",
    },
    openGraph: mergeOpenGraph({
        title: "Chat - Messenger",
        url: '/'
    })
};