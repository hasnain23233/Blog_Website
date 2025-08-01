const Blog = require('./../model/blogModel')

exports.getBlog = async (req, res, next) => {
    try {
        const blogs = await Blog.find({ user: req.user.id }); // 👈 only current user's blogs
        console.log('Fetching blogs for:', req.user.id);
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};


exports.postBlog = async (req, res, next) => {
    try {
        const { title, description } = req.body;

        // Debug log
        console.log('Current User ID:', req.user.id); // 👈 Check this!

        const newBlog = new Blog({
            title,
            description,
            user: req.user.id // ✅ Save the user who posted
        });

        await newBlog.save();
        res.status(201).json({ message: 'Blog created', blog: newBlog });
    } catch (error) {
        console.error('❌ Error saving blog:', error.message);
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

exports.updateBlog = async (req, res) => {
    try {
        const { title, description } = req.body;
        const updatedBlog = await Blog.findByIdAndUpdate(
            req.params.id,
            { title, description },
            { new: true }
        );
        if (!updatedBlog) return res.status(404).json({ message: 'Blog not found' });
        res.status(200).json({ message: 'Blog updated successfully', blog: updatedBlog });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};
