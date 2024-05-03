import React from 'react'
import { ClipLoader } from 'react-spinners'

export const Loader = () => {
    return (
        <div className='min-h-screen w-full bg-gray-200 flex justify-center items-center'>
            <ClipLoader color="#145265" size={50} />
        </div>
    )
}
