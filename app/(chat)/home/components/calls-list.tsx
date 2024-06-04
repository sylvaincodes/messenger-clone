import { User } from '@prisma/client'
import React from 'react'
import ContactsItem from './contacts-item'
import { getFormatData } from '@/lib/getFormatData'
import CallsItem from './calls-item'


const CallsList = ({ data }: { data: any }) => {

    const rows: any= getFormatData(data);

    return (
        <div className='mt-4 flex flex-col gap-4'>
            {
                rows.map((item: any, idx: string) => (
                    <CallsItem key={idx} data={item} />
                ))
            }
        </div>
    )
}

export default CallsList
