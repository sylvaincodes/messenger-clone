import React from 'react'
import { Metadata } from 'next';
import ConversationsList from '../components/conversations-list';
import { mergeOpenGraph } from '@/lib/mergeOpenGraph';
import { cn } from '@/lib/utils';
import getConversations from '@/actions/getConversations';
import ChatFooter from '@/components/wrappers/footer/chat-footer';
import ChatHeaderTwo from '@/components/wrappers/header/chat-header-two';


export default async function Page() {
    const conversations = await getConversations()
    return (
        <>
            <ChatHeaderTwo/>
            <ConversationsList initialItems={conversations} />
            <ChatFooter/>
        </>
    )
}

export const metadata: Metadata = {
    title: "Conversations - Messenger",
    description: "Real time chat and call platform",
    icons: {
        icon: "/logo/messenger-16.png",
    },
    openGraph: mergeOpenGraph({
        title: "Conversations - Messenger",
        url: '/'
    })
};