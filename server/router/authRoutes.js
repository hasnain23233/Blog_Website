const express = require('express');
const AuhoConroller = require('../controller/authController')


const router = express.Router();

// Signup
router.post('/signup', AuhoConroller.postSigup);

// Login
router.post('/login', AuhoConroller.postLogin);

// Logout
router.post('/logout', AuhoConroller.postLogout);

// Get Logged In User
router.get('/me', AuhoConroller.getMe);

module.exports = router;
