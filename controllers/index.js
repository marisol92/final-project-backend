const {response} = require('express');
const { generatePosts } = require('../helpers/posts');
const { statusModel } = require('../models')

const getRootController = (req,res = response) => {
    generatePosts();
    res.status(200).send(statusModel)
};

module.exports = {
    getRootController,
}