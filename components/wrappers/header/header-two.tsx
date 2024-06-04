"use client"
import { ButtonGroup } from '@/components/ui/button-group'
import { Container } from '@/components/ui/container'
import { Logo } from '@/components/ui/logo'
import { MainNav } from '@/components/ui/main-nav'
import { MobileMenu } from '@/components/ui/mobile-menu'
import { Row } from '@/components/ui/row'
import React, { useState } from 'react'

export const HeaderTwo = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header>
      <Container>
        <Row className='py-8 h-full justify-between relative w-full z-50'>
          <Logo />
          <MainNav />
          <ButtonGroup menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </Row>
      </Container>
      <MobileMenu menuOpen={menuOpen} />
    </header>
  )
}
