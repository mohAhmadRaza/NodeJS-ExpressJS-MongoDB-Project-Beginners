const mongoose = require('mongoose');

const ownerSchema = mongoose.Schema({
    Name: String,
    Email: String,
    Password: String,
    Products: {
        type: Array,
        default : []
    },
    ProfilePicture: String,
    Contact: Number,
    GstInf: String
});

const OwnerModel = mongoose.model("owner", ownerSchema);

module.exports = OwnerModel;