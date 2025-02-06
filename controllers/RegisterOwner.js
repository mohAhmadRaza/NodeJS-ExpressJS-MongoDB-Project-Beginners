const OwnerModel = require('../models/ownersModel');
const flash = require('connect-flash');
const bcrypt = require('bcrypt');
const GenerateToken = require('../utils/TokenGeneration');


const RegisterOwner = (req, res) => {
    let owners = OwnerModel.find();
    if (owners.length > 0){
        return req.flash("error", "Can't create more than one owners");
    }

    let {Name, Email, Password, Contact} = req.body;

    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(Password, salt,async function(err, hash) {
            let newOwner = await OwnerModel.create({
                Name,
                Email,
                hash,
                Contact
            });

            var token = GenerateToken(newOwner);
            res.cookie("token", token);

            res.render("cart");
        });
    });
};

module.exports = RegisterOwner;