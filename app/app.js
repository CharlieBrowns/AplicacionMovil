'use strict'

const app = require('express')(),
      port = (process.env.PORT || 3000),
      cors = require('cors'),
      bodyParser = require('body-parser'),
      
      logguer = require('./routers/logger'),
      vehiculo = require('./routers/vehiculo'),
      infraccion = require('./routers/infraccion'),
      secretaria = require('./routers/secretaria')
      


app
    .set('port',port)
    .use(bodyParser.urlencoded({extended:true}))
    .use(bodyParser.json())
    .use(cors())
    .use('/', logguer)
    .use('/', vehiculo)
    .use('/', infraccion)
    .use('/', secretaria)

module.exports = app
