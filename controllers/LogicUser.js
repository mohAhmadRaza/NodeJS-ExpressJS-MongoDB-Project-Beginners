const UserModel = require('../models/customerModel');
const bcrypt = require('bcrypt');
const GenerateToken = require('../utils/TokenGeneration');

const LoginUser = async (req, res) => {

    let {Email, Password} = req.body;
    let UserExists = await UserModel.find({Email: Email});

    if (typeof(UserExists) != 'undefined'){

        bcrypt.compare(Password, UserExists.Password, function(err, result) {

            if (result == true){
                let token = GenerateToken(UserExists);

                res.cookie("token", token);
                res.render("AdminPanel");
            }
            else {
                req.flash("error", "Email/Password not correct");
                return res.redirect("/");
            }
        });
    }
    else{
        req.flash("error", "User Not Found");
        return res.redirect("/");
    }
};

module.exports = LoginUser;