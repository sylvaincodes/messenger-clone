import React from 'react'

export const Container = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="container mx-auto h-full w-full">
            {children}
        </div>
    )
}
