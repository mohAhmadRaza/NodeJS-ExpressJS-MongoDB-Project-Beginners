const mongoose = require('mongoose');
require("dotenv").config();

mongoose.connect(`${process.env.MONGODB_URL}Scatch`)
.then(function(){
    console.log("Successfully Connected!!");
})
.catch(function(err){
    console.log("Not Successfully conneted");
});

module.exports = mongoose.connection;