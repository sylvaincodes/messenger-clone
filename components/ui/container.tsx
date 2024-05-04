import React from 'react'

export const Container = ({ children,className }: { children: React.ReactNode; className?: string }) => {
    return (
        <div className="container mx-auto h-full w-full">
            {children}
        </div>
    )
}
