// const jwt = require('jsonwebtoken');
const path = require('path')
// const config = require('config');
const express = require('express');
// const bcrypt = require('bcrypt');
// const _ = require('lodash');
const { user } = require('../models/user'); //object destructuring feature will acquire thhe User model in User and validateuser function in validate.
//const auth = require("../middleware/auth");
const router = express.Router();


router.post('/', async (req, res) => {
    try {
                console.log(req.body);
                const myuser = new user(req.body);
                await myuser.save();
            console.log("user saved \n")
            res.sendFile(path.join(__dirname,'../public/login.html'))
            }
            catch (err) {
                console.log("Inside error");
                res.send({message:err})
            }  
})


// router.post('/', async (req,res) => {    
//     //if new user creation then this below
    
//     if (!req.cookies.token){ //checking if pre logged in user or newbie/\/\

//         // const { error } = validate(req.body);
//         // if(error) return res.status(400).send(error.details[0].message);
        
//         try{
//             let user = await User.findOne({ email : req.body.email });
//             if(user) return res.status(400).send('user is already registered with this email.');
//             user = new User(_.pick(req.body, ['name','gender', 'email', 'password' , 'phone', 'aadhar','dob' ])) 
//             const salt = await bcrypt.genSalt(10);
//             user.password = await bcrypt.hash(user.password , salt)
//             await user.save();    
            
//             const token =await user.generateAuthtoken(res, user._id);
//             res.cookie('token', token, {
//             expires: new Date(Date.now() +  '1d'), //token will expire in 1 day.
//             secure: false, // set to true if your using https
//             httpOnly: true,});
//             res.redirect('/');
//         }
//         catch(ex)
//         {
//             res.status(500).send("internal server error");
//         }
//         // can show the profile here also but registering leads to new festures rather than showing the profile
//     }//else if(!req.body.params.name)password updation
    
//     else{ //if user has token then considering this post request as to update profile .
        
//         // const { error } = validate(req.body);
//         // if(error) return res.status(400).send(error.details[0].message);
        
//         try{
//             const decoded = jwt.verify(req.cookies.token,config.get('jwtPrivateKey'))
//             const user = await User.findById(decoded._id);
//             user.set(_.pick(req.body, ['name','gender', 'email', 'password' , 'phone', 'aadhar','dob' ]))
//             const salt = await bcrypt.genSalt(10);
//             user.password = await bcrypt.hash(user.password , salt)
//             await user.save();
//             res.redirect('/index');
//         }
    
//         catch(ex)
//         {
//             res.status(500).send("update failed, internal server error");
//         }
//     }
    
// });
// router.get("/",auth,async (req, res) => { 
//     const id = req.user._id;
//     const data = await User.findOne({_id:id})
//     res.render('userdata',data);
//   })
  


// router.get("/:id",auth,async(req,res)=>{
//      await User.findByIdAndRemove(req.user._id);
//      res.clearCookie('token') 
//      res.redirect("/index")
// })

module.exports = router;
