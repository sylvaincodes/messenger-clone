
import { cn } from '@/lib/utils';
import React from 'react'


interface ButtonProps {
    type?: 'button' | 'submit' | 'reset' | undefined;
    fullwidth?: boolean;
    children?: React.ReactNode;
    onClick?: () => void;
    secondary?: boolean;
    danger?: boolean;
    disabled?: boolean
}

export const Button = ({ type, fullwidth, children, onClick, secondary, danger, disabled }: ButtonProps) => {
    return (
        <button
            onClick={() => onclick}
            type={type}
            disabled={disabled}
            className={cn('flex justify-center rounded-md px-3 py-3 border font-semibold focus-visible:outline focus-visible:outline-offset-2 bg-primary hover:bg-neutral-200 hover:text-gray-900 rounded-full bg-indigo-500 text-xl', disabled && 'opacity-50 cursor-default ', fullwidth && 'w-full', secondary ? 'text-gray-900' : 'text-white')}
        >
            {children} 
        </button>
    )
}
