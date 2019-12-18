'use strict'

const logger = require('express').Router()
const logguerCtrl = require('../controllers/logger')

logger
    .post('/register', logguerCtrl.signUp)

    .post('/login', logguerCtrl.signIn)

module.exports = logger


