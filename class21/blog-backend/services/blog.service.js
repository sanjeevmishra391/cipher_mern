const mongoose = require('mongoose');
const { NotFoundError, BadRequestError } = require('../exception-handling/CustomErrors');
const Blog = require('../models/blog.model');
const { isValidObjectId } = require('../utils/MongooseUtils');

exports.getBlogById = async (id) => {
  let blog;

  isValidObjectId(id);
  blog = await Blog.findById(id);

  if (!blog) {
    throw new NotFoundError('Blog not found');
  }

  return blog;
}

exports.updateBlogById = async (id, newBlogData) => {
  if (Object.keys(newBlogData).includes('author'))
    delete newBlogData.author;

  let blog = await this.getBlogById(id);

  Object.assign(blog, newBlogData);
  await Blog.updateOne(blog);

  blog = await this.getBlogById(id);

  return blog;
}

exports.deleleBlogById = async (id) => {
  isValidObjectId(id);
  const result = await Blog.findByIdAndDelete(id);
  if (result === null) {
    throw new BadRequestError('Nothing to delete');
  }
}