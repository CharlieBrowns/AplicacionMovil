'use strict'

const Mongoose = require('mongoose')

const Infraccion = new Mongoose.Schema({

    //datos del  conductor

    Dni_conductor : { type : String , required : true},
    Tipo_Documento : { type : String , required : true},
    Apellido_Paterno : { type : String , required : true},
    Apellido_Materno : { type : String , required : true},
    Nombres : { type : String , required : true},
    Domicilio : { type : String , required : true},
    Departamento : { type : String , required : true},
    Provincia : { type : String , required : true},
    Distrito : { type : String , required : true},

    // Datos del vehiculo
    N_Placa : {type : String, required : true},
    N_TarjetaPropiedad : {type : String, required : true},
    ModalidadServicio : {type : String, required : true},
    Tipo_Servicio : {type : String, required : true},

    // Datos de la infraccion

    Codigo_Conducta : {type : String, required : true},
    Fecha : {type : String, required : true},
    Hora : {type : String, required : true},
    Lugar_Ocurrencia : {type : String, required : true},
    Departamento_Infraccion : {type : String, required : true},
    Provincia_Infraccion : {type : String, required : true},
    Distrito_Infraccion : {type : String, required : true},
    Medida_Preventiva : {type : String, required : true},
    Accidente_Transito : {type : String, required : true},

    // Datos del testigo

    Dni_Testigo : {type : String, required : true},
    Tipo_Documento_Testigo : {type : String, required : true},
    Apellido_Paterno_Testigo : {type : String, required : true},
    Apellido_Materno_Testigo : {type : String, required : true},
    Nombres_Testigo : {type : String, required : true},
    Medio_Probatorio : {type : String, required : true},

    //Datos de la autoridad que levanta la papeleta

    Apellido_Paterno_Autoridad : {type : String, required : true},
    Apellido_Materno_Autoridad : {type : String, required : true},
    Nombres_Autoridad : {type : String, required : true},
    Nro_CP : {type : String, required : true},
    Observaciones : {type : String, required : true},

})



module.exports = Mongoose.model('Infraccion', Infraccion)

