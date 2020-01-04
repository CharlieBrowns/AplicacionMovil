'use strict'

const Vehiculo = require('../models/vehiculo') 

async function getIncauto (req, res) {
    var Vehiculos_Incautados = await Vehiculo.find()

    res.send(Vehiculos_Incautados)
}

async function newIncauto (req, res) {
    console.log("el nuevo vehiculo incautato" , req.body)
    const newVehiculo  = new Vehiculo({
        Dni_Propietario : req.body.Dni_Propietario,
        Dni_Infractor : req.body.Dni_Infractor,
        Fecha_Ingreso : req.body.Fecha_Ingreso,
        Fecha_Salida     : req.body.Fecha_Salida,
        Nro_Tarjeta_Propiedad : req.body.Nro_Tarjeta_Propiedad,
        Modalidad_Servicio : req.body.Modalidad_Servicio,
        Tipo_Servicio : req.body.Tipo_Servicio,
        Nro_Placa : req.body.Nro_Placa
    })
    var vehiculo = await newVehiculo.save()

    console.log("lo que ingresamos : " , vehiculo)
    res.send(vehiculo)
}

module.exports = {
    getIncauto,
    newIncauto
}