const Medic = require('../models/Medic.info')

const createMedic = async (req, res) => {
    try {
        console.log(req.body)
        let medic = new Medic({
            "type": req.body.type,
            "area": req.body.area,
            "speciality": req.body.speciality,
            "name": req.body.name,
            "dni": req.body.dni,
            "civilState": req.body.civilState,
            "gender": req.body.gender,
            "jobPosition": req.body.jobPosition,
            "workCenter": req.body.workCenter,
            "telephone": req.body.telephone,
            "cellphone": req.body.cellphone,
            "email": req.body.email,
            "birthdate": req.body.birthdate,
            "birthplace": req.body.birthplace,
            "domicile": req.body.domicile,
            "address": req.body.address,
        });
        await medic.save();

        res.send(medic);

        console.log('Medico creado con exito')

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}

const getMedic = async (req, res) => {

    try {
        let medic = await Medic.findById(req.params.id)
        if(!medic) {
            res.status(404).json({ msg: 'El medico no existe' })
        }

        res.json(medic);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}

/* const updatePatient = async (req, res) => {

    try {
        const newData = req.body;
        console.log(newData);
        let patient = await Patient.findById(req.params.id);

        if(!patient) {
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

        patient = await Patient.findOneAndUpdate({ _id: req.params.id }, patient, { new: true} )
        res.json(patient);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
} */

/* const updatePatient = async (req, res) => {
localhost:8080/api/patient/update/1
    try {
        const newData = req.body;
        let patientMI = await PatientMI.findOne({patientID: req.params.id, isActive: true});//Añadir isActive()
        let patient = await Patient.findById(req.params.id);
        //let patientMI = await PatientMI.find({ patientID: req.params.id}); 


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
} */

/* const treatmentHistory = async (req, res) => {
    try {
        let patientMI = await PatientMI.findById(req.params.id);
        if(!treatmentHistory) {
            res.status(404).json({ msg: 'El paciente no existe' })
        }

        let patientMIHistory = [];

        treatmentHistory.forEach(element => {
            let temporal = await PatientMI.findById(element.patientMIID);
            if(temporal) {
                patientMIHistory.push(temporal);
            }
        })

        res.json(patientMIHistory);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
} */

module.exports = {
    createMedic: createMedic,
    /* getAllPatients: getAllPatients, */
    getMedic: getMedic,
    /* updatePatient: updatePatient, */
}