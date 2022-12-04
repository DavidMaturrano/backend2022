const FoodIngredient = require('../models/Food_Ingrendient.info')
const Ingredient = require('../models/Ingredient.info')
const Food = require('../models/Food.info')


const createFoodIngredient = async (req, res) => {
    try {
        let foodingredient = new FoodIngredient(req.body)
        await foodingredient.save();

        res.json(foodingredient);

        console.log('Comida-Ingrediente creado con exito')

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}

const createIngredient = async (req, res) => {
    try {
        let ingredient = new Ingredient(req.body)
        await ingredient.save();

        res.json(ingredient);

        console.log('Ingrediente creado con exito')

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}

const createFood = async (req, res) => {
    try {
        let food = new Food(req.body)
        await food.save();

        res.json(food);

        console.log('Comida creado con exito')

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}

const getFoodIngredient = async (req, res) => {
    try {
        let ingredientFood = await FoodIngredient.find({foodID: req.params.id}).populate('ingredientID')
        /* await foodingredient.save(); */
        /* let ingredientFood = await Food.findById(req.params.id) */

        res.json(ingredientFood);

        console.log('Ingredientes obtenidos con exito')

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}

const getFood = async (req, res) => {
    try {
        /* let food = await Food.findByID(req.params.id) */
        let food = await Food.findById(req.params.id);

        res.json(food);

        console.log('Comida obtenidos con exito')

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}

const getAllFoods = async (req, res) => {
    try {
        let foods = await Food.find()
        res.json(foods);

        console.log('Comidas obtenidos con exito')

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}

module.exports = {
    createFoodIngredient: createFoodIngredient,
    createIngredient: createIngredient,
    createFood: createFood,
    getAllFoods: getAllFoods,
    getFoodIngredient: getFoodIngredient,
    getFood: getFood
}