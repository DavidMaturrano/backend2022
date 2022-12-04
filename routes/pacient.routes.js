const express = require('express');
const router = express.Router();
const patientController = require('../controllers/PatientController');

//Crea un paciente
router.post('/createPatient', patientController.createPatient);

//Obtiene a todos los pacientes
router.get('/getAllPatients', patientController.getAllPatients);

//Obtiene a un paciente especifico
router.get('/getPatient/:id', patientController.getPatient);

//Actualiza la información de un paciente
router.put('/upddatePatient/:id', patientController.updatePatient);

//Baja lógica de un paciente
router.put('/deletePatient/:id', patientController.deletePatient);

module.exports = router;