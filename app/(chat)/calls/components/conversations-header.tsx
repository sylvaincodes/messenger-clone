import Avatar from '@/components/ui/avatar'
import { Box, Text } from '@radix-ui/themes'
import React from 'react'
import { EllipsisVertical } from 'lucide-react';

const ConversationsHeader = () => {
    return (
        <div className='absolute top-0 right-0 w-full bg-white p-4'>
            <div className='flex justify-between items-center'>

                <div className='flex gap-4 items-center'>
                    <div>
                        <Avatar />
                    </div>
                    <div className='flex flex-col gap-4'>
                        <Box className='w-auto' height="10px">
                            <Text className='font-bold capitalize text-gray-500'>jean luc</Text>
                        </Box>
                        <Box className='w-auto' height="20px">
                            <Text className='text-gray-500 fnt-thin'>Lorem ipsum cadrio </Text>
                        </Box>
                    </div>
                </div>
            
                <div>
                    <button>
                        <EllipsisVertical />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ConversationsHeader
