const express = require('express');
const { engine } = require('express-handlebars');
require('dotenv').config();

const routerIndex = require('./routes');
const { dbConnection } = require('./database/config');
const { routerDev } = require('./routes/db');
const { routerPosts } = require('./routes/posts');

//Inicializo express
const app = express();

//Conección de la db
dbConnection()

//Template engine
app.engine('hbs', engine({extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', './views');

// Middlewares
app.use(express.static('public'));
app.use(express.urlencoded({extended: false }))
app.use(express.json())



//routes
app.use('/', routerIndex);
app.use('/', routerDev);
app.use('/', routerPosts);

const PORT = process.env.PORT;
app.listen(PORT, err => {
    if(err) throw new Error(`Ocurrió un problema con el servidor: `, err)
    console.log(`Servidor express escuchando en el puerto ${PORT}`)
})