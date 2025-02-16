const CustomerModel = require('../models/customerModel');
const ProductModel = require('../models/productsModel');

const AddToCart = async (req, res) => {
    let customer = await CustomerModel.findOne({Email: req.user.Email});
    customer.Cart.push(req.params.productId);
    customer.save();

    let product = await ProductModel.findOne({_id: req.params.productId});

    req.flash("success", `${product.Name} added to cart, successfully`);
    return res.redirect("/shop");
}

module.exports = AddToCart;