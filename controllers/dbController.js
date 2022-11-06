const express = require('express');

const { generatePosts } = require('../helpers/posts');
const Post = require('../models/Posts');

const generatePostController = async (req, res) => {
    
    try {

        const posts = await Post.deleteMany();

        for (let i = 0; i < 20; i++) {
            const newPost = generatePosts();
            const post = new Post(newPost);

            await post.save()
        };
        res.send('todo correcto')

    } catch (error) {
        console.log(error)
        res.send('todo mal!')
    }
};


module.exports = {
    generatePostController,
}