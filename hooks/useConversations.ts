"use client"
import { useParams } from 'next/navigation'
import { useMemo } from 'react';

const useConversation = () => {

    const params = useParams();
    const getConverId = (value: any) => {
        if (value) {
            return ''
        }
    }

    const conversationId = useMemo(() => getConverId(params?.conversationId)
        , [params?.conversationId])
    const isOpen = useMemo(() => !!conversationId, [conversationId])

    return useMemo(() => ({
        isOpen, conversationId
    }), [isOpen, conversationId])
}

export default useConversation;
