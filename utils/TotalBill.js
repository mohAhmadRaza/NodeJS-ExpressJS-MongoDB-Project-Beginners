const CustomerModel = require('../models/customerModel');

const TotalBill = async (req, res) => {
    let User = await CustomerModel.findOne({_id: req.user._id}).populate("Cart");
 
    let finalBill = User.Cart.map(function(product){
        return Number(product.Price) + 30 - Number(product.Discount);
    });

    let sum = 0;
    for (let value of finalBill) {
        sum += value;
    }

    res.render("cart", {User, finalBill, sum});
}

module.exports = TotalBill;