const express = require('express');
const routerPosts = express.Router();

const { getPosts, showPost, deletePost, newPost, createPost, showEditPost } = require('../controllers/postsController');

routerPosts.get('/posts', getPosts);
// TODO: ver si despues lo lo pasamos a otra ruta como /newPost (?)
routerPosts.get('/posts/new', newPost)
routerPosts.get('/posts/:slug', showPost);
routerPosts.get('/posts/edit/:id', showEditPost)

routerPosts.post('/posts', createPost)

routerPosts.delete('/posts/:id', deletePost);



module.exports = {
    routerPosts,
}