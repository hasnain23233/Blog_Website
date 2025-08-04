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
import ContextApi from './Context/CreateContextApi';
import UnauthBlogLanding from './components/UnauthBlogLanding';
import { useContext } from 'react';

const HomeBlog = () => {
    const { user } = useContext(ContextApi)
    return (
        <>
            {!user ? <UnauthBlogLanding /> : <div><NewBlog />
                <Blogges /></div>}
        </>
    )
}

const FullWebsite = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path='/' element={<HomeBlog />} />
                <Route path='/blogs' element={<CreatingNewBlog />} />
                <Route path='/sigup' element={<SignupForm />} />
                <Route path='/login' element={<LoginForm />} />
            </Routes>
        </div>
    )
}

export default FullWebsite
