import React from 'react'
import { Theme } from '@radix-ui/themes';
import ToasterProvider from './ToasterProvider';
import AuthProvider from './AuthProvider';


export default function Providers({ children }: { children: React.ReactNode }) {
    return (

        <AuthProvider>
            <Theme>
                <ToasterProvider />
                {children}
            </Theme>
        </AuthProvider>

    )
}
