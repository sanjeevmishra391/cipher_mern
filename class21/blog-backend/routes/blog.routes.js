const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blog.controller');
const { protectRoute } = require('../middlewares/auth.middleware');

router.post('/', protectRoute, blogController.createBlog);
router.get('/', blogController.getBlogs);
router.get('/:id', blogController.getBlogByID);
router.put('/:id', protectRoute, blogController.updateBlog);
router.delete('/:id', protectRoute, blogController.deleteBlog);
router.post('/:blogId/like', protectRoute, blogController.addLikeToBlog);

module.exports = router;
