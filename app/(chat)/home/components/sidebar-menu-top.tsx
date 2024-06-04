"use client"
import React from 'react'
import SidebarMenusItem from './sidebar-menus-item'
import useRoutes from '@/hooks/useRoutes'

const SidebarMenusTop = () => {

    const routes = useRoutes()

    return (
        <div className='flex flex-col gap-4'>
            <ul className='flex flex-col space-y-4 pt-2'>
                {
                    routes.map((item, idx) => {
                        return <SidebarMenusItem key={idx} label={item.label}
                            href={item.href} icon={item.icon} active={item.active} />
                    })
                }
            </ul>
        </div>
    )
}

export default SidebarMenusTop
