import React from 'react'
import Navbar from './components/Navbar'
import NewBlog from './mainPages/NewBlog'
import Blogges from './mainPages/Blogges'

const FullWebsite = () => {
    return (
        <div>
            <Navbar />
            <div>
                <NewBlog />
                <Blogges />
            </div>
        </div>
    )
}

export default FullWebsite
