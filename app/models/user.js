'use strict'

const Mongoose = require('mongoose')

const User = new Mongoose.Schema({
    nombres : {type : String, required : true},
    apellidos : {type : String , required : true},
    DNI : {type : Number, required : true},
    password : {type: String, required : true}
})

module.exports = Mongoose.model('User' , User)