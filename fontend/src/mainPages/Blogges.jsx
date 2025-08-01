import React, { useContext, useState } from 'react'
import ContextApi from '../Context/CreateContextApi'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import EditBlogModal from '../components/EditBlogModal'

const Blogges = () => {
    const { blogs, setBlogs, updateBlog } = useContext(ContextApi)
    const [isEditOpen, setIsEditOpen] = useState(false)
    const [currentBlog, setCurrentBlog] = useState({ _id: '', title: '', description: '' })

    const openEditModal = (blog) => {
        setCurrentBlog(blog)
        setIsEditOpen(true)
    }

    const closeEditModal = () => {
        setCurrentBlog({ _id: '', title: '', description: '' })
        setIsEditOpen(false)
    }

    const handleEditChange = (e) => {
        setCurrentBlog({ ...currentBlog, [e.target.name]: e.target.value })
    }

    const handleEditSubmit = async (e) => {
        e.preventDefault()
        await updateBlog(currentBlog._id, currentBlog.title, currentBlog.description)
        closeEditModal()
    }

    const handleDelete = async (id) => {
        try {
            const res = await fetch(`http://localhost:5000/api/blogs/${id}`, {
                method: 'DELETE',
                credentials: 'include', // ✅ Add this to send the cookie token
            });

            if (res.ok) {
                const updated = blogs.filter(blog => blog._id !== id);
                setBlogs(updated);
            } else {
                alert('Failed to delete blog.');
            }
        } catch (err) {
            alert('Server error.');
        }
    };


    return (
        <>
            <div className='w-11/12 m-auto border-b border-gray-700 py-2 font-inter mt-12 text-white tracking-wider'>
                <h1 className='text-2xl font-semibold'>Your blogs</h1>
                <p className='text-gray-500 leading-loose'>Create and manage your blogs.</p>
            </div>

            <div className='w-11/12 m-auto mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {blogs && blogs.length > 0 ? (
                    blogs.map((blog) => (
                        <div key={blog._id} className="bg-gray-800 rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow">
                            <h3 className="text-lg font-bold mb-2 text-white">{blog.title}</h3>
                            <p className="text-sm text-gray-300 mb-4">{blog.description}</p>
                            <div className="flex justify-end space-x-3">
                                <button
                                    onClick={() => openEditModal(blog)}
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
                    ))
                ) : (
                    <p className="text-gray-400 col-span-3 text-center">No blogs available.</p>
                )}

            </div>

            <EditBlogModal
                isOpen={isEditOpen}
                onClose={closeEditModal}
                blogData={currentBlog}
                onChange={handleEditChange}
                onSubmit={handleEditSubmit}
            />
        </>
    )
}

export default Blogges
