import React from 'react'
import Navbar from './components/Navbar'
import NewBlog from './mainPages/NewBlog'
import Blogges from './mainPages/Blogges'
import {
    Routes,
    Route,
    Link
} from "react-router-dom";

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
            </Routes>
        </div>
    )
}

export default FullWebsite
