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

module.exports = {
    getPosts,
}