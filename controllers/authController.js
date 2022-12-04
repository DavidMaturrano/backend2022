const Patient = require('../models/Patient.personal.info')
const PatientMI = require('../models/Patient.medical.info')
const Medic = require('../models/Medic.info')

const authLogin = async (req, res) => {

    try{
        let patient = await Patient.findOne({email: req.body.email, dni: req.body.password})
        let medic = await Medic.findOne({email: req.body.email, dni: req.body.password})
        if(patient) {
            let patientMI = await PatientMI.findOne({patientID: patient._id, isActive: true}).populate('patientID');
            if(!patientMI) {
                res.status(404).json({ msg: 'La IM del paciente no existe' })
            }

            let temporalPMI = JSON.parse(JSON.stringify(patientMI));
            temporalPMI.patientID = patientMI.patientID._id;

            res.json({
                'patient': patientMI.patientID,
                'patientMI': temporalPMI
            });
        }
        if(medic){
            res.send(medic);
        }

        if(!patient && !medic){
            res.status(404).json({ msg: 'Correo o contraseña equivocada.' })
        }
    }catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}

module.exports = {
    authLogin: authLogin,
}