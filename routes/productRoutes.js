const express = require('express');
const router = express.Router();
const ProductModel = require('../models/productsModel');
const upload = require('../config/multer-config');

router.get('/', upload.single('Image'), async function(req, res){
    let { Name, Price, Discount, BackgroundColor, PanelColor, TextColor } = req.body;

    let newProduct = await ProductModel.create({
        Name,
        Price,
        Discount,
        BackgroundColor, 
        PanelColor, 
        TextColor,
        Image: req.file.buffer
    });
});

module.exports = router;
