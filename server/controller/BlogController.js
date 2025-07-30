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
        const newBlog = new Blog({ title, description })
        await newBlog.save()
        res.status(201).json({ message: 'Blog created', blog: newBlog });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

exports.deleteBlog = async (req, res) => {

    try {
        const blog = await Blog.findByIdAndDelete(req.params.id)
        if (!blog) return res.status(404).json({ message: 'Blog not found' })
        res.status(200).json({ message: 'Blog deleted successfully' })
    } catch (error) {
        res.status(500).json({ message: 'Server error', error })
    }
}