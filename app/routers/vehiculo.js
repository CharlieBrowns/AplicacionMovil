'use strict'

const movil = require('express').Router()
const vehiculoCtrl = require('../controllers/vehiculo')

movil

    .get('/getIncautos', vehiculoCtrl.getIncautos)

    .post('/newIncauto', vehiculoCtrl.newIncauto)

module.exports = movil

