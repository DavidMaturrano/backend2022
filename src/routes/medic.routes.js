const express = require('express');
const router = express.Router();
const medicController = require('../controllers/MedicController');

//Obtiene a un médico especifico
router.get('/getMedic/:id', medicController.getMedic);

//Crea a un médico
router.post('/createMedic', medicController.createMedic);

module.exports = router;