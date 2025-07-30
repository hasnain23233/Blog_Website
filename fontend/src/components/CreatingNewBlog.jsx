import React, { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeading, faAlignLeft, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import ContextApi from '../Context/CreateContextApi'
import { useNavigate } from 'react-router-dom'

const CreatingNewBlog = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const { createBlog } = useContext(ContextApi);
    const changePath = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createBlog(title, description);
        setTitle('');
        setDescription('');
        alert('Blog Created!');
        changePath('/')
    };
    return (
        <div className='font-inter w-full max-w-2xl mx-auto mt-10 p-6 bg-gray-900 rounded-2xl shadow-lg text-white'>
            <h2 className='text-2xl font-bold mb-6 text-center'>Create New Blog</h2>

            <form className='space-y-5' method='post' onSubmit={handleSubmit}>
                {/* Title Input */}
                <div>
                    <label className='block mb-1 text-sm font-medium'>
                        <FontAwesomeIcon icon={faHeading} className="mr-2 text-blue-400" />
                        Title
                    </label>
                    <input
                        type='text'
                        name='title'
                        placeholder='Enter blog title'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
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
                        name="description"
                        placeholder='Write your blog description...'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
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
