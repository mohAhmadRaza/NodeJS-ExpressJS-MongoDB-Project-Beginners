const jwt = require('jsonwebtoken');

const GenerateToken = (user) => {
    var token = jwt.sign({ Email: user.Email, Id: user._id }, process.env.JWT_KEY);
    return token;
};

module.exports = GenerateToken;