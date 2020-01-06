'use strict'

const infraccion = require('express').Router()
const infraccionCtrl = require('../controllers/infraccion')

infraccion

    .post('/newInfraccion', infraccionCtrl.newInfraccion)

    .get('/userInfraccion' , infraccionCtrl.userInfraccion)

    .get('/getInfracciones', infraccionCtrl.getInfracciones)

    .post('/getInfraccion' , infraccionCtrl.getInfraccion)


module.exports = infraccion


