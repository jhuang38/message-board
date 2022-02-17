const Post = require('./postModel');
const express = require('express');

// set up express.Router
const router = express.Router();

// set up schema and model for database documents
router.post('/api/newPost', (req, res) => {
    const newPost = new Post(req.body);
    newPost.save((err) => {
        if (err) { console.error(err)};
    });
})

router.get('/api/posts', async (req, res) => {
    const data = await Post.find().sort({'date': -1});
    res.json(data);
})

module.exports = router;