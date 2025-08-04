// components/EditBlogModal.jsx
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faAlignLeft } from '@fortawesome/free-solid-svg-icons'

const EditBlogModal = ({ isOpen, onClose, blogData, onChange, onSubmit }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
            <div className="bg-gray-700 rounded-xl lg:w-6/12 sm:w-8/12 w-11/12 p-6 shadow-lg relative">
                <h2 className="text-xl font-bold text-gray-200 mb-4">Edit Blog</h2>
                <form onSubmit={onSubmit} className="space-y-4 ">
                    <div className="flex items-center border-b bg-gray-600 border-gray-300 rounded-lg focus-within:border-blue-500">
                        <FontAwesomeIcon icon={faPen} className="text-gray-400 ml-2" />
                        <input
                            type="text"
                            name="title"
                            value={blogData.title}
                            onChange={onChange}
                            className="w-full px-3 py-2 focus:outline-none bg-transparent text-white"
                            placeholder="Title"
                            required
                        />
                    </div>

                    <div className="flex items-start border-b border-gray-300 rounded-lg bg-gray-600 focus-within:border-blue-500">
                        <FontAwesomeIcon icon={faAlignLeft} className="text-gray-400 ml-2 mt-2" />
                        <textarea
                            name="description"
                            value={blogData.description}
                            onChange={onChange}
                            className="w-full px-3 py-2 focus:outline-none resize-none bg-transparent text-white"
                            rows={3}
                            placeholder="Description"
                            required
                        ></textarea>
                    </div>

                    <div className="flex justify-end gap-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                        >
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditBlogModal
