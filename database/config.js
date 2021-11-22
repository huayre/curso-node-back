const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.DB_CCN);
        console.log('successful db')
    } catch (error) {
        //handleError(error);
        console.log('error')
    }
}

module.exports = {
    dbConnection : dbConnection
}