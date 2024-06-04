'use client'
import React from 'react'
import SidebarMenus from './sidebar-menus'
import Contacts from './contacts'
import MobileFooter from './mobile-footer'
import { usePathname } from 'next/navigation';
import Conversations from './conversations'
import Calls from './calls'

export default function Sidebar({ calls, contacts, conversations, currentUser }: { calls: any; contacts: any; conversations: any; currentUser: any }) {

    const path = usePathname();

    return (
        <div className='col-span-1 grid grid grid-cols-4 bg-white h-full hidden lg:grid'  >
            <SidebarMenus currentUser={currentUser} />
            {
                path === '/home' ?

                    <Contacts items={contacts} /> :
                    path === '/conversations' ?

                        <Conversations items={conversations} />
                        :
                        path === '/calls' ?
                            <Calls items={calls} /> :
                            <Contacts items={contacts} />

            }
            <MobileFooter />
        </div>
    )
}
