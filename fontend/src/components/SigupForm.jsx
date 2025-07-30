import React, { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faLock, faUserPlus, faKey } from '@fortawesome/free-solid-svg-icons'
import ContextApi from '../Context/CreateContextApi'

const SignupForm = () => {
    return (
        <div className='font-inter w-full max-w-md mx-auto mt-10 p-6 bg-gray-900 rounded-2xl shadow-lg text-white'>
            <h2 className='text-2xl font-bold mb-6 text-center'>Sign Up</h2>
            <form className='space-y-5'>

                {/* Username */}
                <div>
                    <label className='block mb-1 text-sm font-medium'>
                        <FontAwesomeIcon icon={faUser} className="mr-2 text-yellow-400" />
                        Username
                    </label>
                    <input
                        type='text'
                        placeholder='Enter username'
                        className='w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500'
                        required
                    />
                </div>

                {/* Email */}
                <div>
                    <label className='block mb-1 text-sm font-medium'>
                        <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-blue-400" />
                        Email
                    </label>
                    <input
                        type='email'
                        placeholder='Enter email'
                        className='w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                        required
                    />
                </div>

                {/* Password */}
                <div>
                    <label className='block mb-1 text-sm font-medium'>
                        <FontAwesomeIcon icon={faLock} className="mr-2 text-red-400" />
                        Password
                    </label>
                    <input
                        type='password'
                        placeholder='Enter password'
                        className='w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500'
                        required
                    />
                </div>
                {/* Confirm Password */}
                <div>
                    <label className='block mb-1 text-sm font-medium'>
                        <FontAwesomeIcon icon={faKey} className="mr-2 text-purple-400" />
                        Confirm Password
                    </label>
                    <input
                        type='password'
                        placeholder='Re-enter password'
                        className='w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500'
                        required
                    />
                </div>

                <div className='text-center'>
                    <button
                        type='submit'
                        className='inline-flex items-center gap-2 px-6 py-2 bg-green-600 hover:bg-green-700 rounded-md text-white font-semibold transition'
                    >
                        <FontAwesomeIcon icon={faUserPlus} />
                        Create Account
                    </button>
                </div>
            </form>
        </div>
    )
}

export default SignupForm
