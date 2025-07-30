const express = require('express')
const router = express.Router()
const blogController = require('../controller/BlogController')

router.get('/createblog', blogController.getBlog)

module.exports = router
