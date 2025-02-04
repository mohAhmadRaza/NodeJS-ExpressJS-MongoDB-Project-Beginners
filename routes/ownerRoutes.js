const express = require("express");
const OwnerModel = require("../models/ownersModel");
const router = express.Router();

router.get("/", async function (req, res) {
  let owners = OwnerModel.find();
  if (owners.length > 0){
    return res.send(503).send("Owner already present, no addition.")
  }

  let {Name, Email, Password, Contact} = req.body;

  let newOwner = await OwnerModel.create({
    Name,
    Email,
    Password,
    Contact
  });

  res.send(newOwner);
});


router.post("/create", function (req, res) {
res.send("Hi");
});

module.exports = router;
