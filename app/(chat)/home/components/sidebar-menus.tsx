import React from 'react'
import SidebarMenusTop from './sidebar-menu-top';
import SidebarMenusButton from './sidebar-menus-bottom';

const SidebarMenus = ({currentUser}:{currentUser: any}) => {

    return (
        <div className='col-span-1 w-full hidden lg:flex flex-col justify-between border-r border-gray-300 px-1'>
            <SidebarMenusTop />
            <SidebarMenusButton currentUser={currentUser} />
        </div>
    )
}

export default SidebarMenus
