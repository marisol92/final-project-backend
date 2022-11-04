const express= require('express');
const routerIndex = express.Router();

const { getRootController } = require('../controllers');

routerIndex.get('/', getRootController );

module.exports = routerIndex;