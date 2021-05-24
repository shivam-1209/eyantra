const mongoose = require('mongoose')

const DetailSchema = new mongoose.Schema({
    email: String,
    SymptomDays:  Number, 
    Fever: Number,          
    Resp: Number,
    Spo2: Number,
    CRP: Number,
    HRCT: Number,
    Como: String,
    symptom1: String,
    symptom2: String,
    symptom3: String,
    symptom4: String,
    symptom5: String,
    symptom6: String,
    symptom7: String
})


const detail = mongoose.model('detail', DetailSchema)

exports.detail = detail