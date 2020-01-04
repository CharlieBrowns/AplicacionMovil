'use strict'

const Mongoose = require('mongoose')
const Schema = Mongoose.Schema;

const Infractor = new Schema({
    Password : {type : String , required : true},
    persona : { type: Schema.ObjectId, ref: "Persona" }
})

module.exports = Mongoose.model('Infractor' , Infractor)