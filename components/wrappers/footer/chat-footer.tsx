
import { cn } from '@/lib/utils'
import React from 'react'
import { Mic, Paperclip, Camera, Smile, SendHorizontal } from 'lucide-react';

const ChatFooter = () => {
    return (
        <div className={cn('w-full relative absolute right-0 bottom-0 p-4 bg-white')}>
            <div className="relative flex py-4 pe-2">
                <span className="absolute inset-y-0 left-1 flex items-center">
                    <button type="button" className="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
                        <Mic />
                    </button>
                </span>
                <input type="text" placeholder="Write your message!" className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-16 bg-gray-200 rounded-md py-5 maw-w-md" />
                <div className="absolute right-0 items-center inset-y-0 flex gap-4 px-4 ">
                    <button type="button" className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
                        <Paperclip />
                    </button>
                    <button type="button" className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
                        <Camera />
                    </button>
                    <button type="button" className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
                        <Smile />
                    </button>
                    <button type="button" className="inline-flex items-center justify-center rounded-lg px-2 py-2 transition duration-500 ease-in-out text-white bg-neutral-500 hover:bg-neutral-700 focus:outline-none">
                        <span className="font-bold me-6">Send</span>
                        <SendHorizontal />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ChatFooter
