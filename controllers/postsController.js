const express = require('express');
const Post = require('../models/Posts');

//mostrar posts en cards
const getPostCard = async (req,res) => {
    try {
        const posts = await Post.find({}).lean(); // Me deja un obj puro de js, anteriormente el objeto es mongo
        
        const title = 'Info Blog - Inicio'

        res.status(200).render('home',
            {
                title,
                posts,
            }
        );
    } catch (error) {
        console.error(error);
    }
};

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
        if( post === null) return res.redirect('/home')

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
};

const deletePost = async (req, res) => {
    try {
        
        await Post.findByIdAndDelete(req.params.id);
        res.redirect('/posts')

    } catch (error) {
        console.log('Error DELETE', error)
    }
};

const newPost = (req, res) => {
    res.status(200).render('new')
};

const createPost = async (req,res) => {

    try {

        const {title, body} = req.body;
        let post = new Post()
        post.title = title;
        post.body = body;

        post = await post.save();
        res.redirect(`/posts/${post.slug}`)

    } catch (error) {
        console.log('Error CREATE', error)
    }
    
};

const showEditPost = async (req,res) => {

    try {
        const post = await Post.findById(req.params.id).lean();
        res.status(200).render('edit', 
            {
                title: 'Editando post',
                post
            }
        )
    } catch (error) {
        console.log('Error EDIT', error);
    }


}

module.exports = {
    getPostCard,
    getPosts,
    showPost,
    deletePost,
    createPost,
    newPost,
    showEditPost
}