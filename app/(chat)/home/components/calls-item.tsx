import Avatar from '@/components/ui/avatar'
import { User } from '@prisma/client'
import { Box, Text } from '@radix-ui/themes'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useCallback, useState } from 'react'
import { BsPhoneFill } from 'react-icons/bs'
import { HiPhone } from 'react-icons/hi'
import { MdCallEnd, MdCallMissed } from 'react-icons/md'

const CallsItem = ({ data }: { data: any }) => {


    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)

    //  start a new conversation with a user 
    const handleclick =
        useCallback(
            async () => {
                setIsLoading(true)
                await axios.post('/api/conversations', {
                    userId: data.id
                }).then((json) => {
                    router.push(`/conversations/${json.data.id}`)
                }).finally(() => {
                    setIsLoading(false)
                })
            }
            , [data, router],
        )


    const handleclickCall = useCallback(
        async () => {
            setIsLoading(true)
            await axios.post('/api/calls', {
                userId: data.id
            }).then((json) => {
                router.push(`/calls/${json.data.id}`)
            }).finally(() => {
                setIsLoading(false)
            })
        }
        , [data, router],
    )


    return (
        <div className='flex items-center hover:bg-neutral-100 px-4 py-2 cursor-pointer rounded-sm'>
            <div className='flex items-center justify-between gap-4' onClick={handleclick}>
                <div>
                    <Avatar user={data} />
                </div>
                <div className='flex flex-col gap-4'>
                    <Box className='w-auto' height="10px">
                        <Text className='font-bold capitalize text-gray-500'>Lorem ipsum cadrio </Text>
                    </Box>
                    <Box className='w-auto flex items-center gap-4' height="20px">
                        {
                            data.missedCall ?
                                <MdCallMissed className='text-red-500' />
                                :
                                <MdCallEnd className='text-green-500' />
                        }
                        <Text className='font-thin capitalize text-gray-500 text-sm'>14h16</Text>
                    </Box>
                </div>
            </div>

            <div className='ms-auto' onClick={handleclickCall}>
                <button type="button" className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
                    <HiPhone size={28} />
                </button>
            </div>

        </div>
    )
}

export default CallsItem
