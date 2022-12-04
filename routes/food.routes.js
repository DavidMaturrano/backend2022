const express = require('express');
const router = express.Router();
const foodController = require('../controllers/FoodController');

//Crea una colección intermedia Comida - Ingrediente
router.post('/createFoodIngredient', foodController.createFoodIngredient);

//Crea un ingrediente
router.post('/createIngredient', foodController.createIngredient);

//Crea una comida
router.post('/createFood', foodController.createFood);

//Obtiene una comida especifica
router.get('/getFood/:id', foodController.getFood);

//Obtiene una colección intermedia especifica
router.get('/getFoodIngredient/:id', foodController.getFoodIngredient);

//Obtiene todas las comidas
router.get('/getAllFoods', foodController.getAllFoods);

module.exports = router;