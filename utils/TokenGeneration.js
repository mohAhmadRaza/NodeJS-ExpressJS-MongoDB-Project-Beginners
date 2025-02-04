const jwt = require('jsonwebtoken');

const GenerateToken = (user) => {
    var token = jwt.sign({ Email: Email, Id: newUser._id }, process.env.JWT_KEY);
    return token;
};

module.exports = GenerateToken;