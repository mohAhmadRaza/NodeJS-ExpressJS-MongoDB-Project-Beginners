const express = require('express');
const app = express();
const router = express.Router();
const ProductModel = require('../models/productsModel');
const IsUserLogedin = require('../middlewares/IsUserLogedin');

router.get("/", function(req, res){ res.render("index"); });

router.get("/shop", IsUserLogedin, async function(req, res){
    let AllProducts = await ProductModel.find();

    res.render("shop", {AllProducts});
});

module.exports = router;