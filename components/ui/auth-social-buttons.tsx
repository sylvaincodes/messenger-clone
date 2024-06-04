import { cn } from '@/lib/utils';
import React from 'react'
import { IconType } from 'react-icons'

export const AuthSocialButtons = ({ icon: Icon, onClick, isLoading }: { icon: IconType; onClick?: () => void; isLoading: boolean }) => {
    return (
        <button type='button'
            disabled={isLoading}
            onClick={onClick}
            className={cn('inline-flex w-full justify-center rounded-md bg-white px-4 py-4 text-gray-500 shadow-sm ring-1 ring-gray-100 hover:bg-gray-200 focus:outline-offset-0',isLoading ? 'opacity-50 cursor-default': '')}
        >
            <Icon />
        </button>
    )
}
