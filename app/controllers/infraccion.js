'use strict'

const Infraccion = require('../models/infraccion')

var data = 0;

async function newInfraccion (req, res) {

    console.log("la infraccion  : " , req.body)
    if (data == 0) {
        const newInfraccion  = new Infraccion({
            Dni_Conductor : req.body.Dni_Conductor,
            Tipo_Documento : req.body.Apellido_Paterno,
            Apellido_Paterno : req.body.Apellido_Materno,
            Apellido_Materno : req.body.Apellido_Materno,
            Nombres          : req.body.Nombres,
            Domicilio        : req.body.Domicilio,
            Departamento     : req.body.Departamento,
            Provincia        : req.body.Provincia,
            Distrito         : req.body.Distrito,

            N_Placa          : req.body.N_Placa,
            N_TarjetaPropiedad  : req.body.N_TarjetaPropiedad,
            ModalidadServicio   : req.body.ModalidadServicio,
            Tipo_Servicio    : req.body.Tipo_Servicio,

            Codigo_Conducta  : req.body.Codigo_Conducta,
            Fecha            : req.body.Fecha,
            Hora             : req.body.Hora,
            Lugar_Ocurrencia : req.body.Lugar_Ocurrencia,
            Departamento_Infraccion : req.body.Departamento_Infraccion,
            Provincia_Infraccion    : req.body.Provincia_Infraccion,
            Distrito_Infraccion     : req.body.Distrito_Infraccion,
            Medida_Preventiva       : req.body.Medida_Preventiva,
            Accidente_Transito      : req.body.Accidente_Transito,

            Dni_Testigo             : req.body.Dni_Testigo,
            Tipo_Documento_Testigo  : req.body.Tipo_Documento_Testigo,
            Apellido_Paterno_Testigo    : req.body.Apellido_Paterno_Testigo,
            Apellido_Materno_Testigo    : req.body.Apellido_Materno_Testigo,
            Nombres_Testigo             : req.body.Nombres_Testigo,
            Medio_Probatorio            : req.body.Medio_Probatorio,

            Apellido_Paterno_Autoridad  : req.body.Apellido_Paterno_Autoridad,
            Apellido_Materno_Autoridad  : req.body.Apellido_Materno_Autoridad,
            Nombres_Autoridad           : req.body.Nombres_Autoridad,
            Nro_CP                      : req.body.Nro_CP,
            Observaciones               : req.body.Observaciones,
            Costo                       : req.body.Costo
        })
        data = data + 1;
        var infraccion = await newInfraccion.save()
        //data = data + 1;
        res.send({message: 'datos ingresados correctamente '})
    }else {
        console.log("ya no se puede" )
        data = 0;
    }
}

async function getInfracciones (req, res) {

    console.log("las infracciones ");

    var Infraciones_Registradas = await Infraccion.find()

    res.send({dataserver : Infraciones_Registradas })
}

async function getInfraccion (req, res) {
    var persona = await Persona.find({
        id_ : req.body.id
    })

    res.send({dataserver : persona})
}

async function userInfraccion (req, res) {
    console.log("el dni del infractor" , req.body.Dni)
    var persona = await Infraccion.find({
        Dni_Conductor : req.body.Dni
    })

    console.log("los datos que estamos recuperando", persona)
    res.send({dataserverR : persona})
}

module.exports = {
    newInfraccion,
    getInfraccion,
    getInfracciones,
    userInfraccion
}