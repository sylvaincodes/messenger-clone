import { Container } from '@/components/ui/container'
import { Row } from '@/components/ui/row'
import Link from 'next/link'
import React from 'react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export const FooterTwo = () => {
    return (
        <footer className='py-4 border-t border-gray-200'>
            <Container>
                <Row className='text-center text-sm justify-between flex-wrap lg:flex-nowrap  gap-4 justify-center '>
                    <div className='flex '>
                        <span>Messenger 2024</span>
                    </div>
                    <div className='inline-flex '>
                        The Apple and Google Play logos are registered trademarks of their respective owners.
                    </div>
                    <ul className='inline-flex text-neutral-500 flex items-center gap-4 '>
                        <li>
                            <Link href="#" className='hover:text-primary' >Privacy Policy</Link>
                        </li><li>
                            <Link href="#" className='hover:text-primary' >Cookie use policy</Link>
                        </li><li>
                            <Link href="#" className='hover:text-primary' >Terms and conditions</Link>
                        </li><li>
                            <Link href="#" className='hover:text-primary' >Privacy Policy</Link>
                        </li>
                    </ul>
                    <div>
                        <Select>
                            <SelectTrigger className="w-[100px]">
                                <SelectValue placeholder="Language" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Language</SelectLabel>
                                    <SelectItem value="english">English</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </Row>
            </Container>
        </footer>
    )
}
