import { cn } from '@/lib/utils';
import React from 'react'

export const Container = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return (
        <div className={cn('container lg:mx-auto h-full w-full', className)}>
            {children}
        </div>
    )
}
