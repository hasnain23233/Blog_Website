import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHashnode, } from '@fortawesome/free-brands-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
    return (
        <header className='h-16 flex font-inter items-center justify-between border-b border-gray-700'>
            <nav className='w-11/12 m-auto flex items-center justify-between gap-4 text-white'>
                <div className='flex w-8/12 gap-3'>
                    <div className='flex items-center gap-2 border-r w-3/12 border-gray-700'>
                        <FontAwesomeIcon icon={faHashnode} size='2x' />
                        <h1 className='font-semibold tracking-wider text-2xl'>HashNode</h1>
                    </div>
                    <div className='flex items-center gap-2  w-2/12'>
                        <FontAwesomeIcon icon={faHouse} />
                        <a href='#' className='font-semibold tracking-wider  hover:text-blue-400'>Home</a>
                    </div>
                </div>
                <div className='text-white gap-3 text-center w-4/12 flex items-center justify-end'>
                    <a href='#' className='font-semibold w-3/12 tracking-wider bg-blue-500 py-2 rounded-xl hover:bg-blue-700'>Sign</a>
                    <a href='#' className='font-semibold w-3/12 tracking-wider bg-white text-gray-700 py-2 rounded-xl hover:bg-blue-500 hover:text-white'>login</a>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
