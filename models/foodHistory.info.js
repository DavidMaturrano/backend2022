const { Schema, model } = require('mongoose')

const FoodHistorySchema = new Schema({
    patientID: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Patient'
    },
    foodID: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Food'
    },
    treatmentID: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Treatment'
    },
    fecha: {
        type: String,
        required: true,
    },
});

module.exports = model('FoodHistory', FoodHistorySchema );