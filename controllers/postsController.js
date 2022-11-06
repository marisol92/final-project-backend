const express = require('express');
const Post = require('../models/posts');

const getPosts = async (req, res) => {

    try {
        const posts = await Post.find({}).lean(); // Me deja un obj puro de js, anteriormente el objeto es mongo
        
        const title = 'Listado de Post'

        res.status(200).render('index',
            {
                title,
                posts,
            }
        );
    } catch (error) {
        console.error(error);
    }
};

const showPost = async (req, res) => {

    

    try {
        
        const post = await Post.findOne({slug: req.params.slug}).lean();
        if( post === null) return res.redirect('/')

        res.render('show', 
            {
                title: ` InfoBlog - ${post.title}`,
                post
            } 
        )

    } catch (err) {
        console.error(err)
        res.status(404).send('La ruta no fue encontrada')
    }
}

module.exports = {
    getPosts,
    showPost,
}