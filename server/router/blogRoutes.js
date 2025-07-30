const express = require('express')
const router = express.Router()
const blogController = require('../controller/BlogController')

router.get('/blogs', blogController.getBlog)

router.post('/blogs', blogController.postBlog)

router.delete('/blogs/:id', blogController.deleteBlog)

module.exports = router
