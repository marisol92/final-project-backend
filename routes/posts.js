const express = require('express');
const routerPosts = express.Router();

const Post = require('../models/posts');

routerPosts.get('/posts', async(req, res) => {

    try {
        const posts = await Post.find({});

        res.render('get',
            {
                title,
                posts,
            }
        );
    } catch (error) {
        console.error(error);
    }
});


module.exports = {
    routerPosts,
}