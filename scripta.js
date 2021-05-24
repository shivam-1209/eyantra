//user.js

const express = require('express')
const path = require('path')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const { MongoClient } = require('mongodb');
const user = require('../models/user')
require("dotenv/config")


app.use(express.json());
app.use(express.urlencoded({extended : true}));


//  app.use(bodyParser.urlencoded({
//      extended: true
//  }));
//  app.use(bodyParser.json());
mongoose.connect("mongodb+srv://coolsm12:Shivam123@cluster0.uctxn.mongodb.net/UserDetails?retryWrites=true&w=majority",{ useUnifiedTopology: true,useNewUrlParser: true }, (req, res) => {
    console.log("Connected to database");
})

app.listen(5500,  () => {
	console.log('Server up')
})

app.get('/', function (req, res) {
    console.log(__dirname)
	res.sendFile(path.join(__dirname,'/public/signup.html'))	
})

app.post("/create_user",async (req, res) => {
    try {
        console.log(req.body);
        // const myuser = new user(req.body);
        // await myuser.save();
        res.send(req.body);
    }
    catch (err) {
        console.log("Inside error");
        res.send({message:err})
    }
})

app.get("/users/:email", async (req, res) => {
    try {
        const id = req.params.email;
        console.log(id);
        const ap = await user.find({ email: id })
        if (ap) {
            res.status(200).json(ap);
        }
        else {
            res.status(404).json({ message: "No valid entry found" });
        }
    }
    
    catch(err) {
        res.status(500).json({ message: err });
      };
});
  
app.use(express.static('public'));