const express = require('express');
const {dbConnection} = require('./database/config.js');
require('dotenv').config()
const cors = require('cors')
const app = express();
dbConnection();
app.use(cors())
const port = 3000;

app.get('/', (req, res) => {
    res.send('hola mundo desde un contenedor ff hhh y');
});

app.listen(process.env.APP_PORT, () => {
    console.log('app funcionando en el puerto 3000');
});