const UserModel = require('../models/customerModel');
const bcrypt = require('bcrypt');
const GenerateToken = require('../utils/TokenGeneration');

const LoginUser = async (req, res) => {
    try {
        let { Email, Password } = req.body;
        let UserExists = await UserModel.findOne({ Email: Email });

        if (!UserExists) {
            req.flash("error", "User Not Found");
            return res.redirect("/");
        }

        const isMatch = await bcrypt.compare(Password, UserExists.Password);
        
        if (isMatch) {
            let token = GenerateToken(UserExists);
            res.cookie("token", token);
            req.flash("success", "Successfully Login!");
            return res.redirect("/user/successfullylogin");
        } else {
            req.flash("error", "Email/Password not correct");
            return res.redirect("/");
        }
    } catch (err) {
        console.error("Login Error:", err);
        req.flash("error", "Something went wrong, please try again.");
        return res.redirect("/");
    }
};

module.exports = LoginUser;
