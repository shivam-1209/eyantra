const express = require("express");
const router = express.Router();
const path = require("path");
const { user } = require("../models/user"); //object destructuring feature will acquire thhe User model in User and validateuser function in validate.
const mongoose = require("mongoose");

router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    let a_user = await user.findOne({ email: req.body.email });
    if (a_user.password == req.body.password) {
      console.log("user authenticated");
      // res.cookie('email', req.body.email, {
      //     expires: new Date(Date.now() +  '1d'), //token will expire in 1 day.
      //     secure: false, // set to true if your using https
      //     httpOnly: true,});
      res.sendFile(path.join(__dirname, "../public/dashboard.html"));
      // res.redirect("/")
    } else {
      res.send("User not valid");
    }

    //res.sendFile(path.join(__dirname,'../public/login.html'))
  } catch (err) {
    console.log("Inside error");
    res.send({ message: err });
  }
});

module.exports = router;
