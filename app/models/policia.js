'use strict'

const Mongoose = require('mongoose')

const Policia = new Mongoose.Schema({
    DNI_policia : {type : Number, required : true},
    N_de_CIP : {type : String , required : true},
    Cargo : {type : String , required : true},
    Worker : { type: Schema.ObjectId, ref: "Trabajador" }
})

module.exports = Mongoose.model('Policia' , Policia)