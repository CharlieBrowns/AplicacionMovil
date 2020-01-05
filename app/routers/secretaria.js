'use strict'

const secret = require('express').Router()
const secretariaCtrl = require('../controllers/secretaria')

secret

    .get('/register', secretariaCtrl.newPay)

    .post('/login', secretariaCtrl.getPays)

module.exports = secret