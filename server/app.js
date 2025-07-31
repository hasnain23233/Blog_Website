const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const cookieParser = require('cookie-parser')

const blogRouter = require('./router/blogRoutes');
const authRouter = require('./router/authRoutes')

const app = express();


app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));
app.use(express.json()); // 👈 very important
app.use(cookieParser());

app.use(authRouter)
app.use('/api', blogRouter); // base path optional but cleaner

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log('Connected to DB');
        app.listen(5000, () => console.log('Server running on port 5000'));
    })
    .catch((error) => {
        console.error('DB connection error:', error.message);
    });
