const UserModel = require('../models/customerModel');

const LogoutUser = (req, res) => {

    let token = req.cookies.token;

    if (typeof(token) != 'undefined'){
        res.cookie("token", "");

        res.redirect('/login');
    }
    else{
        res.send(404).send("User not found!!");
    }
};

module.exports = LogoutUser;