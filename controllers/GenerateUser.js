const UserModel = require("../models/customerModel");
const GenerateToken = require("../utils/TokenGeneration");
const bcrypt = require("bcrypt");
const flash = require("connect-flash");

const GenerateUser = async function (req, res) {
  try {
    let { Name, Email, Password, Contact } = req.body;

    console.log(Name);

    let UserExists = await UserModel.findOne({ Email: Email });
    if (!UserExists) {
      bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(Password, salt, async function (err, hash) {
          let newUser = await UserModel.create({
            Name,
            Email,
            Password: hash,
            Contact,
          });
          let token = GenerateToken(newUser);
          res.cookie(token);
          res.render("createProduct");
        });
      });
    }
    else {
      req.flash("error", "User already exists");
      res.redirect("/");
    }
  } catch (error) {
    req.flash("error", error);
    return res.redirect("/");
  }
};

module.exports = GenerateUser;
