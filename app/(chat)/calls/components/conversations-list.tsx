'use client'

import useConversation from '@/hooks/useConversations'
import { FullConversationType } from '@/types'
import React, { useState } from 'react'

const ConversationsList = ({ initialItems }: { initialItems: FullConversationType[] }) => {

    const [items,setItems] = useState(initialItems)
    const  { conversationId, isOpen  } = useConversation()

    return (
        <div className="h-full overflow-auto flex  w-full h-full bg-[url('/images/bg-home.jpg')]">
            LIST
        </div>
    )
}

export default ConversationsList
