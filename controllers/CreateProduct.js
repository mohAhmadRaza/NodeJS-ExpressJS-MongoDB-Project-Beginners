const ProductModel = require('../models/productsModel');

const CreateProduct = async (req, res) => {

    let { Name, Price, Discount, BackgroundColor, PanelColor, TextColor } = req.body;

    if (!Name || !Price || !Discount || !BackgroundColor || !PanelColor || !TextColor){
        req.flash("error", "Missing Information");
        return res.redirect("/user/successfullylogin");
    }

    let newProduct = await ProductModel.create({
        Name,
        Price,
        Discount,
        BackgroundColor, 
        PanelColor, 
        TextColor,
        Picture: req.file.buffer
    });

    req.flash("success", "Product has been created successfully");
    return res.redirect("/user/successfullylogin");
};

module.exports = CreateProduct;