const express= require('express');
const routerAuth = express.Router();

const { 
    getAuthSignup,
    signup, 
    getAuthSignin,
    signin, 
    logout 
} = require('../controllers/authController');

//Routes

routerAuth.get('/auth/signup', getAuthSignup);
routerAuth.post('/auth/signup', signup);

routerAuth.get('/auth/signin', getAuthSignin);
routerAuth.post('/auth/signin', signin);

routerAuth.get('/auth/logout', logout); 


module.exports = {
    routerAuth,
}