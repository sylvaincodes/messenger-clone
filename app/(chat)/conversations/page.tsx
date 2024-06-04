import React from 'react'
import { mergeOpenGraph } from '@/lib/mergeOpenGraph';
import { Metadata } from 'next';
import EmptyChat from '../home/components/empty-chat';


export default function Page() {
    return (
        <EmptyChat />
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