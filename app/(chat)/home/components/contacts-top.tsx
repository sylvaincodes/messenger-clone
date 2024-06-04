import React from 'react'
import { MdOutlineGroupAdd } from "react-icons/md";

const ContactsTop = ({title}: {title: string}) => {
    return (
        <div className='flex items-center justify-between'>
            <h1 className='text-2xl text-gray-800 font-bold capitalize'>
                {title}
            </h1>
            <button className='rounded-full hover:bg-gray-100 p-2 flex justify-center items-center'>
                <MdOutlineGroupAdd size={32} className='text-gray-500' />
            </button>
        </div>
    )
}

export default ContactsTop
