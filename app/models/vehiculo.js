'use strict'

const Mongoose = require('mongoose')

// se me van todos a ña mierda

const Vehiculo = new Mongoose.Schema({
    Dni_Propietario : {type : Number, required : true},
    Dni_Infractor : {type : Number, required : true},
    Fecha_Ingreso : {type : String, required : true},
    Fecha_Salida : {type : String, required : true},
    Nro_Tarjeta_Propiedad : {type : Number, required : true},
    Modalidad_Servicio : {type : String, required : true},
    Tipo_Servicio : {type : String, required : true},
    Nro_Placa : {type : String, required : true},
})



module.exports = Mongoose.model('Vehiculo', Vehiculo)

