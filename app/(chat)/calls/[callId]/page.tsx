import React from 'react'
import { Metadata } from 'next';
import ConversationsList from '../components/conversations-list';
import ConversationsHeader from '../components/conversations-header';
import ConversationsFooter from '../components/conversations-footer';
import { mergeOpenGraph } from '@/lib/mergeOpenGraph';
import { cn } from '@/lib/utils';
import getConversations from '@/actions/getConversations';


export default async function Page() {
    const conversations = await getConversations()
    return (
        <div className={cn('w-full h-full relative')}>
            <ConversationsHeader />
            <ConversationsList initialItems={conversations} />
            <ConversationsFooter />
        </div>
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