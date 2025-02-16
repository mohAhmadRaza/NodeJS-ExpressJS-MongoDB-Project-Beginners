const express = require("express");
const router = express.Router();
const GenerateUser = require('../controllers/GenerateUser');
const LoginUser = require('../controllers/LogicUser');
const IsUserLogedin = require('../middlewares/IsUserLogedin');
const LogoutUser = require('../controllers/LogoutUser');
const ProductModel = require('../models/productsModel');

router.get("/", function(req, res) {res.send("User");});

router.post("/signup", GenerateUser);
router.get("/successfullylogin", async function(req, res) {
    // let AllProducts = await ProductModel.find();

    // res.render("shop", {AllProducts});
    res.render("createProduct");
});

router.post("/login", LoginUser);
router.get("/logout",IsUserLogedin, LogoutUser);

module.exports = router;
