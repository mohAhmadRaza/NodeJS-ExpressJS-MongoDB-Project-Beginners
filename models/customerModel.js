const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({
    Name: String,
    Email: String,
    Cart: {
        type: Array,
        default: []
    },
    Password: String,
    Orders: {
        type: Array,
        default : []
    },
    ProfilePicture: String,
    Contact: Number
});

const CustomerModel = mongoose.model("customer", customerSchema);

module.exports = CustomerModel;