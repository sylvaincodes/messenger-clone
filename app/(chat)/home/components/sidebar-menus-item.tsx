"use client"
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

interface SidebarMenusProps {
    label: string;
    href: string;
    icon: any;
    active?: boolean;
}

const SidebarMenusItem = ({  label, icon: Icon, active, href }: SidebarMenusProps) => {

    
    const handleclick = () => {
        //Todo
    }

    return (
        <li onClick={handleclick}>
            <Link href={href} className={cn('group flex items-center justify-center rounded-md p-3 text-sm leading-6 font-semibold text-gray-500 hover:text-black hover:bg-gray-100', active && 'bg-gray-100 text-black')}>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger><Icon className="h-6 w-6 shrink-0" /></TooltipTrigger>
                        <TooltipContent className="bg-black text-gray-200">
                            {label}
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </Link>
        </li>
    )
}

export default SidebarMenusItem
