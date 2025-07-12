const Blog = require('../models/blog.model');
const { getBlogById, updateBlogById, deleleBlogById } = require('../services/blog.service');
const { NotFoundError, BadRequestError } = require('../exception-handling/CustomErrors');

exports.createBlog = async (req, res) => {
  try {
    const blog = new Blog(req.body);
    const savedBlog = await blog.save();
    const populatedBlog = await Blog.findById(savedBlog._id).populate({ path: 'author', select: 'username email' });
    return res.status(201).json({ message: "Blog created", blog: populatedBlog });
  } catch (error) {
    return res.status(400).json(error);
  }
};

exports.getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 }).populate({ path: 'author', select: 'username email' });
    res.json({ message: "All the blogs", blogs });
  } catch (error) {
    return res.status(500).json(error);
  }
}

exports.getBlogByID = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await getBlogById(id);
    return res.json({ message: "Blog found", blog });
  } catch (error) {
    if (error instanceof NotFoundError) {
      return res.status(404).json(error.message);
    } else if (error instanceof BadRequestError) {
      return res.status(400).json(error.message);
    }

    return res.status(500).json(error);
  }
}

exports.updateBlog = async (req, res) => {
  try {
    const blog = await updateBlogById(req.params.id, req.body);
    return res.json({ message: "Blog updated", data: blog });
  } catch (error) {
    if (error instanceof NotFoundError) {
      return res.status(404).json(error.message);
    } else if (error instanceof BadRequestError) {
      return res.status(400).json(error.message);
    }

    return res.status(500).json(error);
  }
}

exports.deleteBlog = async (req, res) => {
  try {
    await deleleBlogById(req.params.id);
    return res.status(200).json({ message: "Blog deleted" });
  } catch (error) {
    if (error instanceof BadRequestError) {
      return res.status(400).json(error.message);
    }
    return res.status(500).json(error);
  }
}

