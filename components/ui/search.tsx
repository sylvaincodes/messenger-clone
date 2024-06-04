import React from 'react'
import { HiSearch } from 'react-icons/hi'

const Search = () => {
    return (
        <div className='rounded-full bg-gray-200 flex items-center gap-4 p-2'>
            {/* <HiSearch size={32} className='text-gray-500' /> */}
            <input type="text" placeholder='search in messenger' className="h-full bg-transparent px-2 font-bold focus:outline-none" />
        </div>
    )
}

export default Search
