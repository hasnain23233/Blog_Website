import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashnode } from '@fortawesome/free-brands-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import ContextApi from '../Context/CreateContextApi';

const Navbar = () => {
    const { user, logout } = useContext(ContextApi);

    return (
        <header className='sm:h-16 h-24 flex font-inter items-center justify-between border-b border-gray-700'>
            <nav className='w-11/12 m-auto flex sm:flex-row flex-col items-center justify-between gap-4 text-white'>
                {/* Logo and Home */}
                <div className='flex items-center sm:justify-start justify-between xl:w-8/12 lg:w-6/12 sm:w-5/12 w-full gap-3'>
                    <div className='flex items-center  gap-2 border-r xl:w-3/12 lg:w-5/12 sm:w-7/12  border-gray-700'>
                        <FontAwesomeIcon icon={faHashnode} size='2x' />
                        <h1 className='font-semibold tracking-wider lg:text-2xl sm:text-xl text-lg'>HashNode</h1>
                    </div>
                    <div className='w-2/12 '>
                        <Link to='/' className='font-semibold flex items-center gap-2 sm:justify-start justify-between tracking-wider hover:text-blue-400'><FontAwesomeIcon icon={faHouse} /> <span className='sm:block hidden'>Home</span></Link>
                    </div>
                </div>

                {/* Auth Buttons or User Info */}
                <div className='text-white gap-3 text-center xl:w-4/12 lg:w-5/12 sm:w-7/12 w-full flex items-center sm:justify-end justify-between'>
                    {user ? (
                        <>
                            <span className='text-sm font-medium'>👋 Welcome, <span className='text-blue-400'>{user}</span></span>
                            <button
                                onClick={logout}
                                className='bg-red-500 w-3/12 tracking-wider py-2 rounded-xl hover:bg-red-700 transition'
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to='/sigup' className='font-semibold w-3/12 tracking-wider bg-blue-500 py-2 rounded-xl hover:bg-blue-700'>Sign</Link>
                            <Link to='/login' className='font-semibold w-3/12 tracking-wider bg-white text-gray-700 py-2 rounded-xl hover:bg-blue-500 hover:text-white'>Login</Link>
                        </>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
