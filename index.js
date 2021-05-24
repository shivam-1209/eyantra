//user.js

const express = require("express");
const path = require("path");
const app = express();
//const bodyParser = require('body-parser')
const mongoose = require("mongoose");
const { MongoClient } = require("mongodb");
const user = require("./models/user");
const users = require("./routes/users"); //for users
//const auth = require('./routes/auth');
const home = require("./routes/home");
const detail = require("./routes/details");
const auth = require("./routes/auth");
const cookieParser = require("cookie-parser");
//require("dotenv/config")
require("dotenv").config();
app.use("/details", detail);
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use("/", home);
app.use("/users", users);

app.use("/auth", auth);

//  app.use(bodyParser.urlencoded({
//      extended: true
//  }));
//  app.use(bodyParser.json());
// if(!config.get('jwtPrivateKey'))
//     {
//         console.error('FATALERROR : jwt privatekey not defined');
//          process.exit(1);
//     }

// mongoose.connect("mongodb+srv://coolsm12:Shivam123@cluster0.uctxn.mongodb.net/UserDetails?retryWrites=true&w=majority", { useUnifiedTopology: true, useNewUrlParser: true }, (req, res) => {
//     console.log("Connected to database");
// })

mongoose
  .connect("mongodb://localhost/eyecovid") // connection string for mongo db
  .then(() => console.log("connected to db")) //debugging info to know whether connected or not
  .catch((err) => console.log("error while connecting to db : ", err)); // if errr occurs

app.listen(5500, () => {
  console.log("Server up");
});

// app.post("/create_user",async (req, res) => {
//     try {
//         console.log(req.body);
//         // const myuser = new user(req.body);
//         // await myuser.save();
//         res.send(req.body);
//     }
//     catch (err) {
//         console.log("Inside error");
//         res.send({message:err})
//     }
// })

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
// });

app.use(express.static("public"));
