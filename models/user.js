const mongoose = require('mongoose')
// const Joi = require('joi');
// const jwt = require('jsonwebtoken');
// const config = require('config');

const UserSchema = new mongoose.Schema({
    name:  String, // String is shorthand for {type: String}
    gender:String,          //number
    email: String,
    password: String,
    phone: Number,
    aadhar: Number,
    dob:Date
})

// UserSchema.methods.generateAuthtoken = function(){
//     const token = jwt.sign({_id : this._id}, config.get('jwtPrivateKey'),{ expiresIn: '7d'});
//      return token;
//  }
const user = mongoose.model('user', UserSchema)

exports.user = user