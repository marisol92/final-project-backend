const express = require('express');
const slugify = require('slugify');
const { faker } = require('@faker-js/faker');

const generatePost = () => {

    const post = {
        title: faker.lorem.words(4),
        body: faker.lorem.sentence(12),
    }

    return post;

};

module.exports = {
    generatePost,
}