'use strict'

const Mongoose = require('mongoose')

const Secretaria = new Mongoose.Schema({
    DNI_Secretaria : {type : Number, required : true},
    Worker : { type: Schema.ObjectId, ref: "Trabajador" }
})

module.exports = Mongoose.model('secretaria' , Secretaria)