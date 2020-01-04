'use strict'

const Mongoose = require('mongoose')
const Schema = Mongoose.Schema

const Policia = new Schema({
    Password : {type : String , required : true},
    N_de_CIP : {type : String , required : true},
    Cargo : {type : String , required : true},
    persona : { type: Schema.ObjectId, ref: "Persona" }
})

module.exports = Mongoose.model('Policia' , Policia)