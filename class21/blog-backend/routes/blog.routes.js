const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blog.controller');

router.post('/', blogController.createBlog);
router.get('/', blogController.getBlogs);
router.get('/:id', blogController.getBlogByID);
router.put('/:id', blogController.updateBlog);
router.delete('/:id', blogController.deleteBlog);

module.exports = router;
