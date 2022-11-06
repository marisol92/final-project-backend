const express = require('express');
const routerPosts = express.Router();

const { getPosts, showPost } = require('../controllers/postsController');

routerPosts.get('/posts', getPosts);
routerPosts.get('/posts/:slug', showPost)

module.exports = {
    routerPosts,
}