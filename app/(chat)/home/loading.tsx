import { Loader } from '@/components/ui/loader'
import React from 'react'

export default function Loading() {
    return (
        // <div className='grid grid-cols-3 h-full relative shadow-xl shadow-black'>
        //     <div className='col-span-1 grid grid-cols-[auto_auto] bg-white h-full'  >
        //         <div className='w-fit hidden lg:flex flex-col justify-between border-r border-gray-300 px-1'>
        //             <div className='flex flex-col gap-4'>
        //                 <ul className='flex flex-col space-y-1 pt-2'>
        //                     <li>
        //                         <div className={cn('group flex gap-3 rounded-md p-3 text-sm leading-6 font-semibold text-gray-500 hover:text-black hover:bg-gray-100')}>
        //                             <Skeleton className="h-10 w-10 shrink-0">
        //                             </Skeleton>
        //                         </div>
        //                     </li><li>
        //                         <div className={cn('group flex gap-3 rounded-md p-3 text-sm leading-6 font-semibold text-gray-500 hover:text-black hover:bg-gray-100')}>
        //                             <Skeleton className="h-10 w-10 shrink-0">
        //                             </Skeleton>
        //                         </div>
        //                     </li><li>
        //                         <div className={cn('group flex gap-3 rounded-md p-3 text-sm leading-6 font-semibold text-gray-500 hover:text-black hover:bg-gray-100')}>
        //                             <Skeleton className="h-10 w-10 shrink-0">
        //                             </Skeleton>
        //                         </div>
        //                     </li><li>
        //                         <div className={cn('group flex gap-3 rounded-md p-3 text-sm leading-6 font-semibold text-gray-500 hover:text-black hover:bg-gray-100')}>
        //                             <Skeleton className="h-10 w-10 shrink-0">
        //                             </Skeleton>
        //                         </div>
        //                     </li>
        //                 </ul>
        //                 <hr />
        //             </div>
        //             <div className="mb-4 flex flex-col gap-4 items-center">
        //                 <Skeleton className='rounded-full h-10 w-10'>
        //                 </Skeleton>
        //             </div>
        //         </div>
        //         <div className='py-4 px-2'>
        //             <div className='flex flex-col gap-4'>
        //                 <Skeleton width="200px" height="10px">
        //                     conversations title here
        //                 </Skeleton>
        //                 <Skeleton className='rounded-full' width="200px" height="40px">searching</Skeleton>


        //                 <div className='mt-4 flex flex-col gap-6'>
        //                     <div className='flex gap-4'>
        //                         <Skeleton className='rounded-full h-10 w-10'>profil</Skeleton>
        //                         <div className='flex flex-col gap-2'>
        //                             <Skeleton className='w-auto' height="10px">
        //                                 <Text>Lorem ipsum cadrio </Text>
        //                             </Skeleton>
        //                             <Skeleton className='w-auto' height="20px">
        //                                 <Text>Lorem ipsum cadrio </Text>
        //                             </Skeleton>
        //                         </div>
        //                     </div><div className='flex gap-4'>
        //                         <Skeleton className='rounded-full h-10 w-10'>profil</Skeleton>
        //                         <div className='flex flex-col gap-2'>
        //                             <Skeleton className='w-auto' height="10px">
        //                                 <Text>Lorem ipsum cadrio </Text>
        //                             </Skeleton>
        //                             <Skeleton className='w-auto' height="20px">
        //                                 <Text>Lorem ipsum cadrio </Text>
        //                             </Skeleton>
        //                         </div>
        //                     </div><div className='flex gap-4'>
        //                         <Skeleton className='rounded-full h-10 w-10'>profil</Skeleton>
        //                         <div className='flex flex-col gap-2'>
        //                             <Skeleton className='w-auto' height="10px">
        //                                 <Text>Lorem ipsum cadrio </Text>
        //                             </Skeleton>
        //                             <Skeleton className='w-auto' height="20px">
        //                                 <Text>Lorem ipsum cadrio </Text>
        //                             </Skeleton>
        //                         </div>
        //                     </div><div className='flex gap-4'>
        //                         <Skeleton className='rounded-full h-10 w-10'>profil</Skeleton>
        //                         <div className='flex flex-col gap-2'>
        //                             <Skeleton className='w-auto' height="10px">
        //                                 <Text>Lorem ipsum cadrio </Text>
        //                             </Skeleton>
        //                             <Skeleton className='w-auto' height="20px">
        //                                 <Text>Lorem ipsum cadrio </Text>
        //                             </Skeleton>
        //                         </div>
        //                     </div><div className='flex gap-4'>
        //                         <Skeleton className='rounded-full h-10 w-10'>profil</Skeleton>
        //                         <div className='flex flex-col gap-2'>
        //                             <Skeleton className='w-auto' height="10px">
        //                                 <Text>Lorem ipsum cadrio </Text>
        //                             </Skeleton>
        //                             <Skeleton className='w-auto' height="20px">
        //                                 <Text>Lorem ipsum cadrio </Text>
        //                             </Skeleton>
        //                         </div>
        //                     </div><div className='flex gap-4'>
        //                         <Skeleton className='rounded-full h-10 w-10'>profil</Skeleton>
        //                         <div className='flex flex-col gap-2'>
        //                             <Skeleton className='w-auto' height="10px">
        //                                 <Text>Lorem ipsum cadrio </Text>
        //                             </Skeleton>
        //                             <Skeleton className='w-auto' height="20px">
        //                                 <Text>Lorem ipsum cadrio </Text>
        //                             </Skeleton>
        //                         </div>
        //                     </div><div className='flex gap-4'>
        //                         <Skeleton className='rounded-full h-10 w-10'>profil</Skeleton>
        //                         <div className='flex flex-col gap-2'>
        //                             <Skeleton className='w-auto' height="10px">
        //                                 <Text>Lorem ipsum cadrio </Text>
        //                             </Skeleton>
        //                             <Skeleton className='w-auto' height="20px">
        //                                 <Text>Lorem ipsum cadrio </Text>
        //                             </Skeleton>
        //                         </div>
        //                     </div><div className='flex gap-4'>
        //                         <Skeleton className='rounded-full h-10 w-10'>profil</Skeleton>
        //                         <div className='flex flex-col gap-2'>
        //                             <Skeleton className='w-auto' height="10px">
        //                                 <Text>Lorem ipsum cadrio </Text>
        //                             </Skeleton>
        //                             <Skeleton className='w-auto' height="20px">
        //                                 <Text>Lorem ipsum cadrio </Text>
        //                             </Skeleton>
        //                         </div>
        //                     </div><div className='flex gap-4'>
        //                         <Skeleton className='rounded-full h-10 w-10'>profil</Skeleton>
        //                         <div className='flex flex-col gap-2'>
        //                             <Skeleton className='w-auto' height="10px">
        //                                 <Text>Lorem ipsum cadrio </Text>
        //                             </Skeleton>
        //                             <Skeleton className='w-auto' height="20px">
        //                                 <Text>Lorem ipsum cadrio </Text>
        //                             </Skeleton>
        //                         </div>
        //                     </div>
        //                 </div>


        //             </div>
        //         </div>
        //     </div>
        //     <div className='col-span-2 bg-gray-100 h-full'>
        //     </div>
        // </div>
        <Loader />
    )
}
