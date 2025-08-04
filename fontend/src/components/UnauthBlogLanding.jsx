import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBlog, faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import download from './../assets/download.png'
import { Link } from 'react-router-dom';
const UnauthBlogLanding = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 flex items-center justify-center px-6 py-12 text-white">
            <motion.div
                className="bg-white/10 border border-white/20 backdrop-blur-lg shadow-xl rounded-3xl p-10 max-w-4xl w-full flex flex-col lg:flex-row items-center gap-10"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
            >
                {/* 🖼️ Online Animated Illustration */}
                <motion.img
                    src={download}
                    alt="Animated Blog"
                    className="w-60 lg:w-5/12"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 1 }}
                />

                {/* ✍️ Text & Buttons */}
                <div className="text-center lg:text-left space-y-6">
                    <FontAwesomeIcon icon={faBlog} className="text-5xl text-white bg-gray-800 p-4 rounded-full shadow-lg mx-auto lg:mx-0" />

                    <h1 className="text-4xl font-bold">Welcome to Hasoo's Blog</h1>
                    <p className="text-gray-300 text-lg">
                        Discover stories, thoughts & insights — but first, please login or sign up to start reading or writing.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <Link to={'/login'} className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 transition text-white font-semibold rounded-xl w-full sm:w-auto">
                            <FontAwesomeIcon icon={faSignInAlt} />
                            Login
                        </Link>

                        <Link to={'/sigup'} className="flex items-center justify-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 transition text-white font-semibold rounded-xl w-full sm:w-auto">
                            <FontAwesomeIcon icon={faUserPlus} />
                            Sign Up
                        </Link>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default UnauthBlogLanding;
