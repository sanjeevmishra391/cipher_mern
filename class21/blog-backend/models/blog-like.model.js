const mongoose = require('mongoose');

const blogLikeSchema = new mongoose.Schema({
  userId: {
    type:  mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  blogId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Blog'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('BlogLike', blogLikeSchema);