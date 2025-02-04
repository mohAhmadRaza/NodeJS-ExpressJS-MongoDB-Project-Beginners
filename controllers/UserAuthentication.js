const authenticate = function (req, res) {
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
      res.send(error);
    }
};

module.exports = authenticate;