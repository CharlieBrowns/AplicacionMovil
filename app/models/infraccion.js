'use strict'

const Mongoose = require('mongoose')

const Infraccion = new Mongoose.Schema({
    Codigo_Conducta : {type : String, required : true},
    Descripcion_Infraccion : {type : String, required : true},
    Fecha : {type : String, required : true},
    Hora : {type : String, required : true},
    Monto : {type: Number, required : true},
    Lugar_Ocurrencia : {type : String, required : true},
    Medida_Preventiva_Aplicada : {type : String, required : true},
    Accidente_Transito : {type : String, required : true}
})



module.exports = Mongoose.model('Infraccion', Infraccion)

