const express = require('express');
const fileUpload = require('express-fileupload');
require('dotenv').config()
const {dbConnection} = require('./database/config.js');
const cors = require('cors');
const mongoosePaginate = require('mongoose-paginate-v2');
const app = express();
dbConnection();
app.use(cors());
mongoosePaginate.paginate.options = {
    customLabels: {docs: 'data'}
}
//Lectura y parseo del body
app.use(express.json());
// app.use(fileUpload());
app.use(fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
    createParentPath : true
}));
app.use('/api/v1/user', require('./routers/users'));
app.use('/api/v1/hospital', require('./routers/hospital'));
app.use('/api/v1/medico', require('./routers/medico'))
app.use('/api/v1/auth', require('./routers/auth'));
app.use('/api/v1/upload', require('./routers/upload'));
app.get('/', (req, res) => {
    res.send('WELCOME API V1');
});

app.listen(process.env.APP_PORT, () => {
    console.log('app funcionando en el puerto : ' + process.env.APP_PORT);
});