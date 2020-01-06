'use strict'

const secret = require('express').Router()
const secretariaCtrl = require('../controllers/secretaria')

secret
    .get('/getPays', secretariaCtrl.getPays)

    .post('/newPay', secretariaCtrl.newPay)

module.exports = secret