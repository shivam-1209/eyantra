const express = require('express');
const router = express.Router();
const path = require("path");
const jwt = require('jsonwebtoken');
//const config = require('config');
//const { User } = require('../models/user');

router.get('/', function (req, res) {

	res.sendFile(path.join(__dirname,'../public/signup.html'))	
})


module.exports = router;