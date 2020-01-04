'use strict'

const movil = require('express').Router()
const vehiculoCtrl = require('../controllers/vehiculo')

movil

    .get('/getIncauto', vehiculoCtrl.getIncauto)

    .post('/newIncauto', vehiculoCtrl.newIncauto)

module.exports = movil

