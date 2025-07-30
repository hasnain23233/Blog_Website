import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeading, faAlignLeft, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const CreatingNewBlog = () => {
    return (
        <div className='font-inter w-full max-w-2xl mx-auto mt-10 p-6 bg-gray-900 rounded-2xl shadow-lg text-white'>
            <h2 className='text-2xl font-bold mb-6 text-center'>Create New Blog</h2>

            <form className='space-y-5' method='post' >
                {/* Title Input */}
                <div>
                    <label className='block mb-1 text-sm font-medium'>
                        <FontAwesomeIcon icon={faHeading} className="mr-2 text-blue-400" />
                        Title
                    </label>
                    <input
                        type='text'
                        placeholder='Enter blog title'
                        className='w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                        required
                    />
                </div>

                {/* Description Input */}
                <div>
                    <label className='block mb-1 text-sm font-medium'>
                        <FontAwesomeIcon icon={faAlignLeft} className="mr-2 text-green-400" />
                        Description
                    </label>
                    <textarea
                        rows='4'
                        placeholder='Write your blog description...'
                        className='w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500'
                        required
                    ></textarea>
                </div>

                {/* Submit Button */}
                <div className='text-center'>
                    <button
                        type='submit'
                        className='inline-flex items-center gap-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-semibold transition'
                    >
                        <FontAwesomeIcon icon={faPaperPlane} />
                        Publish Post
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CreatingNewBlog
