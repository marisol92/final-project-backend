const express = require('express');
const routerPosts = express.Router();

const { getPosts } = require('../controllers/postsController');

routerPosts.get('/posts', getPosts);


module.exports = {
    routerPosts,
}