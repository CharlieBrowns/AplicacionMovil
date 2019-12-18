'use strict'

const Mongoose = require('mongoose')

const Trabajador = new Mongoose.Schema({
    id_trabajador : {type: String, required : true},
    Apellido_Paterno : {type : String, required : true},
    Apellido_Materno : {type : String, required : true},
    Nombres : {type : String, required : true},
    Domicilio : {type : String, required : true}
})

module.exports = Mongoose.model('Trabajador', Trabajador)


