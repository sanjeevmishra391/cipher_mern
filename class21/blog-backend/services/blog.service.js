const { NotFoundError, BadRequestError } = require('../exception-handling/CustomErrors');
const Blog = require('../models/blog.model');
const BlogLike = require('../models/blog-like.model');
const BlogComment = require('../models/blog-comment.model');
const { isValidObjectId } = require('../utils/MongooseUtils');
const { getUserById } = require('./user.service');

exports.getBlogById = async (id) => {
  let blog;

  isValidObjectId(id);
  blog = await Blog.findById(id).populate({ path: 'author', select: 'username email' });
  if (!blog) {
    throw new NotFoundError('Blog not found');
  }
  
  const blogLikes = await BlogLike.find({ blogId: blog._id }).populate({path: 'userId', select: 'username email'});

  blog._doc.likes = blogLikes;

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

exports.addLikeToBlog = async (userId, blogId) => {
  const user = await getUserById(userId);
  const blog = await this.getBlogById(blogId);

  const response = await BlogLike.insertOne({ userId: user.id, blogId: blog._id });
  return response;
}