const express = require('express');
require('dotenv').config();

const app = express();

app.get('/', (req,res) => {
    res.send('Todo fino!');
});

const PORT = process.env.PORT;
app.listen(PORT, err => {
    if(err) throw new Error(`Ocurrió un problema con el servidor: `, err)
    console.log(`Servidor express escuchando en el puerto ${PORT}`)
})