const express = require('express');
require('dotenv').config();
const methodOverride = require('method-override');
const MongoStore = require('connect-mongo');
const passport = require('passport');
const session = require('express-session');
const { engine } = require('express-handlebars');

const {
    SESSION_SECRET, DB_LOCAL_URI, PORT
  } = process.env;

const { dbConnection } = require('./database/config');
const { routerAuth } = require('./routes/auth');
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
app.use(express.urlencoded({extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(
    session({
        secret: SESSION_SECRET,
        resave: true,
        saveUninitialized: true,
        store: MongoStore.create({ mongoUrl: DB_LOCAL_URI})
    })
);
app.use(passport.initialize());
app.use(passport.session());



//routes
app.use('/', routerDev); // Solo para desarrollo
app.use('/', routerPosts);
app.use('/', routerAuth);


app.listen(PORT, err => {
    if(err) throw new Error(`Ocurrió un problema con el servidor: `, err)
    console.log(`Servidor express escuchando en el puerto ${PORT}`)
})