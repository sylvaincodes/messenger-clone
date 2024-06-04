"use client"

import Search from '@/components/ui/search'
import ContactsTop from './contacts-top';
import ContactsList from './contacts-list';

const Conversations = ({ items }: { items: any }) => {

    return (
        <div className='col-span-3 p-2'>
            <div className='flex flex-col gap-4'>

                <ContactsTop title="messages" />
                <ContactsList data={items} />

            </div>
        </div>
    )
}

export default Conversations