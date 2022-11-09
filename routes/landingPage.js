const express = require('express'); 
routerLanding = express.Router();
const landingPage = require('../controllers/landingController')

routerLanding.get('/', landingPage);

module.exports = {
    routerLanding,
};