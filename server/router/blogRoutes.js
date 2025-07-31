const express = require('express')
const router = express.Router()
const blogController = require('../controller/BlogController')
const protected = require('./../middleware/authMiddleware')


router.get('/blogs', protected, blogController.getBlog)

router.post('/blogs', protected, blogController.postBlog)

router.delete('/blogs/:id', protected, blogController.deleteBlog)

router.put('/blogs/:id', protected, blogController.updateBlog);

module.exports = router
