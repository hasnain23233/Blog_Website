import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBlog } from '@fortawesome/free-solid-svg-icons'
import {
    Link
} from "react-router-dom";


const NewBlog = () => {
    return (
        <div className='w-11/12 m-auto font-inter mt-12 text-white'>
            <h1 className='font-semibold text-2xl tracking-wider'>
                Build your community, create a blog.
            </h1>
            <div className='h-20 border mt-5 px-4 border-gray-700 flex gap-4 hover:border-white items-center rounded-xl w-3/12'>
                <p className='w-14 h-14 bg-[#0d2619] text-green-600 rounded-md flex items-center justify-center'>
                    <FontAwesomeIcon icon={faBlog} size='2x' />
                </p>
                <Link to="/createblog" className='font-semibold text-xl hover:border-b text-gray-300'>New Blog</Link>
            </div>
        </div>
    )
}

export default NewBlog
