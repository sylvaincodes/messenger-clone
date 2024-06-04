"use client"

import ContactsTop from './contacts-top';
import CallsList from './calls-list';


const Calls = ({ items }: { items: any }) => {

    return (
        <div className='col-span-3 p-2'>
            <div className='flex flex-col gap-4'>

                <ContactsTop title="recents calls" />
                <CallsList data={items} />

            </div>
        </div>
    )
}

export default Calls
