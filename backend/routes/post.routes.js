const express = require("express");
const postController = require("../controllers/post.controllers");

const router = express.Router();

router.get("/", postController.getPosts);
router.post("/", postController.createPost);
router.put("/:id", postController.modifyPost);
router.delete("/:id", postController.deletePost);

router.patch("/like-post/:id", postController.likePost);
router.patch("/stoplike-post/:id", postController.stopLikePost);
router.patch("/dislike-post/:id", postController.dislikePost);
router.patch("/stopdislike-post/:id", postController.stopDislikePost);

module.exports = router;
