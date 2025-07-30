const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()

const mongolink = process.env.MONGO_URL
const blogRouter = require('./router/blogRoutes')

app.use(blogRouter)

mongoose.connect(mongolink).then(() => {
    console.log('Connected to the database')
    app.listen(5000, () => console.log('Server running on port 5000'))
}).catch((error) => {
    console.log('Sorry, we can’t connect to the database:', error.message)
})
