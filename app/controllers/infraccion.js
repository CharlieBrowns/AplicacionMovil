'use strict'

const Infraccion = require('../models/infraccion')

async function newInfraccion (req, res) {
    const newInfraccion  = new Infraccion({
        Dni_conductor : req.body.Dni,
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
        Observaciones               : req.body.Observaciones
    })

    var infraccion = await newInfraccion.save()

    res.send({message: 'datos ingresados correctamente '})
}

async function getInfracciones (req, res) {
    var Infraciones_Registradas = await Infraccion.find()

    res.send(Infraciones_Registradas)
}

async function getInfraccion (req, res) {
    var persona = await Persona.find({
        id_ : req.body.id
    })

    res.send(persona)
}

module.exports = {
    newInfraccion,
    getInfraccion,
    getInfracciones
}