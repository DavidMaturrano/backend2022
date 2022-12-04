const express = require('express');
const router = express.Router();
const foodHistoryController = require('../controllers/FoodHistoryController');

//Crea un registro
router.post('/createRecord', foodHistoryController.createRecord);

//Obtiene todos los registros
router.post('/getAllRecordsByPatient', foodHistoryController.getAllRecordsByPatient);

module.exports = router;