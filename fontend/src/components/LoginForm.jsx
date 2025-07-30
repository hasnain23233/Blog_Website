import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock, faRightToBracket } from '@fortawesome/free-solid-svg-icons'

const LoginForm = () => {
    return (
        <div className='font-inter w-full max-w-md mx-auto mt-10 p-6 bg-gray-900 rounded-2xl shadow-lg text-white'>
            <h2 className='text-2xl font-bold mb-6 text-center'>Login</h2>
            <form className='space-y-5'>

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

                <div className='text-center'>
                    <button
                        type='submit'
                        className='inline-flex items-center gap-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-semibold transition'
                    >
                        <FontAwesomeIcon icon={faRightToBracket} />
                        Login
                    </button>
                </div>
            </form>
        </div>
    )
}

export default LoginForm
