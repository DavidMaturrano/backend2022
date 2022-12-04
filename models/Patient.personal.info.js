const { Schema, model } = require('mongoose')

const PatientSchema = new Schema({
    type: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true,
        validate: {
            validator: lastname => lastname.length > 2,
            message: "El apellido debe tener más de 2 caracteres."
        }
    },
    name: {
        type: String,
        required: true
    },
    dni:{
        type: String,
        required: true
    },
    civilState: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    cellphone: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    birthdate: {
        type: String,
        required: true
    },
    birthplace: {
        type: String,
        required: true
    },
    domicile: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
});

module.exports = model('Patient', PatientSchema );