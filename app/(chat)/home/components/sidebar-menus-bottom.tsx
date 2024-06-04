import Placeholder from '@/components/ui/placeholder'
import React from 'react'

const SidebarMenusButton = ({currentUser}: {currentUser: any}) => {
    return (
        <div className="mb-4 flex flex-col gap-4 items-center">
            <Placeholder user={currentUser} />
        </div>
    )
}

export default SidebarMenusButton
