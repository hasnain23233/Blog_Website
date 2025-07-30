import React, { useContext } from 'react'
import ContextApi from '../Context/CreateContextApi'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash, faEye } from '@fortawesome/free-solid-svg-icons'

const Blogges = () => {
    const { blogs } = useContext(ContextApi)

    const handleEdit = (id) => {
        console.log('Edit blog:', id)
        // Add your edit logic here
    }

    const handleDelete = (id) => {
        console.log('Delete blog:', id)
        // Add your delete logic here
    }

    return (
        <>
            <div className='w-11/12 m-auto border-b border-gray-700 py-2 font-inter mt-12 text-white tracking-wider'>
                <h1 className='text-2xl font-semibold'>Your blogs</h1>
                <p className='text-gray-500 leading-loose'>Create and manage your blogs.</p>
            </div>
            <div className='w-11/12 m-auto mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {blogs.map((blog) => (
                    <div key={blog._id} className="bg-gray-800 rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow">
                        <h3 className="text-lg font-bold mb-2 text-white">{blog.title}</h3>
                        <p className="text-sm text-gray-300 mb-4">{blog.description}</p>
                        <div className="flex justify-end space-x-3">
                            <button
                                onClick={() => handleEdit(blog._id)}
                                className="text-green-400 hover:text-green-500 transition"
                                title="Edit"
                            >
                                <FontAwesomeIcon icon={faEdit} />
                            </button>
                            <button
                                onClick={() => handleDelete(blog._id)}
                                className="text-red-400 hover:text-red-500 transition"
                                title="Delete"
                            >
                                <FontAwesomeIcon icon={faTrash} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Blogges
