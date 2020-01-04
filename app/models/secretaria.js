'use strict'

const Mongoose = require('mongoose')
const Schema = Mongoose.Schema

const Secretaria = new Schema({
    Password : {type : String , required : true},
    persona : { type: Schema.ObjectId, ref: "Persona" }
})

module.exports = Mongoose.model('secretaria' , Secretaria)