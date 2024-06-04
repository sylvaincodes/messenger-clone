import React, { useState } from 'react'
import { MobileNav } from './mobile-nav'

export const MobileMenu = ({ menuOpen }: { menuOpen: boolean }) => {

    return (
        <MobileNav menuOpen={menuOpen}  />
    )
}
