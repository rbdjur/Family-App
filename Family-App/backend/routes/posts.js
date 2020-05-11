const express = require('express');
const router = express.Router();

const checkAuth = require('../middleware/check-auth');
const PostsController = require("../controllers/posts");

// /api/posts
router.post("", checkAuth, PostsController.createPost);
// /api/posts/:id
router.put("/:id", checkAuth, PostsController.updatePost)
router.get("", PostsController.getPosts);
// /api/posts/:id
router.get("/:id", PostsController.getPost);
// /api/posts/
router.delete("/:id", checkAuth, PostsController.deletePost);

module.exports = router;
