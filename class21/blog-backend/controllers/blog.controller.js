const mongoose = require('mongoose');
const Blog = require('../models/blog.model');

exports.createBlog = async (req, res) => {
  try {
    const blog = new Blog(req.body);
    await blog.save();
    return res.status(201).json({ message: "Blog created", blog });
  } catch (error) {
    return res.status(400).json(error);
  }
};

exports.getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json({ message: "All the blogs", blogs });
  } catch (error) {
    return res.status(500).json(error);
  }
}

exports.getBlogByID = async (req, res) => {
  try {
    const { id } = req.params;
    let blog;

    if (mongoose.Types.ObjectId.isValid(id)) {
      blog = await Blog.findById(id);
    } else {
      return res.status(400).json({ error: "Invalid blog id" });
    }

    if (!blog) {
      return res.status(404).json({ message: "No blog found for id " + id });
    }

    return res.json({ message: "Blog found", blog });
  } catch (error) {
    return res.status(500).json(error);
  }
}

