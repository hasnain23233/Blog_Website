const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../model/userModel');


exports.postSigup = async (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();
        res.status(201).json({ message: 'User created' });
    } catch (err) {
        res.status(500).json({ error: 'Email or username already exists' });
    }
};

exports.postLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user exists
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return res.status(404).json({ message: "User not found" });
        }

        // Compare password
        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordCorrect) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        // Generate JWT token
        const token = jwt.sign(
            { id: existingUser._id },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        // Send token as cookie
        res.cookie('token', token, {
            httpOnly: true,
            secure: false, // use true in production with HTTPS
            sameSite: 'Lax',
            maxAge: 24 * 60 * 60 * 1000,
        });

        res.status(200).json({ message: "Login successful", user: existingUser });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};

exports.postLogout = (req, res) => {
    res.clearCookie('token');
    res.json({ message: 'Logged out' });
};

exports.getMe = async (req, res) => {
    try {
        const token = req.cookies.token;
        if (!token) return res.status(401).json({ message: 'Unauthorized' });

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findById(decoded.id).select('username email');
        if (!user) return res.status(404).json({ message: 'User not found' });

        res.json({ username: user.username }); // or full user
    } catch (err) {
        res.status(401).json({ message: 'Invalid token' });
    }
};

