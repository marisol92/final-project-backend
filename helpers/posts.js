const express = require('express');
const { faker } = require('@faker-js/faker');

const generatePosts = () => {

    const post = {
        title: faker.lorem.words(3),
        body: faker.lorem.sentence(6), 
    };

    return post;
};

module.exports = {
    generatePosts,
}