const FoodHistory = require('../models/foodHistory.info')

const createRecord = async (req, res) => {
    try {
        let foodHistory = new FoodHistory(req.body);
        await foodHistory.save();
        res.send(foodHistory);
        console.log('Registro creado con exito')

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}

const getAllRecordsByPatient = async (req, res) => {
    try {
        const foodHistory = await FoodHistory.find({treatmentID: req.body.treatmentID}).populate('foodID');
        res.json(foodHistory);
        console.log('Tratamientos obtenidos con exito')

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}

module.exports = {
    createRecord: createRecord,
    getAllRecordsByPatient: getAllRecordsByPatient,
}