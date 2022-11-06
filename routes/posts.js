const express = require('express');
const routerPosts = express.Router();

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
routerPosts.get('/', getPostCard)
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