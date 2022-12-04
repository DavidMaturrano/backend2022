const { Schema, model } = require('mongoose')

const MedicSchema = new Schema({
    type: {
        type: String,
        required: true
    },
    area: {
        type: String,
        required: true
    },
    speciality: {
        type: String,
        required: true
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
    jobPosition: {
        type: String,
        required: true
    },
    workCenter: {
        type: String,
        required: true
    },
    telephone: {
        type: Number,
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

module.exports = model('Medic', MedicSchema );