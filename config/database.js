require('dotenv').config();
const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI;
const dbName = '/PatientDB';

const conectarDB = async () => {
    try {
        await mongoose.connect(`${MONGODB_URI}${dbName}`, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        console.log('BD Conectada')
        
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

module.exports = {
    conectarDB: conectarDB
}