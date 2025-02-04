const mongoose = require('mongoose');


const ProductSchema = mongoose.Schema({
    Name: String,
    Price: Number,
    Discount: {
        type: Number,
        default: 0
    },
    BackgroundColor: String,
    PanelColor: String,
    TextColor: String,
    Picture: String
});

const ProductModel = mongoose.model("product", ProductSchema);

module.exports = ProductModel;