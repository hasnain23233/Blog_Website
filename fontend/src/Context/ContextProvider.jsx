import React, { useState, useEffect } from 'react'
import axios from 'axios';

import ContextApi from './CreateContextApi'

const ContextProvider = ({ children }) => {
    const [blogs, setBlogs] = useState([]);
    const [user, setUser] = useState(null);


    // Get all blogs on load
    const fetchBlogs = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/blogs', {
                withCredentials: true,
            });
            setBlogs(res.data); // ✅ FIXED
        } catch (err) {
            console.log('Error fetching blogs:', err.response?.data?.message || err.message);
        }
    };


    const updateBlog = async (id, title, description) => {
        const res = await axios.put(`http://localhost:5000/api/blogs/${id}`, {
            title,
            description
        }, { withCredentials: true });
        const updated = blogs.map(blog => blog._id === id ? res.data.blog : blog);
        setBlogs(updated);
    };
    const fetchUser = async () => {
        try {
            const res = await axios.get('http://localhost:5000/me', { withCredentials: true });
            setUser(res.data.username);
        } catch {
            setUser(null);
        }
    };
    const login = async (email, password) => {
        const res = await axios.post('http://localhost:5000/login', { email, password }, { withCredentials: true });
        setUser(res.data.username);
        await fetchUser();
    };

    const signup = async (username, email, password) => {
        await axios.post('http://localhost:5000/signup', { username, email, password }, { withCredentials: true });
    };

    const logout = async () => {
        await axios.post('http://localhost:5000/logout', {}, { withCredentials: true });
        setUser(null);
    };

    useEffect(() => {
        fetchBlogs();
        fetchUser();
    }, []);

    // Add blog
    const createBlog = async (title, description) => {
        const res = await axios.post('http://localhost:5000/api/blogs', {
            title,
            description,
        }, { withCredentials: true });

        if (res.data.blog) {
            setBlogs((prev = []) => [...prev, res.data.blog]);

        }
    };


    return (
        <ContextApi.Provider value={{ blogs, createBlog, setBlogs, updateBlog, user, setUser, login, signup, logout }}>
            {children}
        </ContextApi.Provider>
    )
}

export default ContextProvider
