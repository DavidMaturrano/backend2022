const { Schema, model } = require('mongoose')

const IngredientSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    proteines: {
        type: Number,
        required: true,
    },
    carbohydrates: {
        type: Number,
        required: true,
    },
    lipids: {
        type: Number,
        required: true,
    }
});

module.exports = model('Ingredient', IngredientSchema );