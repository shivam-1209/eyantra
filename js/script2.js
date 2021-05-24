//details.js

const express = require('express')
const path = require('path')
const app = express()
//const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const { MongoClient } = require('mongodb');
const detail = require('../models/details')
require("dotenv/config")


app.use(express.json());
//  app.use(bodyParser.urlencoded({
//      extended: true
//  }));
//  app.use(bodyParser.json());
mongoose.connect("mongodb+srv://coolsm12:Shivam123@cluster0.uctxn.mongodb.net/UserDetails?retryWrites=true&w=majority",{ useUnifiedTopology: true,useNewUrlParser: true }, (req, res) => {
    console.log("Connected to database");
})

app.listen(3000,  () => {
	console.log('Server up')
})

app.get('/', function (req, res) {
	res.send("pahuch gaye")	
})

app.post("/store_detail",async (req, res) => {
    try {
        console.log("inside store detail");
        const mydetail = new detail(req.body);
        await mydetail.save();
        res.send(mydetail);
    }
    catch (err) {
        console.log("Inside error");
        res.send({message:err})
    }
})

// app.get("/users/:email", async (req, res) => {
//     try {
//         const id = req.params.email;
//         console.log(id);
//         const ap = await user.find({ email: id })
//         if (ap) {
//             res.status(200).json(ap);
//         }
//         else {
//             res.status(404).json({ message: "No valid entry found" });
//         }
//     }
    
//     catch(err) {
//         res.status(500).json({ message: err });
//       };
//   });