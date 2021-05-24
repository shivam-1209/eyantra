const express = require("express");
// const { detail } = require("../models/detail");
const app = express();
// const path = require("path");
// const mongoose = require("mongoose");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.post("/", (req, res) => {
  console.log("before spawn", req.body);
  // Use child_process.spawn method from
  // child_process module and assign it
  // to variable spawn
  var spawn = require("child_process").spawn;

  // Parameters passed in spawn -
  // 1. type_of_script
  // 2. list containing Path of the script
  //    and arguments for the script

  // E.g : http://localhost:3000/name?firstname=Mike&lastname=Will
  // so, first name = Mike and last name = Will
  console.log("before spawn", req.body);
  var process = spawn(
    "python",
    ["hello.py", req.body.a, req.body.b, req.body.c, req.body.d, req.body.e],
    { stdio: "ignore" }
  );

  console.log("after");
  // Takes stdout data from script which executed
  // with arguments and send this data to res object
  process.stdout.on("data", function (data) {
    console.log(data.toString());

    res.send(data.toString());
  });
  process.stderr.on("data", function (data) {
    console.log(data.toString());
    res.send(data.toString());
  });
});

// router.post("/", async (req, res) => {
//   //try {
//     console.log(req.body);
//     console.log(req.cookies.email);
//     const mydetail = new detail(req.body);
//     mydetail.email = req.cookies.email;
//await mydetail.save();

// var spawn = require("child_process").spawn;

// // Parameters passed in spawn -
// // 1. type_of_script
// // 2. list containing Path of the script
// //    and arguments for the script

// // E.g : http://localhost:3000/name?firstname=Mike&lastname=Will
// // so, first name = Mike and last name = Will
// console.log("before spawn");
// var process = spawn("python", ["hello.py", 98, 15, 98, 5, 12]);
// console.log("after");
// // Takes stdout data from script which executed
// // with arguments and send this data to res object
// process.stdout.on("data", function (data) {
//   console.log(data.toString());
//   res.send(data.toString());
// });

//console.log("detail saved \n");
//res.sendFile(path.join(__dirname, "../public/dashboard.html"));
//   } catch (err) {
//     console.log("Inside error");
//     res.send({ message: err });
//   }
//});

// function callName(req, res) {

// }

app.listen(3001, function () {
  console.log("server running on port 3050");
});
