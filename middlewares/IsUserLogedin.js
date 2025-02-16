const cookieParser = require('cookie-parser');
const UserModel = require('../models/customerModel');
const jwt = require('jsonwebtoken');

const IsUserLogedin = async(req, res, next) => {
    let token = req.cookies.token;

    if (typeof(token) != 'undefined'){

        var result = jwt.verify(token, process.env.JWT_KEY);

        let UserExists = await UserModel.findOne({Email: result.Email, _id: result.Id}).select("-Password");

        if (UserExists){
            req.user = UserExists;
            next();
        }
        else{
            res.send(404).send("User Not Found!!");
        }
    }
    else{
        res.send(404).send("User Not Login!!");
        res.redirect('/');
    }
};

module.exports = IsUserLogedin;