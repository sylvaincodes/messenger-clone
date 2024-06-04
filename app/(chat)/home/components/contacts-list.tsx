import { User } from '@prisma/client'
import React from 'react'
import ContactsItem from './contacts-item'
import { getFormatData } from '@/lib/getFormatData'


const ContactsList = ({ data }: { data: any }) => {

    const rows: any= getFormatData(data);

    return (
        <div className='mt-4 flex flex-col gap-4'>
            {
                rows.map((item: any, idx: string) => (
                    <ContactsItem key={idx} data={item} />
                ))
            }
        </div>
    )
}

export default ContactsList
