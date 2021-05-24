const express = require("express");
const { detail } = require("../models/detail");
const router = express.Router();
const path = require("path");
const mongoose = require("mongoose");
router.use(express.json());
router.use(express.urlencoded({ extended: true }));
var localStorage = require("localStorage");

router.post("/", (req, res) => {
  //console.log("before spawn", req.body);
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
  //console.log("before spawn", req.body);
  //console.log(process.cwd());
  var proc = spawn(
    "python",
    [
      "hello.py",
      req.body.Fever,
      req.body.Resp,
      req.body.Spo2,
      req.body.CRP,
      req.body.HRCT,
    ],
    {
      //   stdio: "ignore",
      cwd: `${process.cwd()}/routes`,
    }
  );

  //console.log("after");
  //console.log(proc);
  // Takes stdout data from script which executed
  // with arguments and send this data to res object
  proc.stdout.on("data", function (data) {
    console.log(data.toString());

    if (data.toString() == "moderate") {
      res.cookie(
        "meetLink",
        "https://us05web.zoom.us/j/85936919025?pwd=MEVweGptUUJITUk4dHpTRkVGa1hJdz09",
        {
          expires: new Date(Date.now() + "1d"), //token will expire in 1 day.
          secure: false, // set to true if your using https
          httpOnly: true,
        }
      );
      //   localStorage.setItem(
      //     "meetLink",
      //     "https://us05web.zoom.us/j/85936919025?pwd=MEVweGptUUJITUk4dHpTRkVGa1hJdz09"
      //   );
    } else if (data.toString() == "severe") {
      res.cookie(
        "meetLink",
        "https://us05web.zoom.us/j/83434957549?pwd=RHIzZFlkWG1wOHZkdnpqcUNXTzE1UT09",
        {
          expires: new Date(Date.now() + "1d"), //token will expire in 1 day.
          secure: false, // set to true if your using https
          httpOnly: true,
        }
      );
      //   localStorage.setItem(
      //     "meetLink",
      //     "https://us05web.zoom.us/j/83434957549?pwd=RHIzZFlkWG1wOHZkdnpqcUNXTzE1UT09"
      //   );
    } else {
      res.cookie(
        "meetLink",
        "https://us05web.zoom.us/j/82530230399?pwd=aXhmNzliYXlmNVR1NEFxRGFHSGEwQT09",
        {
          expires: new Date(Date.now() + "1d"), //token will expire in 1 day.
          secure: false, // set to true if your using https
          httpOnly: true,
        }
      );
      //   localStorage.setItem(
      //     "meetLink",
      //     "https://us05web.zoom.us/j/82530230399?pwd=aXhmNzliYXlmNVR1NEFxRGFHSGEwQT09"
      //   );
    }
    //console.log(localStorage.getItem("meetLink"));
    console.log(req.cookies);
    res.sendFile(path.join(__dirname, "../public/dashboard.html"));
  });

  proc.stderr.on("data", function (data) {
    console.log(data.toString());
    res.sendFile(path.join(__dirname, "../public/dashboard.html"));
  });
});

module.exports = router;
