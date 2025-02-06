const UserModel = require('../models/customerModel');
const GenerateToken = require('../utils/TokenGeneration');
const bcrypt = require('bcrypt');
const flash = require('connect-flash');

const GenerateUser = function (req, res) {
    try {

      let { Name, Email, Password, Contact } = req.body;

      console.log(Name);
      bcrypt.genSalt(10, function(err, salt) {
          bcrypt.hash(Password, salt, async function(err, hash) {
              let newUser = await UserModel.create({
                  Name,
                  Email,
                  hash,
                  Contact,
                }); 
              let token = GenerateToken(newUser);
              res.cookie.send(token);
          });
      });
  
      res.send(newUser);
    } catch (error) {
      req.flash("error", error);
      return res.redirect("/");
    }
};

module.exports = GenerateUser;