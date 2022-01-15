const express = require('express');
require('dotenv').config()
const {dbConnection} = require('./database/config.js');
const cors = require('cors')
const app = express();
dbConnection();
app.use(cors());
//Lectura y parseo del body
app.use(express.json());

app.use('/api/v1/user', require('./routers/users'));
app.use('/api/v1/auth', require('./routers/auth'));
app.get('/', (req, res) => {
    res.send('WELCOME API V1');
});

app.listen(process.env.APP_PORT, () => {
    console.log('app funcionando en el puerto : ' + process.env.APP_PORT);
});