const express = require("express");
const router = express.Router();
const UserModel = require("../models/customerModel");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const GenerateToken = require('../utils/TokenGeneration');
const authenticate = require('../controllers/UserAuthentication');

router.get("/", function (req, res) {
  res.send("User");
});

router.post("/register", authenticate, function(req, res){
    res.send("User created successfully!!");
});

module.exports = router;
