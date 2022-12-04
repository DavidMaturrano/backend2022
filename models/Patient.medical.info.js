const { Schema, model } = require('mongoose')

const PatientMISchema = new Schema({
    patientID: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Patient'
    },
    historyID: {
        type: String,
        required: true,
        unique: true
    },
    illnes: {
        type: [String],
        required: true
    },
    size: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    nroRevisions: {
        type: Number,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
  
});

module.exports = model('PatientMI', PatientMISchema );