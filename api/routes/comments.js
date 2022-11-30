const router = require('express').Router();

const Comment = require('../models/Comment');

// CREATE COMMENT
router.post('/', async (req, res) => {
  const newComment = new Comment(req.body);
  try {
    const saveComment = await newComment.save();
    res.status(200).json(saveComment);
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET COMMENT
router.get('/:id', async (req, res) => {
  try {
    const comment = await Comment.findById({ postId: req.params.id });
    res.status(200).json(comment);
  } catch (error) {
    res.status(500).json(error);
  }
});

// DELETE COMMENT
router.delete('/:id', async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    await comment.delete();
    res.status(200).json('comment has been delete');
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
