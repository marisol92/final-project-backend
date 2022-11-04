const express = require('express');
const routerDev = express.Router();
const Post = require('../models/posts.js');

const { generatePost } = require('../helpers/posts.js');

//TODO: Llevar esto a un controlador
routerDev.get('/db/fresh', async (req, res = express.response) => {

    try {
        
        const posts = await Post.deleteMany();    //find({}).count();
        //console.log(posts)

        for(let i = 0; i < 20; i++){
            const newPost = generatePost();
            const post = new Post(newPost);
            
            await post.save()
        }
    
        res.send('TODO OKEY ')
    } catch (error) {
        console.log(error)
        res.send('TODO ERROR')
        
    }
});

module.exports = {
    routerDev
}