const Patient = require('../models/Patient.personal.info')
const PatientMI = require('../models/Patient.medical.info')


const createPatient = async (req, res) => {
    try {
        let patient = new Patient({
            "type": req.body.type,
            "lastname": req.body.lastname,
            "name": req.body.name,
            "gender": req.body.gender,
            "cellphone": req.body.cellphone,
            "email": req.body.email,
            "birthdate": req.body.birthdate,
            "birthplace": req.body.birthplace,
            "domicile": req.body.domicile,
            "address": req.body.address,
            "civilState": req.body.civilState,
        });
        await patient.save();

        let patientMI = new PatientMI({
            "patientID": patient._id,
            "historyID": req.body.historyID,
            "illnes": req.body.illnes,
            "size": req.body.size,
            "weight": req.body.weight,
            "nroRevisions": req.body.nroRevisions,
        });
        await patientMI.save();

        res.json({
            'patient': patient,
            'patientMI': patientMI
        });

        console.log('Paciente creado con exito')

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}


const getAllPatients = async (req, res) => {
    try {
        const patients = await Patient.find();
        res.json(patients);
        console.log('Pacientes obtenidos con exito')

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}


const getPatient = async (req, res) => {

    try {
        let patientMI = await PatientMI.findOne({patientID: req.params.id, isActive: true}).populate('patientID');
        if(!patientMI) {
            res.status(404).json({ msg: 'La IM del paciente no existe' })
        }

        let temporalPMI = JSON.parse(JSON.stringify(patientMI));
        temporalPMI.patientID = patientMI.patientID._id;

        res.json({
            'patient': patientMI.patientID,
            'patientMI': temporalPMI
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}


const updatePatient = async (req, res) => {
    try {
        const newData = req.body;
        let patientMI = await PatientMI.findOne({patientID: req.params.id, isActive: true});
        let patient = await Patient.findById(req.params.id);


        if(!patientMI) {
            res.status(404).json({ msg: 'El paciente no existe' })
        }

        patient.lastname = newData.lastname;
        patient.name = newData.name;
        patient.civilState = newData.civilState;
        patient.gender = newData.gender;
        patient.cellphone = newData.cellphone;
        patient.email = newData.email;
        patient.birthdate = newData.birthdate;
        patient.birthplace = newData.birthplace;
        patient.domicile = newData.domicile;
        patient.address = newData.address;
        
        patientMI.illnes = newData.illnes;
        patientMI.size = newData.size;
        patientMI.weight = newData.weight;
        patientMI.nroRevisions = newData.nroRevisions;

        patient = await Patient.findOneAndUpdate({ _id : patient._id }, patient, { new: true} )
        console.log(patient);
        patientMI = await PatientMI.findOneAndUpdate({ _id : patientMI._id }, patientMI, { new: true} )
        res.json({
            'patient': patient,
            'patientMI': patientMI
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}

const deletePatient = async (req, res) => {
        try {
            let patientMI = await PatientMI.findOne({patientID: req.params.id, isActive: true});
    
    
            if(!patientMI) {
                res.status(404).json({ msg: 'El paciente no existe' })
            }

            patientMI.isActive = false

            patientMI = await PatientMI.findOneAndUpdate({ _id : patientMI._id }, patientMI, { new: true} )
            
            res.json({
                'patientMI': patientMI
            });
            
        } catch (error) {
            console.log(error);
            res.status(500).send('Error');
        }
    }

module.exports = {
    createPatient: createPatient,
    getAllPatients: getAllPatients,
    getPatient: getPatient,
    updatePatient: updatePatient,
    deletePatient: deletePatient
}