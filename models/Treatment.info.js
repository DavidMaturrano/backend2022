const { Schema, model } = require('mongoose')

const TreatmentSchema = new Schema({
    medicID: {
        type: Schema.Types.ObjectId,
        required: true
    },
    patientID: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Patient'
    },
    patientMIID: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'PatientMI'
    },
    isActive: {
        type: Boolean,
        default: true,
        ref: 'Medic'
    },
});

module.exports = model('Treatment', TreatmentSchema );