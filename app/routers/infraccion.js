'use strict'

const infraccion = require('express').Router()
const infraccionCtrl = require('../controllers/infraccion')

infraccion

    .post('/newInfraccion', infraccionCtrl.newInfraccion)

    .get('/getInfracciones', infraccionCtrl.getInfracciones)

    .get('/getInfraccion' , infraccionCtrl.getInfraccion)


module.exports = infraccion


