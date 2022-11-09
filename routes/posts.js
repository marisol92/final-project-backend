const express = require('express');
const routerPosts = express.Router();
const isAuthenticated = require('../middleware/isauthenticated')

const { 
    getPostCard, 
    getPosts, 
    showPost, 
    deletePost, 
    newPost, 
    createPost, 
    showEditPost 
} = require('../controllers/postsController');

//TODO: pasar a otra ruta '/home' y crear otro archivo
routerPosts.get('/home', getPostCard)
routerPosts.get('/posts', isAuthenticated, getPosts);
// TODO: ver si despues lo lo pasamos a otra ruta como /newPost (?)
routerPosts.get('/posts/new',isAuthenticated, newPost)
routerPosts.get('/posts/:slug',isAuthenticated, showPost);
routerPosts.get('/posts/edit/:id',isAuthenticated, showEditPost)

routerPosts.post('/posts', isAuthenticated, createPost)
//TODO: 1:52:54  CLASE 44
routerPosts.delete('/posts/:id',isAuthenticated, deletePost);



module.exports = {
    routerPosts,
}