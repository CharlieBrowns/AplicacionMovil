'use strict'

const Mongoose = require('mongoose')

const Vehiculo = new Mongoose.Schema({
    Tipo_Vehiculo : {type : String, required : true},
    Fecha_Ingreso : {type : String, required : true},
    Fecha_Salida : {type : String, required : true},
    Tarjeta_Propiedad : {type : Number, required : true},
    Modalidad_Servicio : {type: String, required : true},
    Tipo_Servicio : {type : String, required : true}
})

module.exports = Mongoose.model('Vehiculo', Vehiculo)

