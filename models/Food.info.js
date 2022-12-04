const { Schema, model } = require('mongoose')

const FoodSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    ingredientSearch: {
        type: [String],
        required: true,
    },
    illnes: {
        type: [String],
        required: true,
    },
});

module.exports = model('Food', FoodSchema );