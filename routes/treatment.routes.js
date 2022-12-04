const express = require('express');
const router = express.Router();
const treatmentController = require('../controllers/TreatmentController');

//Crea un tratamiento
router.post('/createTreatment', treatmentController.createTreatment);

//Obtiene todos los tratamientos
router.get('/getAllTreatments', treatmentController.getAllTreatment);

//Obtiene a un tratamiento especifico
router.get('/getTreatment/:id', treatmentController.getTreatment);

//Obtiene a un tratamiento especifico, usando el ID de un paciente
router.get('/getTreatmentByUser/:id', treatmentController.getTreatmentByUser);

//Obtiene los antecedentes de un paciente en especifico
router.get('/getAntecedents/:id', treatmentController.getAntecedents);

//Baja lógica de un tratamiento
router.put('/deleteTreatment/:id', treatmentController.deleteTreatment);

module.exports = router;