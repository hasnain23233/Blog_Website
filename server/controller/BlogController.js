const Blog = require('./../model/blogModel')
exports.getBlog = async (req, res, next) => {
    try {
        const blogs = await Blog.find();
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
}

exports.postBlog = async (req, res, next) => {
    try {
        const { title, description } = req.body
        console.log(req.body)
        const newBlog = new Blog({ title, description })
        await newBlog.save()
        res.status(201).json({ message: 'Blog created', blog: newBlog });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
}
