import React from 'react'
import Navbar from './components/Navbar'
import NewBlog from './mainPages/NewBlog'
import Blogges from './mainPages/Blogges'
import {
    Routes,
    Route,
    Link
} from "react-router-dom";
import CreatingNewBlog from './components/CreatingNewBlog';
import SignupForm from './components/SigupForm';
import LoginForm from './components/LoginForm';

const HomeBlog = () => {
    return (
        <>
            <NewBlog />
            <Blogges />
        </>
    )
}

const FullWebsite = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path='/' element={<HomeBlog />} />
                <Route path='/createblog' element={<CreatingNewBlog />} />
                <Route path='/sigup' element={<SignupForm />} />
                <Route path='/login' element={<LoginForm />} />
            </Routes>
        </div>
    )
}

export default FullWebsite
