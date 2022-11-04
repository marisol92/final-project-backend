const express= require('express');
const routerDev = express.Router();

const { generatePostController } = require('../controllers/dbController');

routerDev.get('/db/fresh', generatePostController);


module.exports = {
    routerDev,
}