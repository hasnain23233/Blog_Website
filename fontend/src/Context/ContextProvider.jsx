import React, { useState, useEffect } from 'react'
import axios from 'axios';

import ContextApi from './CreateContextApi'

const ContextProvider = ({ children }) => {
    const [blogs, setBlogs] = useState([]);

    // Get all blogs on load
    const fetchBlogs = async () => {
        const res = await axios.get('http://localhost:5000/api/blogs');
        setBlogs(res.data);
    };

    useEffect(() => {
        fetchBlogs();
    }, []);

    // Add blog
    const createBlog = async (title, description) => {
        const res = await axios.post('http://localhost:5000/api/blogs', {
            title,
            description,
        });
        setBlogs((prev) => [...prev, res.data.blog]);
    };

    return (
        <ContextApi.Provider value={{ blogs, createBlog }}>
            {children}
        </ContextApi.Provider>
    )
}

export default ContextProvider
