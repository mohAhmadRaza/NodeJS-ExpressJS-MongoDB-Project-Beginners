const express = require('express');
const app = express();
const router = express.Router();
const ProductModel = require('../models/productsModel');
const IsUserLogedin = require('../middlewares/IsUserLogedin');
const AddToCart = require('../controllers/AddToCart');
const CustomerModel = require('../models/customerModel');
const TotalBill = require('../utils/TotalBill');

router.get("/", function(req, res){ res.render("index"); });

router.get("/shop", IsUserLogedin, async function(req, res){
    let AllProducts = await ProductModel.find();
    res.render("shop", {AllProducts});
});

router.get("/addtocart/:productId", IsUserLogedin, AddToCart);

router.get('/cart', IsUserLogedin, TotalBill);

router.get('/removefromcart/:productId', IsUserLogedin, async function(req, res){
    let user = await CustomerModel.findOne({_id: req.user._id });

    user.Cart = user.Cart.filter(item => item.toString() != req.params.productId.toString());

    await user.save();

    res.redirect("/cart");
});

router.get("/checkoutPage", IsUserLogedin, async function(req, res){

    let user = await CustomerModel.findOne({_id: req.user._id}).populate("Cart");
    let finalPrices = user.Cart.map(function(product){
        return product.Price + 30 - product.Discount;
    });

    let totalBill = finalPrices.reduce((acc, bill) => acc+bill, 0);

    res.render("checkout", {user, finalPrices, totalBill});
});

module.exports = router;