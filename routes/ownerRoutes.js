const express = require("express");
const OwnerModel = require("../models/ownersModel");
const router = express.Router();
const RegisterOwner = require('../controllers/RegisterOwner');
const LoginOwner = require('../controllers/LoginOwner');
const multer  = require('multer');


if (process.env.CURRENT_STATE == "development"){
  router.post("/signup", RegisterOwner);
}

router.post('/login', LoginOwner);

router.get("/addproducts", function(req, res){
  

})

module.exports = router;
