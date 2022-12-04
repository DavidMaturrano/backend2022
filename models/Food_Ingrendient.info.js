const { Schema, model } = require('mongoose')

const FoodIngredientSchema = new Schema({
    ingredientID:{
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Ingredient'
    },
    foodID:{
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Food'
    },
    quantity: {
        type: Number,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
});

module.exports = model('FoodIngredient', FoodIngredientSchema );