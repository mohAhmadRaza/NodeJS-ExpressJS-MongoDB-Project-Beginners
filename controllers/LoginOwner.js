const OwnerModel = require('../models/ownersModel');
const bcrypt = require('bcrypt');
const GenerateToken = require('../utils/TokenGeneration');

const LoginOwner = async (req, res) => {

    let {Email, Password} = req.body;
    let OwnerExists = await UserModel.find({Email: Email});

    if (typeof(OwnerExists) != 'undefined'){

        bcrypt.compare(Password, OwnerExists.Password, function(err, result) {

            if (result == true){
                let token = GenerateToken(OwnerExists);

                res.cookie("token", token);
                res.render("ProductPage");
            }
            else {
                req.flash("error", "Wrong Email/Password");
                return res.redirect("/");
            }
        });
    }
    else{
        req.flash("error", "Wrong Email/Password");
        return res.redirect("/");
    }
};

module.exports = LoginOwner;